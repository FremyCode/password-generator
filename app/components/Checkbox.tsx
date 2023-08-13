"use client";
import React from "react";
import { CheckboxProps, CheckboxOption } from "../types";

export const Checkbox = ({ options }: CheckboxProps) => {
  return (
    <div className="flex flex-col">
      {options.map((option: CheckboxOption, index: number) => (
        <div className="flex justify-between mx-5" key={index}>
          <label>{option.label}</label>
          <input type="checkbox" id={option.label} name="passwordType" />
        </div>
      ))}
    </div>
  );
};
