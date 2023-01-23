import React from "react";
import "../Component/Component.css";

class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    console.log("Ak");
    console.log("Username", this.username.current.value);
    console.log("Password", this.password.current.value);
  }
  render() {
    return (
      <div className="form-outer">
        <h2 className="form-title">Login Form</h2>
        <form className="form-body">
          <div>
            <label className="input-label ">UserName</label>
            <input
              type="text"
              placeholder="UserName"
              ref={this.username}
            ></input>
            <br></br>
            <label className="input-label">Password</label>
            <input type="password" placeholder="Password" ref={this.password} />
          </div>
          <button className="btn" onClick={this.submit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default UncontrolledComponent;
