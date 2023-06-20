import React from "react";
import Card from "../UI/Button/Card";
import classes from './NameList.module.css';

const NameList = (props) => {
    return (
      <div>
        <Card className={classes.users}>
          <ul>
            {props.items.map(name => (
              <li key={name.id}> {name.enteredName}</li>
            ))}
          </ul>
          </Card>
        </div>
      );
}

export default NameList