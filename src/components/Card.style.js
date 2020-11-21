import React, {useState} from "react";

export default function Card () {

    const [name, setName] = useState("test")

    return (
        <div className="card-wrapper">
            {name}
        </div>
    )
}