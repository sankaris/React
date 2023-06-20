import React,{ Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : ""
        }
        
    }

    nameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(this.state.username)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type="text" value={this.state.username} onChange={this.nameChange} />
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form