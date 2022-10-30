import React from "react";
import { SVGAttributes } from "react";
import { IconCut as TablerIconCut } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconCut = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconCut 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconCut.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconCut;