# AUTO GENERATED FILE - DO NOT EDIT

export dti_iconbrandwebflow

"""
    dti_iconbrandwebflow(;kwargs...)

An IconBrandWebflow component.

Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Icon color. color has the following type: lists containing elements .
Those elements have the following types:

- `size` (optional): Icon size. size has the following type: lists containing elements .
Those elements have the following types:

- `stroke` (optional): Stroke width. stroke has the following type: lists containing elements .
Those elements have the following types:

- `style` (Bool | Real | String | Dict | Array; optional): Inline style
"""
function dti_iconbrandwebflow(; kwargs...)
        available_props = Symbol[:id, :className, :color, :size, :stroke, :style]
        wild_props = Symbol[]
        return Component("dti_iconbrandwebflow", "IconBrandWebflow", "dash_tabler_icons", available_props, wild_props; kwargs...)
end

