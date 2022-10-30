import React from "react";
import { SVGAttributes } from "react";
import { IconSkull as TablerIconSkull } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconSkull = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconSkull 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconSkull.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconSkull;