import React , { useEffect, useRef } from "react";

function FocusInput() {

    const inputRef = useRef(null)

    useEffect = (() => {
        inputRef.current.focus()
    },[])

    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default FocusInput