import React from "react";
import { SVGAttributes } from "react";
import { IconBatteryCharging2 as TablerIconBatteryCharging2 } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconBatteryCharging2 = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconBatteryCharging2 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconBatteryCharging2.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconBatteryCharging2;