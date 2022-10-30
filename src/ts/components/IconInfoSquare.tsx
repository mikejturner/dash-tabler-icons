import React from "react";
import { SVGAttributes } from "react";
import { IconInfoSquare as TablerIconInfoSquare } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconInfoSquare = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconInfoSquare 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconInfoSquare.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconInfoSquare;