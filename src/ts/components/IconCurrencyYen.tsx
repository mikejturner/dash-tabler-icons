import React from "react";
import { SVGAttributes } from "react";
import { IconCurrencyYen as TablerIconCurrencyYen } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconCurrencyYen = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconCurrencyYen 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconCurrencyYen.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconCurrencyYen;