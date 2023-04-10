import React, { useState } from "react";
import MyInput from "../inputs/MyInput";
import MyButton from "../button/MyButton";
const initUser = {
  name: "",
  email: "",
  phone: "",
  id: 777,
};

const ChangeUserForm = ({ close, editUser, userId }) => {
  const [user, setUser] = useState<UserType>(initUser);
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Enter first and second name");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Enter email");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("Enter phone");
  const closeModal = () => {
    close(false);
  };
  const changeUserBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newUser = {
      ...user,
    };
    editUser(newUser);

    setUser(initUser);

    // console.log(newUser);
    // changeUser(newUser);

    // console.log(newUser);
    // console.log(newUser.id);

    // if (!nameError && !emailError && !phoneError) {
    //   create(newUser);
    //   setUser(initUser);
    // }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2) {
      setNameError("name should be at least 2 characters");
    } else {
      setNameError("");
    }
    setUser({ ...user, name: e.target.value });
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
    setUser({ ...user, email: e.target.value });
  };
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (!re.test(e.target.value)) {
      setPhoneError("Invalid phone");
    } else {
      setPhoneError("");
    }
    setUser({ ...user, phone: e.target.value });
  };

  const closeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    close(false);
  };
  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.placeholder) {
      case "Name":
        setNameDirty(true);
        break;
      case "Email":
        setEmailDirty(true);
        break;
      case "Phone":
        setPhoneDirty(true);
        break;
    }
  };
  return (
    <form className="myForm flex flex-col align-center h-full pt">
      {nameDirty && nameError && (
        <div style={{ color: "red" }}>{nameError}</div>
      )}
      <MyInput
        onBlur={(e) => blurHandler(e)}
        value={user.name}
        onChange={onChangeName}
        placeholder="Name"
      ></MyInput>
      {emailDirty && emailError && (
        <div style={{ color: "red" }}>{emailError}</div>
      )}
      <MyInput
        onBlur={(e) => blurHandler(e)}
        value={user.email}
        onChange={onChangeEmail}
        placeholder="Email"
      ></MyInput>
      {phoneDirty && phoneError && (
        <div style={{ color: "red" }}>{phoneError}</div>
      )}
      <MyInput
        onBlur={(e) => blurHandler(e)}
        value={user.phone}
        onChange={onChangePhone}
        placeholder="Phone"
      ></MyInput>
      <div className="flex ">
        <MyButton onClick={changeUserBtn}>Edit User</MyButton>
        <MyButton onClick={closeForm}>Close form</MyButton>
      </div>
    </form>
  );
};

export default ChangeUserForm;
