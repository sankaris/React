import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Button/Card"

const DataAdder = (props) => {
    const [userName,setUserName] = useState('');
    const [message,setMessage] = useState('');

    const nameHandler = (event) => {
        setMessage('');
        setUserName(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0) {
            setMessage('Please Enter UserName');
            return message;
        }
        props.onAddName(userName);
        
    }

    return (
        <div>
            <Card>
                <form onSubmit={submitHandler}>
                    <label>Username</label>
                    <input type="text" id="username" onChange={nameHandler} />
                    {message && <span style={{color:'red'}}> {message} </span> }
                    <Button type="submit"> Add Name </Button>
                </form>
            </Card>
        </div>
    )
}

export default DataAdder