import React from "react";
import { SVGAttributes } from "react";
import { IconTriangles as TablerIconTriangles } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconTriangles = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconTriangles 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconTriangles.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconTriangles;