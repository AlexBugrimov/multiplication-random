import React from "react";

export const Form = (props: {
  children: any
}) => (<div className="flex items-center h-screen flex-col justify-center gap-3">
  {props.children}
</div>)