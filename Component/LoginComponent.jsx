import React, { Component } from "react";
import "./Component.css";

// submit = (event) => {
//   event.preventDefault();
//   console.log(this.state.username, this.state.password);
// };

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  usernameOnChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  passwordOnChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  login = () => {
    console.log(this.state.username, this.state.password);
    if (
      this.state.username !== "Ajithkumar" ||
      this.state.password !== "12345678"
    ) {
      alert("Username or Password are wrong");
    } else {
      this.props.navigate("/home/" + this.state.username);
    }
  };

  render() {
    return (
      <div>
        <div className="card-body">
          <h3 className="Logi">Login Form</h3>
          <div className="user1 pt-4 pb-2 form-group">
            <label className="username">UserName</label>
            <input
              type="text"
              className="userinput "
              value={this.state.username}
              placeholder="Enter UserName"
              onChange={this.usernameOnChange}
            ></input>
          </div>
          <div className="pass2 p-1 form-group">
            <label className="password">Password</label>
            <input
              type="text"
              className="userinput "
              value={this.state.password}
              placeholder="Enter Password"
              onChange={this.passwordOnChange}
            ></input>
          </div>
          <button
            className="btn btn-primary p-2 mt-4 col-2"
            onClick={this.login}
          >
            LOGIN
          </button>
          {/* <button
            className="btn btn-primary p-2 mt-4 col-2"
            onClick={this.edit}
          >
            Edit
          </button>
          <button
            className="btn btn-primary p-2 mt-4 col-2"
            onClick={this.delete}
          >
            Delete
          </button> */}
        </div>
      </div>
    );
  }
}

export default LoginComponent;
