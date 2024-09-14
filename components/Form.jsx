"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";

const LicenseTypes = [
  { value: "normal", label: "Normal" },
  { value: "vip", label: "VIP" },
  { value: "normal", label: "Normal" },
  { value: "vip", label: "VIP" },
  { value: "normal", label: "Normal" },
  { value: "vip", label: "VIP" },
];

const animatedComponents = makeAnimated();

function Form() {
  const [selectedLicense, setSelectedLicense] = useState(null);

  return (
    <form className="flex w-full flex-col gap-5 rounded-2xl bg-white p-6 lg:flex-1">
      <div className="grid grid-cols-2 gap-5">
        <Input
          label="First Name"
          id="first-name"
          placeholder="Enter First Name"
        />
        <Input label="Last Name" id="last-name" placeholder="Enter Last Name" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Input label="E-Mail" id="email" placeholder="Enter E-Mail" />
        <Input label="Phone" id="phone-number" placeholder="Enter Phone" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Input label="City" id="city" placeholder="Enter City" />
        <Input label="State" id="state" placeholder="Enter State" />
      </div>
      <Input label="License Type" id="state" placeholder="Enter State" />
      <Select
        options={LicenseTypes}
        defaultValue={LicenseTypes.filter(
          (license) => license.value === selectedLicense,
        )}
        placeholder="Dropdown options"
        components={animatedComponents}
        styles={{
          control: (styles) => ({
            ...styles,
            borderRadius: "8px",
            borderColor: "#ccc",
            padding: "6px 4px",
          }),
          option: (styles, { isDisabled, isSelected }) => {
            return {
              ...styles,
              ":active": {
                ...styles[":active"],
                backgroundColor: !isDisabled
                  ? isSelected
                    ? "#C9991D"
                    : "#C9991D"
                  : undefined,
              },
            };
          },
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "rgb(246, 186, 31, 0.4)",
            primary: "#F6BA1F",
          },
        })}
      />

      <Button>Get Started</Button>
    </form>
  );
}

export default Form;
