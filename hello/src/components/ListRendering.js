import React from "react";

function ListRendering() {
    const names = ['Ann','Bob', 'Julie']
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}
export default ListRendering