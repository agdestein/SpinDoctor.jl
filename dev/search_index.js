var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SpinDoctor","category":"page"},{"location":"#SpinDoctor","page":"Home","title":"SpinDoctor","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SpinDoctor.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SpinDoctor]","category":"page"},{"location":"#SpinDoctor.SpinDoctor","page":"Home","title":"SpinDoctor.SpinDoctor","text":"Diffusion MRI modelling\n\n\n\n\n\n","category":"module"},{"location":"#SpinDoctor.AbstractCallback","page":"Home","title":"SpinDoctor.AbstractCallback","text":"AbstractCallback\n\nCallback to be performed after every time step when solving the BTPDE. The callback is initialized before time stepping using the initialize! function, updated after every step using update!, and finalized after time stepping using finalize!.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.AbstractGradient","page":"Home","title":"SpinDoctor.AbstractGradient","text":"AbstractGradient{T}\n\nMagnetic field gradient vecg(t).\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.CosOGSE","page":"Home","title":"SpinDoctor.CosOGSE","text":"f = CosOGSE(δ, Δ, nperiod)\n\nOscillating Gradient Spin Echo sequence with two cos-pulses of duration δ separated by a pause of duration Δ-δ for nperiod periods per pulse.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.DoublePGSE","page":"Home","title":"SpinDoctor.DoublePGSE","text":"f = DoublePGSE(δ, Δ)\n\nDouble Pulsed Gradient Spin Echo sequence with four pulses of duration δ, separated by pauses of duration Δ-δ, 0, and Δ-δ repsectively.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.GeneralGradient","page":"Home","title":"SpinDoctor.GeneralGradient","text":"GeneralGradient(g⃗)\n\nGeneral gradient sequence g⃗(t) ∈ R³. The direction and amplitude may vary in time.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.Model","page":"Home","title":"SpinDoctor.Model","text":"Model(mesh, ρ, D, T₂, κ, γ)\n\nDiscretized biological model with initial spin densities ρ, diffusion tensors D, T₂-relaxation times T₂, wall permeabilities κ, and gyromacnetic ratio γ (defaults to the one of water protons).\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.PGSE","page":"Home","title":"SpinDoctor.PGSE","text":"f = PGSE(δ, Δ)\n\nPulsed Gradient Spin Echo sequence with pulse duration δ and time between pulses Δ-δ.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.Plotter","page":"Home","title":"SpinDoctor.Plotter","text":"Plotter(; nupdate = 1)\n\nPlot the evolution of the BTPDE during time stepping. This requires loading the GLMakie plotting backend (]add GLMakie; using GLMakie). The plot is updated every nupdate time step. The resulting figure contains a plot of the time profile, total signal attenuation, and magnetization field (complex magnitude and phase shift).\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.Printer","page":"Home","title":"SpinDoctor.Printer","text":"Printer(; nupdate = 1)\n\nPrint time stepping information to the console.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.ScalarGradient","page":"Home","title":"SpinDoctor.ScalarGradient","text":"ScalarGradient(dir, profile, amplitude)\n\nGradient sequence with amplitude amplitude, normal direction dir and scalar time profile profile.\n\nThe direction is constant, while the amplitude is controlled by the time profile.\n\nThe direction is normalized upon construction.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.SinOGSE","page":"Home","title":"SpinDoctor.SinOGSE","text":"f = SinOGSE(δ, Δ, nperiod)\n\nOscillating Gradient Spin Echo sequence with two sin-pulses of duration δ separated by a pause of duration Δ-δ for nperiod periods per pulse.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.TimeProfile","page":"Home","title":"SpinDoctor.TimeProfile","text":"TimeProfile\n\nGeneral time profile type (gradient sequence).\n\nA TimeProfile should implement a calling method returning the value of the time profile at time t. It can optionally overwrite the echotime integral, and int_F² methods, the first providing a default value and the latter two computing numerical approximation to the integral quantities if not overwritten.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.TimeProfile-Tuple{Any}","page":"Home","title":"SpinDoctor.TimeProfile","text":"ft = (f::TimeProfile)(t)\n\nReturn the time profile value at time t.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.VTKWriter","page":"Home","title":"SpinDoctor.VTKWriter","text":"VTKWriter(; nupdate = 1, dir = \"output\", filename = \"solution\")\n\nWrite magnetization field to a VTK file after every nupdate timestep. The files are stored in a ParaView data collection file (PVD). The magnetization time series may be visualized in ParaView by opening the file \"$dir/$filename.pvd\". The compartments are labeled.\n\n\n\n\n\n","category":"type"},{"location":"#SpinDoctor.assemble_flux_matrices-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.assemble_flux_matrices","text":"assemble_flux_matrices(points, facets)\n\nAssemble flux matrix (Q) for each compartment and boundary.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.assemble_flux_matrix","page":"Home","title":"SpinDoctor.assemble_flux_matrix","text":"assemble_flux_matrix(facets, nodes[, weights])\n\nAssemble 3D flux matrix using P1 finite elements.\n\nThis function is based on the Matlab function flux_matrixP1_3D.m from the Matlab nodal matrix assembly toolbox by Jan Valdman and Talal Rahman.\n\nhttps://uk.mathworks.com/matlabcentral/fileexchange/27826-fast-fem-assembly-nodal-elements\n\nTalal Rahman and Jan Valdman: Fast MATLAB assembly of FEM matrices in 2D and 3D: nodal elements, Applied Mathematics and Computation 219, 7151–7158 (2013).\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.assemble_mass_matrix","page":"Home","title":"SpinDoctor.assemble_mass_matrix","text":"assemble_mass_matrix(elements, volumes[, weights])\n\nAssemble 3D mass matrix using P1 finite elements.\n\nThis function is based on the Matlab function mass_matrixP1_3D.m from the Matlab nodal matrix assembly toolbox by Jan Valdman and Talal Rahmnan:\n\nhttps://uk.mathworks.com/matlabcentral/fileexchange/27826-fast-fem-assembly-nodal-elements\n\nTalal Rahman and Jan Valdman: Fast MATLAB assembly of FEM matrices in 2D and 3D: nodal elements, Applied Mathematics and Computation 219, 7151–7158 (2013).\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.assemble_matrices-Tuple{Any}","page":"Home","title":"SpinDoctor.assemble_matrices","text":"assemble_matrices(model)\n\nAssemble finite element matrices.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.assemble_stiffness_matrix","page":"Home","title":"SpinDoctor.assemble_stiffness_matrix","text":"assemble_stiffness_matrix(elements, nodes[, D])\n\nAssemble 3D stiffness matrix using P1 finite elements. A diffusion tensor D may be provided.\n\nThis function is based on the Matlab function stiffness_matrixP1_3D.m from the Matlab nodal matrix assembly toolbox by Jan Valdman and Talal Rahman.\n\nhttps://uk.mathworks.com/matlabcentral/fileexchange/27826-fast-fem-assembly-nodal-elements\n\nTalal Rahman and Jan Valdman: Fast MATLAB assembly of FEM matrices in 2D and 3D: nodal elements, Applied Mathematics and Computation 219, 7151–7158 (2013).\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.call_tetgen","page":"Home","title":"SpinDoctor.call_tetgen","text":"call_tetgen(setup, surfaces)\n\nCall Tetgen on surface geometry.\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.coefficients-Union{Tuple{AbstractSetup{T}}, Tuple{T}} where T","page":"Home","title":"SpinDoctor.coefficients","text":"coefficients(setup; D, T₂, ρ, κ, γ)\n\nPrepare PDE compartments.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.compute_areas-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.compute_areas","text":"compute_areas(facets, nodes)\n\nCompute facet areas.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.compute_mf_diffusion_tensor","page":"Home","title":"SpinDoctor.compute_mf_diffusion_tensor","text":"compute_mf_diffusion_tensor\n\nCompute an effective diffusion tensors using the matrix formalism.\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.compute_signal-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.compute_signal","text":"compute_signal(M, ξ) = sum(M * ξ)\n\nCompute signal from magnetization ξ, using the mass matrix M for integration.\n\nGiven a mesh mesh and a vector of compartment mass matrices M_cmpts, a vector of compartment signals may be obtained by compute_signal.(M_cmpts, split_field(mesh, ξ)).\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.compute_∇φ-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.compute_∇φ","text":"compute_∇φ(nodes, points)\n\nCompute the gradients of the finite element basis functions φ.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.convexhull-Tuple{Any}","page":"Home","title":"SpinDoctor.convexhull","text":"elements, points = convexhull(points)\n\nCompute the convex hull of a set of points points (of size dim * npoint). Return a matrix of boundary elements elements (of sizedim * nelement) and a restriction of the original points to the boundary (size dim * npoint_keep).\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.couple_flux_matrix","page":"Home","title":"SpinDoctor.couple_flux_matrix","text":"couple_flux_matrix(model, Q_blocks[, symmetrical])\n\nCreate global flux matrix with coupling between compartments.\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.create_cells-Tuple{Any}","page":"Home","title":"SpinDoctor.create_cells","text":"create_cells(setup)\n\nCreate geometrical configuration of cells. Return mathematical description (radii, centers).\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.create_fibonacci_sphere-Tuple{Any}","page":"Home","title":"SpinDoctor.create_fibonacci_sphere","text":"create_fibonacci_sphere(npoint)\n\nCreate npoint evenly distributed points on the sphere.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.create_geometry-Tuple{Any}","page":"Home","title":"SpinDoctor.create_geometry","text":"create_geometry(setup)\n\nCreate cells, surfaces and finite element mesh. This function does the following:\n\nCheck geometry setup consistency\nCreate or load cell configuration\nCreate or load surface triangulation\nCall TetGen\nDeform domain\nSplit mesh into compartments\n\nFor custom geometries with more than one compartment, call split_mesh directly instead. This requires facet and element labels.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.create_surfaces-Tuple{CylinderSetup, Any}","page":"Home","title":"SpinDoctor.create_surfaces","text":"create_surfaces(setup::CylinderSetup, cells)\n\nCreate surface triangulation of [inner and] outer cylinders [and ECS].\n\nThe ground surface is triangulated first, before the walls are \"extruded\" and the top surface is copied from the ground surface.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.create_surfaces-Tuple{NeuronSetup, Any}","page":"Home","title":"SpinDoctor.create_surfaces","text":"create_surfaces(setup::NeuronSetup, filename)\n\nCreate neuron surface mesh. A neuron surface mesh is loaded or create and loaded. An ECS can be added.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.create_surfaces-Tuple{SphereSetup, Any}","page":"Home","title":"SpinDoctor.create_surfaces","text":"create_surfaces(setup::SphereSetup, cells)\n\nCreate surface triangulation of [inner and] outer spheres [and ECS].\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.echotime-Tuple{GeneralGradient}","page":"Home","title":"SpinDoctor.echotime","text":"echotime(gradient)\n\nGet echo time TE of gradient.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.echotime-Tuple{SpinDoctor.TimeProfile}","page":"Home","title":"SpinDoctor.echotime","text":"echotime(f)\n\nGet echo time TE of the time profile f, which is the end of the last characteristic interval.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.eig2length-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.eig2length","text":"eig2length(λ, D)\n\nConvert Laplace eigenvalue to length scale.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.fit_adc-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.fit_adc","text":"fit_adc(bvalues, signals)\n\nFit the apparent diffusion coefficient (ADC) using a polynomial logfit of the normalized signals signals against the b-values bvalues.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.fit_tensors-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.fit_tensors","text":"fit_tensors(directions, adcs)\n\nFit effective diffusion tensors to directionalized ADCs. The six components of the symmetric diffusion tensors are fitted by least squares to the gradient directions and resulting ADCs.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.get_cmpt_volumes-Tuple{Any}","page":"Home","title":"SpinDoctor.get_cmpt_volumes","text":"get_cmpt_volumes(mesh)\n\nGet compartment volumes.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.get_mesh_surface-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.get_mesh_surface","text":"get_mesh_surface(points, facets)\n\nCompute surface areas, centers and normals for each facet.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.get_mesh_surfacenormals-Tuple{Any, Any, Any}","page":"Home","title":"SpinDoctor.get_mesh_surfacenormals","text":"get_mesh_surfacenormals(points, elements, facets)\n\nComputing outwards oriented surface normals on a connected mesh compartment.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.get_mesh_volumes-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.get_mesh_volumes","text":"get_mesh_volumes(points, elements)\n\nGet total volume and volumes of each tetrahedron of mesh.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.gmesh2fem-Tuple{Any}","page":"Home","title":"SpinDoctor.gmesh2fem","text":"gmesh2fem(filename)\n\nExtract points and elements from Gmesh file.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.int_F²-Union{Tuple{SpinDoctor.TimeProfile{T}}, Tuple{T}} where T","page":"Home","title":"SpinDoctor.int_F²","text":"b = int_F²(f)\n\nCompute the time profile contribution to the b-value. To obtain the b-value, multiply the result by q^2 = (γg)^2, where γ is the gyromagnetic ratio of the water proton, g is the gradient amplitude, and b = q^2 * int_F²(f).\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.integral","page":"Home","title":"SpinDoctor.integral","text":"integral(f, t = echotime(f))\n\nIntegral of time profile f between 0 and t. Unless specified, the echotime is used as the upper integral limit.\n\nFor the PGSE, SinOGSE, CosOGSE and DoublePGSE sequences, analytical expressions are available. Otherwise a numerical integral is computed.\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.intervals","page":"Home","title":"SpinDoctor.intervals","text":"intervals(f)\n\nGet characteristic intervals of the time profile f.\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.isconstant-Tuple{SpinDoctor.TimeProfile}","page":"Home","title":"SpinDoctor.isconstant","text":"isconstant(profile)\n\nReturn true if the time profile profile is intervalwise constant.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.length2eig-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.length2eig","text":"length2eig(length, D)\n\nConvert length scale to Laplace eigenvalue.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.limit_lengthscale-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.limit_lengthscale","text":"limit_lengthscale(lap_eig, λ_max)\n\nOnly keep modes with length scales larger than minimum\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.output_type","page":"Home","title":"SpinDoctor.output_type","text":"output_type(problem)\n\nGet type returned by solve(problem).\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.plot_field-Tuple{SpinDoctor.FEMesh, Any}","page":"Home","title":"SpinDoctor.plot_field","text":"plot_field(femesh, ξ)\n\nPlot field ξ on the finite element mesh.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.plot_mesh-Tuple{SpinDoctor.FEMesh}","page":"Home","title":"SpinDoctor.plot_mesh","text":"plot_mesh(femesh)\n\nPlot finite element mesh.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.radial_dimension","page":"Home","title":"SpinDoctor.radial_dimension","text":"radial_dimension(setup)\n\nGet dimension of radial direction.\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.read_cells-Tuple{Any}","page":"Home","title":"SpinDoctor.read_cells","text":"read_cells(cellfilename)\n\nRead cell configuration (centers and radii).\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.read_surfaces-Tuple{Any}","page":"Home","title":"SpinDoctor.read_surfaces","text":"read_surfaces(filename)\n\nRead surface triangulation from file.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.read_tetgen-Tuple{Any}","page":"Home","title":"SpinDoctor.read_tetgen","text":"read_tetgen\n\nRead mesh from Tetgen.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.save_cells-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.save_cells","text":"save_cells(cells, cellfilename)\n\nWrite geometrical cell configuration to file. The file contains the spatial dimension: 2 for cylinders, 3 for spheres.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.save_surfaces-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.save_surfaces","text":"save_surfaces(filename, surfaces)\n\nSave surface triangulation. The files may be passed to Tetgen with filename.node.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.save_tetgen-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.save_tetgen","text":"save_tetgen(mesh_all, filename)\n\nSave mesh in the Tetgen output format.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.shapeder-Tuple{Any}","page":"Home","title":"SpinDoctor.shapeder","text":"shapeder(points)\n\nDerivative of shape functions with respect to reference coordinates (ξ₁, ξ₂, ξ₃).\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.solve","page":"Home","title":"SpinDoctor.solve","text":"solve\n\nSolve problem.\n\n\n\n\n\n","category":"function"},{"location":"#SpinDoctor.solve-Tuple{AnalyticalMatrixFormalism, ScalarGradient}","page":"Home","title":"SpinDoctor.solve","text":"solve(problem::AnalyticalMatrixFormalism, gradient, volumes = nothing)\n\nCompute the signal in a multilayered cylinder or sphere using an analytical matrix formalism solution.\n\nThis function is based on the following articles and corresponding code:     [1] D. S. Grebenkov, NMR Survey of Reflected Brownian Motion,         Rev. Mod.Phys. 79, 1077 (2007)     [2] D. S. Grebenkov, Pulsed-gradient spin-echo monitoring of restricted diffusion in         multilayered structures, J. Magn. Reson. 205, 181-195 (2010).\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.solve-Tuple{HADC, ScalarGradient}","page":"Home","title":"SpinDoctor.solve","text":"solve_hadc(problem::HADC, gradient::ScalarGradient)\n\nCompute the ADC using a homogenized ADC model (HADC). This is currently only implemented for scalar gradients.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.solve-Tuple{Karger, ScalarGradient}","page":"Home","title":"SpinDoctor.solve","text":"solve(problem::Karger, gradient)\n\nSolve the finite pulse Karger model (FPK) using precomputed effective diffusion tensors difftensors.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.solve-Tuple{Laplace}","page":"Home","title":"SpinDoctor.solve","text":"solve(laplace::Laplace)\n\nCompute the Laplace eigenvalues, eigenfunctions and first order moments of products of pairs of eigenfunctions.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.solve-Tuple{MatrixFormalism, Any}","page":"Home","title":"SpinDoctor.solve","text":"solve(problem::MatrixFormalism, matrices, lap_eig, gradient)\n\nSolve for magnetization using Matrix Formalism.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.solve-Union{Tuple{T}, Tuple{GeneralBTPDE{T}, Any}} where T","page":"Home","title":"SpinDoctor.solve","text":"solve(problem::GeneralBTPDE, gradient[; callbacks])\n\nSolve the Bloch-Torrey partial differential equation using P1 finite elements.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.solve-Union{Tuple{T}, Tuple{IntervalConstanBTPDE{T}, ScalarGradient}} where T","page":"Home","title":"SpinDoctor.solve","text":"run(problem::IntervalConstanBTPDE, gradient)\n\nSolve the Bloch-Torrey partial differential equation using P1 finite elements. This function uses a manual time stepping scheme (theta-rule), that requires a degree of implicitness θ and a time step Δt.     θ = 0.5: Crank-Nicolson (second order)     θ = 1.0: Implicit Euler (first order)\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.solve_multigrad-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.solve_multigrad","text":"solve_multigrad(problem, gradients)\n\nSolve problem for multiple magnetic field gradients.\n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.split_field-Tuple{Any, Any}","page":"Home","title":"SpinDoctor.split_field","text":"split_field(mesh, ξ)\n\nSplit the field ξ into a vector containing a view of each compartment. \n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.unitcircle-Tuple{Any}","page":"Home","title":"SpinDoctor.unitcircle","text":"unitcircle(ndirection; half = false, normal = [0, 0, 1])\n\nCreate ndirection directions unformly distributed on the unit circle defined by normal.\n\nIf half is true, the directions lie on a half-circle instead of the whole circle. \n\n\n\n\n\n","category":"method"},{"location":"#SpinDoctor.unitsphere-Tuple{Any}","page":"Home","title":"SpinDoctor.unitsphere","text":"unitsphere(ndirection; half = false, normal = [0, 0, 1])\n\nCreate ndirection directions unformly distributed on the unit sphere.\n\nIf half is true, the points will be discributed on the hemisphere defined by normal.\n\n\n\n\n\n","category":"method"}]
}
