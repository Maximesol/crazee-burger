import React from 'react'
import { BsPersonCircle } from "react-icons/bs"



export default function Input({ value, onChange, ...extraProps }) {
    return (
        <div className="div--input">
            <BsPersonCircle className="icon" />
            <input
                value={value}
                onChange={onChange}
                {...extraProps}

            ></input>
        </div>
    )
}
