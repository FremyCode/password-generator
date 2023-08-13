"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PasswordImage from "../assets/images/access-hand-key-icon.svg";
import { Checkbox } from "./Checkbox";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState<string>("")
  const [passwordStrength, setPasswordStrength] = useState<string>("Strong");
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const passwordOptions = [
    { value: "Uppercase", label: "Uppercase" },
    { value: "Lowercase", label: "Lowercase" },
    { value: "Numbers", label: "Numbers" },
    { value: "SpecialChars", label: "Special characters" },
  ];

  function handlePasswordGen() {
    const length = passwordLength; // Change this value to set the desired length of the random string
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    setPassword(randomString)

  }

  useEffect(() => {
    console.log("Length: ", passwordLength)
    console.log("Strength: ", passwordStrength)
    console.log("Password: ", password)
  }, [password])
  

  return (
    <>
      <div className="bg-gray-500 h-full mx-[30dvw] p-5">
        <Image
          src={PasswordImage}
          alt="Password generator for all your passwordy needs"
        />
        <section>
          <h1>PASSWORD GENERATOR</h1>
          <p>Create strong and secure passwords to keep your accounts safe!</p>
        </section>
        <>
          <input type="text" />
          <button className="rounded-lg bg-gray-800 p-3">Copy</button>
        </>
        <p>{passwordStrength}</p>
        <div id="lengthSlider">
          <p>Password Length: {passwordLength}</p>
          <input
            type="range"
            id="passwordLength"
            name="passwordLengthRange"
            min={12}
            max={64}
            step={1}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          />
        </div>
        <Checkbox options={passwordOptions} />
        <button className="rounded-lg bg-gray-700 p-3" onClick={() => handlePasswordGen()}>Generate password</button>
      </div>
    </>
  );
};
