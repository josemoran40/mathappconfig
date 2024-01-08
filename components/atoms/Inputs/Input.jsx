"use client"
import React from "react";

export const Input = (props) => {
    const {
        className,
        icon,
        classNameInput,
        type,
        placeholder,
        value,
        label,
        errorMessage,
        capitalize,
        disabled,
        labelClassName = "",
        as = "input",
        ...rest
    } = props;

    return (
        <div className={`flex flex-col w-full ${className} relative`}>
            {label && (
                <label className={`mb-2.5 text-sm  ${labelClassName}`}>
                    {label}
                </label>
            )}
            {as === "input" ? (
                <input
                    type={type}
                    className={`w-full form-input px-3 py-custom-7 border 
                    border-gray-200 focus:border-accent
                    placeholder:text-gray-750 rounded-md text-sm outline-none 
                    ${classNameInput} 
                    ${errorMessage &&
                        (errorMessage == "success"
                            ? "!border-green-success"
                            : "!border-red-error")
                        }
                    ${disabled && "opacity-70 cursor-not-allowed"}
                    ${capitalize ? "capitalize" : ""}
                    ${icon ? "pl-8" : ""}`}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    {...rest}
                />
            ) : (
                <textarea
                    className={`w-full form-input px-3 py-custom-7 border 
                    border-gray-800 focus:border-accent 
                    placeholder:text-gray-750 rounded-md text-sm outline-none 
                    ${disabled ? "bg-black" : "bg-white"}
                    ${classNameInput} 
                    ${errorMessage &&
                        (errorMessage == "success"
                            ? "!border-green-success"
                            : "!border-red-error")
                        }
                    `}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                />
            )}
            {icon}
            {errorMessage && errorMessage != "success" && (
                <small className="mt-1 text-sm text-red-error">{errorMessage}</small>
            )}
        </div>
    );
};

