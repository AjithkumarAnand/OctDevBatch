import React from "react";
import "../Component/Component.css";

class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginSuccess: false,
      loginFail: false,
    };

    // this.submit = this.submit.bind(this);
    // this.usernameOnChange = this.usernameOnChange.bind(this);
    // this.passwordOnChange = this.passwordOnChange.bind(this);
  }
  usernameOnChange = (event) => {
    // console.log(event);
    this.setState({
      username: event.target.value,
    });
  };
  passwordOnChange = (event) => {
    //  console.log(event);
    this.setState({
      password: event.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.addUser(this.state.username, this.state.password);
    } else {
      alert("Missing content");
    }
  };
  remove = (event) => {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.reset(this.state.username, this.state.password);
    }
  };

  render() {
    return (
      <div className="form-outer">
        <h2 className="form-title">Enter Details</h2>
        <form className="form-body">
          <div>
            <label className="input-label "> Name</label>
            <input
              type="text"
              placeholder="Name"
              value={this.state.username}
              onChange={this.usernameOnChange}
            ></input>
            <br></br>
            <label className="input-label">Desg</label>
            <input
              type="text"
              placeholder="Designation"
              value={this.state.password}
              onChange={this.passwordOnChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.submit}>
            Add
          </button>
          <br />
          {/* <button className="btn btn-success mt-4" onClick={this.remove}>
            remove
          </button> */}
        </form>
      </div>
    );
  }
}

export default ControlledComponent;
