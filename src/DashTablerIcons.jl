
module DashTablerIcons
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/dti_iconalertcircle.jl")
include("jl/dti_iconaward.jl")
include("jl/dti_iconbug.jl")
include("jl/dti_icondatabase.jl")
include("jl/dti_icongitpullrequest.jl")
include("jl/dti_icongraph.jl")
include("jl/dti_iconmessages.jl")
include("jl/dti_iconmoonstars.jl")
include("jl/dti_iconpennant.jl")
include("jl/dti_iconsettings.jl")
include("jl/dti_iconsun.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_tabler_icons",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_tabler_icons.js",
    external_url = "https://unpkg.com/dash_tabler_icons@0.0.1/dash_tabler_icons/dash_tabler_icons.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_tabler_icons.js.map",
    external_url = "https://unpkg.com/dash_tabler_icons@0.0.1/dash_tabler_icons/dash_tabler_icons.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
