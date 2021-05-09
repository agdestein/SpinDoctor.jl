"Diffusion MRI modelling"
module SpinDoctor

using Arpack: eigs
using DifferentialEquations
using Expokit: expmv!
using GLPK: Optimizer
using LinearAlgebra
using Parameters
using Polyhedra: DefaultLibrary, polyhedron, removevredundancy!, vrep # GenericLinearAlgebra problem
using Polynomials: fit
using Printf
using QHull: chull # GenericLinearAlgebra problem
using QuadGK
using SparseArrays
using Statistics: mean
using TetGen
using Triangle: constrained_triangulation
using UnicodePlots
using WriteVTK

export TimeProfile,
    PGSE,
    CosOGSE,
    SinOGSE,
    DoublePGSE,
    integral,
    bvalue_no_q,
    intervals,
    get_interval,
    constant_intervals,
    is_constant,
    echotime
export Setup, CylinderSetup, SphereSetup, NeuronSetup, Experiment
export get_coefficients
export create_geometry
export create_model
export split_mesh
export create_directions
export get_cmpt_volumes
export compute_laplace_eig
export length2eig
export eig2length
export Model
export solve_btpde
export solve_mf
export savefield
export savefield_time
export save_btpde_results
export fit_adc
export Trapezoid
export ImplicitEuler
export ABDF2, QBDF, QBDF1, QBDF2, QNDF, QNDF1, QNDF2

# Setups
include("datatypes/sequences.jl")
include("datatypes/experiment.jl")
include("datatypes/femesh.jl")
include("datatypes/gradient.jl")
include("datatypes/model.jl")
include("datatypes/create_model.jl")
include("datatypes/setup.jl")
include("get_coefficients.jl")

# Geometry
include("geometry/call_tetgen.jl")
include("geometry/create_cells.jl")
include("geometry/create_directions.jl")
include("geometry/create_fibonacci_sphere.jl")
include("geometry/create_geometry.jl")
include("geometry/create_surfaces_cylinder.jl")
include("geometry/create_surfaces_neuron.jl")
include("geometry/create_surfaces_sphere.jl")
include("geometry/deform_domain.jl")
include("geometry/get_volumes.jl")
include("geometry/gmesh2fem.jl")
include("geometry/read_cells.jl")
include("geometry/read_surfaces.jl")
include("geometry/read_tetgen.jl")
include("geometry/save_cells.jl")
include("geometry/save_surfaces.jl")
include("geometry/save_tetgen.jl")
include("geometry/split_mesh.jl")

# Matrix assembly
include("matrix_assembly/assemble_mass_matrix.jl")
include("matrix_assembly/assemble_stiffness_matrix.jl")
include("matrix_assembly/assemble_flux_matrices.jl")
include("matrix_assembly/assemble_flux_matrix.jl")
include("matrix_assembly/couple_flux_matrix.jl")

# Eigendecomposition
include("eig2length.jl")
include("compute_laplace_eig.jl")

# Solvers
include("solve_btpde.jl")
include("solve_mf.jl")

# Postprocessing
include("fit_adc.jl")
include("savefield.jl")

end
