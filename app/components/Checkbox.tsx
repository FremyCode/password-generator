"use client";
import React from "react";
import { CheckboxProps, CheckboxOption } from "../types";

export const Checkbox = ({ options, updateOptions }: CheckboxProps) => {

  return (
    <div className="flex flex-col">
      {options.map((option: CheckboxOption, index: number) => (
        <div className="flex justify-between text-bold" key={index}>
          <label>{option.label}</label>
          <input type="checkbox" id={option.label} name="passwordType" onChange={() => updateOptions(option)} className="w-4" />
        </div>
      ))}
    </div>
  );
};
