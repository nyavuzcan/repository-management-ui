import React, { Component } from 'react'
import Input from "../components/Input"


export default class SignupPage extends Component {

    state = {
        username:null,
        surname:null,
        password:null,
        passwordRepeat:null
    }

    onChange = (e) => {
        const {username,surname,password,passwordRepeat} = this.state
        const {name,value} = e.target

        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className="signup-form">
            <form>
                <h1 style={{textAlign:"center"}}>Sign up</h1> 
                <Input label="Name" type="text" name="username" className="form-control" onChange={this.onChange}/>
                <Input label="Surname" type="text" name="surname" className="form-control" onChange={this.onChange}/>
                <Input label="Password" type="password" name="password" className="form-control" onChange={this.onChange}/>
                <Input label="Password repeat" type="password" name="passwordRepeat" className="form-control" onChange={this.onChange}/>
                <div className="button" style={{display:"flex",justifyContent:"center"}}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        )
    }
}
