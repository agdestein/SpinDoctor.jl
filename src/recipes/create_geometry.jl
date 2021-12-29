"""
    create_geometry(setup)

Create cells, surfaces and finite element mesh.
This function does the following:
- Check geometry setup consistency
- Create or load cell configuration
- Create or load surface triangulation
- Call TetGen
- Deform domain
- Split mesh into compartments
For custom geometries with more than one compartment, call `split_mesh`
directly instead. This requires facet and element labels.
"""
function create_geometry(setup)

    (; ncell, ecs_shape, refinement) = setup

    # File name for saving or loading geometry
    filename = "meshfiles" * "/" * setup.name

    # Make sure that folder exists
    dir = dirname(filename)
    isdir(dir) || mkpath(dir)

    # Check correct input format
    if isa(setup, NeuronSetup) && ncell != 1
        error("Neuron cell type is only available for ncell=1.")
    end
    !(ecs_shape == "no_ecs" && ncell > 1) ||
        @error "Geometry must include ECS if more than one cell"
    ecs_shape ∈ ["no_ecs", "box", "convex_hull", "tight_wrap"] || error("Invalid ECS shape")

    # Check if cell description file is already available
    cellfilename = filename * "_cells"
    if isfile(cellfilename)
        cells = read_cells(cellfilename)
    elseif isa(setup, SphereSetup) || isa(setup, CylinderSetup)
        cells = create_cells(setup)
        save_cells(cells, cellfilename)
    else
        cells = nothing
    end

    # Make directory for storing finite elements mesh
    is_stl = endswith(filename, ".stl")
    if is_stl
        ecs_shape == "no_ecs" || error("ECS is only available for surface meshes")
        filename = filename[1:end-4]
    end
    save_meshdir_path = filename * "_dir"
    isdir(save_meshdir_path) || mkpath(save_meshdir_path)

    # Use an existing finite elements mesh or create a new finite elements mesh. The name of
    # the finite elements mesh is stored in the string `fname_tetgen_femesh`
    refinement_str = isnothing(refinement) ? "" : "_refinement$refinement"
    fname_tetgen =
        "$save_meshdir_path/$(split(filename, "/")[end])$(refinement_str)_mesh"

    # Read or create surface triangulation
    if is_stl
        surfaces = nothing
    elseif isfile(fname_tetgen * ".node") && isfile(fname_tetgen * ".poly")
        surfaces = read_surfaces(fname_tetgen)
    else
        if isa(setup, Union{SphereSetup,CylinderSetup})
            surfaces = create_surfaces(setup, cells)
        elseif isa(setup, NeuronSetup)
            surfaces = create_surfaces(setup, filename)
        end
        save_surfaces(fname_tetgen, surfaces)
    end

    # Add ".1" suffix to output file name, since this is what Tetgen does
    fname_tetgen_femesh = fname_tetgen * ".1"

    if isfile(fname_tetgen_femesh * ".node")
        # Read global mesh from Tetgen output
        mesh_all = read_tetgen(fname_tetgen_femesh)
    elseif is_stl
        error("Not implemented")
    else
        mesh_all = call_tetgen(surfaces, refinement)
        save_tetgen(mesh_all, fname_tetgen_femesh)
    end

    # # Check that at correct number of compartments and boundaries has been found
    # compartments_new = unique(mesh_all.elementmarkers)
    # boundaries_new = unique(mesh_all.facetmarkers)

    # solution = "use smaller refinement or change surface triangulation."
    # length(compartments_new) == ncompartment ||
    #     @error "Incorrect number of compartments, " * solution
    # length(boundaries_new) == nboundary ||
    #     @error "Incorrect number of boundaries, " * solution

    # Deform domain
    if isa(setup, CylinderSetup) && (setup.bend > 1e-16 || setup.twist > 1e-16)
        @debug "Deforming domain with bend $(setup.bend) and twist $(setup.twist)"
        deform_domain!(mesh_all.points, setup.bend, setup.twist)
    end

    # Split mesh into compartments
    @time mesh = split_mesh(mesh_all)

    mesh, surfaces, cells
end
