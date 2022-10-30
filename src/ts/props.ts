export type DefaultProps = {
    /** Often used with CSS to style elements with common properties */
    className?: string;
    /** Inline style */
    style?: any;
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
};