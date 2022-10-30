# AUTO GENERATED FILE - DO NOT EDIT

export dti_icontransitiontop

"""
    dti_icontransitiontop(;kwargs...)

An IconTransitionTop component.

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
function dti_icontransitiontop(; kwargs...)
        available_props = Symbol[:id, :className, :color, :size, :stroke, :style]
        wild_props = Symbol[]
        return Component("dti_icontransitiontop", "IconTransitionTop", "dash_tabler_icons", available_props, wild_props; kwargs...)
end

