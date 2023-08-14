"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PasswordImage from "../assets/images/access-hand-key-icon.svg";
import { Checkbox } from "./Checkbox";
import { CheckboxOption } from "../types";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<string>("Strong");
  const [passwordLength, setPasswordLength] = useState<number>(24);
  const [passwordOptions, setPasswordOptions] = useState([
    { value: false, label: "Uppercase" },
    { value: false, label: "Numbers" },
    { value: false, label: "Special characters" },
  ]);

  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  function handlePasswordGen() {
    const length = passwordLength; // Change this value to set the desired length of the random string
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let randomString = "";

    //Check user choices for characters to be included in password generation

    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSpecialChars) {
      characters += "!#¤%&/()=?\\";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    setPassword(randomString);
  }

  //Updates the password generation options based on user input in the checkboxes

  function updateOptions(option: CheckboxOption) {
    if (option.label == "Uppercase") {
      setIncludeUppercase(!includeUppercase);
    }
    if (option.label == "Numbers") {
      setIncludeNumbers(!includeNumbers);
    }
    if (option.label == "Special characters") {
      setIncludeSpecialChars(!includeSpecialChars);
    }
  }

  //Copies the selected data (in this case password as a string) to the clipboard so the user can copy-paste the password

  function copyToClipboard(data: any) {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        alert("Password copied, you can now paste it with CTRL+V");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  }

  useEffect(() => {
    if(password.length >= 24 && includeSpecialChars ) {
      setPasswordStrength("Strong")
    } else if(password.length < 24 || !includeSpecialChars) {
      setPasswordStrength("Medium")
    } else {
      setPasswordStrength("Weak")
    }
  }, [password])
  

  return (
    <>
      <div className="bg-gray-800 h-full mx-[30dvw] p-5 flex flex-col items-center rounded-xl">
        <Image
          src={PasswordImage}
          alt="Password generator for all your passwordy needs"
          className="my-5"
        />
        <section className="text-center p-5">
          <h1 className="text-xl font-bold">PASSWORD GENERATOR</h1>
          <p className="text-lg">
            Create strong and secure passwords to keep your accounts safe!
          </p>
        </section>
        <div className="inline-block align-middle">
          <input
            type="text"
            value={password}
            className="text-black w-[25dvw] h-[3dvh] text-center"
            readOnly={true}
          />
          <button
            onClick={() => copyToClipboard(password)}
            className="rounded-full bg-gray-500 px-5 py-2 mx-5"
          >
            Copy
          </button>
        </div>
        <p className={`text-sm p-2 ${passwordStrength == "Strong" ? "text-green-500" : "text-yellow-500" && passwordStrength == "Weak" ? "text-red-500" : "text-yellow-500" }`}>{passwordStrength}</p>
        <div id="lengthSlider" className="p-3 w-[80%] text-center">
          <p className="p-3">Password length: {passwordLength}</p>
          <input
            type="range"
            id="passwordLength"
            name="passwordLengthRange"
            min={12}
            max={64}
            step={1}
            defaultValue={24}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
        <div className="w-3/4 p-2">
          <Checkbox options={passwordOptions} updateOptions={updateOptions} />
        </div>
        <div className="p-5">
          <button
            className="rounded-lg bg-gray-700 p-5 font-semibold"
            onClick={() => handlePasswordGen()}
          >
            GENERATE PASSWORD
          </button>
        </div>
      </div>
    </>
  );
};
