# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class IconFocus(Component):
    """An IconFocus component.


Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (dict; default 'currentColor'):
    Icon color.

    `color` is a dict with keys:


- size (dict; default 24):
    Icon size.

    `size` is a dict with keys:


- stroke (dict; default 2):
    Stroke width.

    `stroke` is a dict with keys:


- style (boolean | number | string | dict | list; optional):
    Inline style."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_tabler_icons'
    _type = 'IconFocus'
    @_explicitize_args
    def __init__(self, size=Component.UNDEFINED, color=Component.UNDEFINED, stroke=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'size', 'stroke', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'size', 'stroke', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(IconFocus, self).__init__(**args)
