import React from "react";

export const Form = (props: {
  children: any
}) => (<div className="flex items-center h-screen w-1/2">
  {props.children}
</div>)