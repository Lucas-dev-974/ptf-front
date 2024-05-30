import { JSXElement } from "solid-js";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export function Button(props: ButtonProps): JSXElement{
    return <button onClick={props.onClick}> {props.text} </button>
}