import React from "react";
import ControlledComponent from "./ControlledComponent";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
    };
  }

  addUser = (username, desg) => {
    var temp = this.state.userList;
    var newUser = {
      id: temp.length + 1,
      name: username,
      desg: desg,
    };
    temp.push(newUser);
    this.setState({
      userList: temp,
    });
  };
  edit = (i) => {
    var a = this.state.userList.splice(i, 1);
    console.log(a);
    this.setState({
     
    });
  };

  delete = (i) => {
    this.state.userList.splice(i, 1);
    this.setState({});
  };

  render() {
    return (
      <>
        <ControlledComponent addUser={this.addUser} reset={this.reset} />
        <div className="container">
          <h4 className="mt-4 mb-4" style={{ color: "Black" }}>
            User List
          </h4>
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.desg}</td>
                  <td className="editt">
                    <button
                      className="btn btn-primary "
                      onClick={() => this.edit(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.delete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default ListComponent;
