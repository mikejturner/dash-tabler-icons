import React from "react";
import { SVGAttributes } from "react";
import { IconLetterN as TablerIconLetterN } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconLetterN = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconLetterN 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconLetterN.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconLetterN;