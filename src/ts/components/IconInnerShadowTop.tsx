import React from "react";
import { SVGAttributes } from "react";
import { IconInnerShadowTop as TablerIconInnerShadowTop } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconInnerShadowTop = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconInnerShadowTop 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconInnerShadowTop.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconInnerShadowTop;