import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
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

  const handleInputChange = (e, key) =>
    setFormUser((prevState) => ({ ...prevState, [key]: e.target.value }));

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
                        <CustomButton
                          type="button"
                          className="edit-action"
                          label="edit"
                          handleClick={() => onEditUser(u, i)}
                        />
                        <CustomButton
                          type="button"
                          className="remove-action"
                          label="remove"
                          handleClick={() => onRemoveUser(i)}
                        />
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
              <CustomInput
                placeholder="Name"
                handleChange={handleInputChange}
                value={formUser.userName}
                field="userName"
              />
            </div>
            <div>
              <CustomInput
                placeholder="Age"
                handleChange={handleInputChange}
                value={formUser.userAge}
                field="userAge"
              />
            </div>
            <div className="buttons-wrapper">
              <CustomButton
                type="submit"
                className=""
                label={editUser.isEdit ? "Edit" : "Add"}
                handleClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
