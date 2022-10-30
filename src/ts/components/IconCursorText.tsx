import React from "react";
import { SVGAttributes } from "react";
import { IconCursorText as TablerIconCursorText } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconCursorText = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconCursorText 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconCursorText.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconCursorText;