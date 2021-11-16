import React from "react";

export const Layout = (props: {
  children: any
}) => (<div className="flex h-screen justify-center">
  {props.children}
</div>)