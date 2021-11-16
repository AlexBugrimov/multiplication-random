import React from "react";

export const Challenge = (props: {
  factorA: number,
  factorB: number
}) => (<div className="text-9xl text-teal-900">
  {props.factorA} x {props.factorB}
</div>)