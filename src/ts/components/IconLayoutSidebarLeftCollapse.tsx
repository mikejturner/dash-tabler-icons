import React from "react";
import { SVGAttributes } from "react";
import { IconLayoutSidebarLeftCollapse as TablerIconLayoutSidebarLeftCollapse } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconLayoutSidebarLeftCollapse = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconLayoutSidebarLeftCollapse 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconLayoutSidebarLeftCollapse.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconLayoutSidebarLeftCollapse;