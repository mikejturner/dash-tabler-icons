import React from "react";
import { SVGAttributes } from "react";
import { IconArmchair as TablerIconArmchair } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconArmchair = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconArmchair 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconArmchair.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconArmchair;