import React from "react";
import { SVGAttributes } from "react";
import { IconAnkh as TablerIconAnkh } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconAnkh = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconAnkh 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconAnkh.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconAnkh;