import React, { useState } from "react";
import "./App.css";

function App() {
  const modelUser = {
    userName: "",
    userAge: "",
  };

  const [formUser, setFormUser] = useState(modelUser);

  const [arrUsers, setUsers] = useState([]);

  const [formMsg, setFormMsg] = useState("");

  const onChangeUserName = (event) => {
    setFormUser((prevState) => ({ ...prevState, userName: event.target.value }));
  };

  const onChangeUserAge = (event) => {
    setFormUser((prevState) => ({ ...prevState, userAge: event.target.value }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (formUser.userName && formUser.userAge) {
      setFormUser(modelUser);
      setUsers((prevState) => [...prevState, formUser]);
      setFormMsg("");
    } else {
      setFormMsg("Fill in all the fields");
    }
  };

  const onUserRemove = (index) => {
    console.log(index);
  };
  const onUserEdit = (user) => {
    console.log(user);
  };

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrUsers.map((u, i) => {
                return (
                  <tr key={i + 1}>
                    <td>{i + 1}</td>
                    <td>{u.userName}</td>
                    <td>{u.userAge}</td>
                    <td>
                      <div>
                        <button className="edit-action" onClick={() => onUserEdit(u)}>
                          edit
                        </button>
                        <button className="remove-action" onClick={() => onUserRemove(i)}>
                          remove
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formUser.userName}
                onChange={onChangeUserName}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Age"
                value={formUser.userAge}
                onChange={onChangeUserAge}
              />
            </div>
            <div className="buttons-wrapper">
              <button type="submit">Add</button>
            </div>
            <div className="form-msg">
              <p>{formMsg}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
