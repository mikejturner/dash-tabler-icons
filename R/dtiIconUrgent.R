# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dtiIconUrgent <- function(id=NULL, className=NULL, color=NULL, size=NULL, stroke=NULL, style=NULL) {
    
    props <- list(id=id, className=className, color=color, size=size, stroke=stroke, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'IconUrgent',
        namespace = 'dash_tabler_icons',
        propNames = c('id', 'className', 'color', 'size', 'stroke', 'style'),
        package = 'dashTablerIcons'
        )

    structure(component, class = c('dash_component', 'list'))
}
