import React, { useState } from "react";
import "./App.css";

function App() {
  const emptyUser = {
    userName: "",
    userAge: "",
  };

  const [formUser, setFormUser] = useState(emptyUser);

  const [editUser, setEditUser] = useState({
    isEdit: false,
    userIndex: null,
  });

  const [users, setUsers] = useState([]);

  const onChangeUserName = (event) => {
    setFormUser((prevState) => ({ ...prevState, userName: event.target.value }));
  };

  const onChangeUserAge = (event) => {
    setFormUser((prevState) => ({ ...prevState, userAge: event.target.value }));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    setFormUser(emptyUser);
    setEditUser({
      isEdit: false,
      userIndex: null,
    });

    if (formUser.userName && formUser.userAge) {
      if (editUser.isEdit) {
        const editedUsers = users;
        editedUsers.splice(editUser.userIndex, 1, formUser);
        setUsers(editedUsers);
      } else {
        setUsers((prevState) => [...prevState, formUser]);
      }
    }
  };

  const onRemoveUser = (index) => {
    setUsers(users.filter((user, userIndex) => userIndex !== index));
  };

  const onEditUser = (user, index) => {
    setFormUser(user);
    setEditUser({
      isEdit: true,
      userIndex: index,
    });
  };

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => {
                return (
                  <tr key={i + 1}>
                    <td>{i + 1}</td>
                    <td>{u.userName}</td>
                    <td>{u.userAge}</td>
                    <td>
                      <div>
                        <button className="edit-action" onClick={() => onEditUser(u, i)}>
                          edit
                        </button>
                        <button className="remove-action" onClick={() => onRemoveUser(i)}>
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
          <form onSubmit={onSubmitForm}>
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
              <button type="submit">{editUser.isEdit ? "Edit" : "Add"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
