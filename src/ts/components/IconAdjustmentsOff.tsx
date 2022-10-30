import React from "react";
import { SVGAttributes } from "react";
import { IconAdjustmentsOff as TablerIconAdjustmentsOff } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconAdjustmentsOff = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconAdjustmentsOff 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconAdjustmentsOff.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconAdjustmentsOff;