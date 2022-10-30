import React from "react";
import { SVGAttributes } from "react";
import { IconArrowAutofitContent as TablerIconArrowAutofitContent } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconArrowAutofitContent = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconArrowAutofitContent 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconArrowAutofitContent.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconArrowAutofitContent;