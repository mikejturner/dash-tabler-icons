import React from "react";
import { SVGAttributes } from "react";
import { IconStorm as TablerIconStorm } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconStorm = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconStorm 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconStorm.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconStorm;