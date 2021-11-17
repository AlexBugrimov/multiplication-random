import React from "react";

export const Button = (props: {
  text: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) => (<button type="button"
               onClick={props.onClick}
               className="bg-teal-500 text-white font-medium px-6 py-3 rounded hover:bg-teal-700">{props.text}</button>)