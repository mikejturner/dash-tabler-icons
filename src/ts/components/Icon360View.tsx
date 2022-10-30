import React from "react";
import { SVGAttributes } from "react";
import { Icon360View as TablerIcon360View } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const Icon360View = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIcon360View 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

Icon360View.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default Icon360View;