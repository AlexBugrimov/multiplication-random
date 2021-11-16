import React from "react";

export const Layout = (props: {
  children: any
}) => (<div className="flex items-center h-screen justify-center">
  {props.children}
</div>)