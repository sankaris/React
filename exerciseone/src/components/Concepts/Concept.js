import React from "react";

const Concept = (props) => {
    return (
        <ul id="concepts">
            {props.data.map((concept) => (
                  <li className="concept">
                  <img src={concept.image} alt={concept.title} />
                  <h2>{concept.title}</h2>
                  <p>{concept.description}</p>
                  </li>
            )
        )}
        </ul>
    )
}

export default Concept;