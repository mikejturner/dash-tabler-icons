import React from "react";
import { SVGAttributes } from "react";
import { IconSlashes as TablerIconSlashes } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconSlashes = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconSlashes 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconSlashes.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconSlashes;