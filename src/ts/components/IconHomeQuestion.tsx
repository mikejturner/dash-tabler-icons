import React from "react";
import { SVGAttributes } from "react";
import { IconHomeQuestion as TablerIconHomeQuestion } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconHomeQuestion = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconHomeQuestion 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconHomeQuestion.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconHomeQuestion;