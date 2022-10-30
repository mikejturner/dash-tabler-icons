import React from "react";
import { SVGAttributes } from "react";
import { IconStars as TablerIconStars } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconStars = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconStars 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconStars.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconStars;