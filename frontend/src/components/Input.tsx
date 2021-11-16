import React from "react";

export const Input = (props: {
  placeholder: string
}) => (<div className="max-w-xs w-full mx-auto">
  <input
    type="text"
    className="bg-teal-200 focus:bg-white border-transparent focus:border-teal-400 text-gray-900 appearance-none
    inline-block border rounded py-3 px-4 focus:outline-none border-6 border-teal-900"
    placeholder={props.placeholder}/>
</div>)