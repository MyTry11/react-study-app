import { useState, useEffect, ReactNode, ChangeEvent } from "react";
import "./styles/App.css";
// import './styles/reset.css'
import UserForm from "./UserForm";
import MyModal from "./UI/MyModal/MyModal";
import HandBook from "./typescriptHandbook";
import MySelect from "./UI/select/MySelect";
import SortUsers from "./UI/SortUsers";
import FindUser from "./UI/FindUser";
import UsersList from "./UsersList";
import TestSelect from "./UI/TestSelect";
import { isChecked } from "./helpers";

export type UserType = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  id: string | undefined;
  favourite?: boolean;
};

export default function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [type, setType] = useState<keyof UserType>("name");
  const [modal, setModal] = useState<boolean>(false);
  const [modalChangeUser, setModalChangeUser] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [favourite, setFavourite] = useState<boolean[]>([]);
  const [currentUser, setCurrentUser] = useState<UserType>({
    name: "",
    email: "",
    phone: "",
    id: 777,
  });
  const createUser = (newUser: UserType) => {
    setUsers([...users, newUser]);
    setModal(false);
    console.log(newUser);
  };
  const editUser = (newUser) => {
    const newUsers = [...users];
    newUsers.splice(currentUser.index, 1, newUser);
    setUsers(newUsers);

    setModalChangeUser(false);
  };
  const showUser = (user) => {
    setCurrentUser(user);
    // console.log(currentUser);
    // console.log(user);
  };

  const removeButtonCheckbox = (selectedUsers: UserType[]) => {
    const newUsers = users.filter(
      (user) =>
        !selectedUsers.find((selectedUser) => selectedUser.id === user.id)
    );
    setUsers(newUsers);
  };

  const addToFavourite = (selectedUsers: UserType[]) => {
    const newUsers = users.map((user) => {
      if (isChecked(selectedUsers, user)) {
        return { ...user, favourite: true };
      }

      return user;
    });
    setUsers(newUsers);
  };
  const removeFromFavourite = (selectedUsers: UserType[]) => {
    const newUsers = users.map((user) => {
      if (isChecked(selectedUsers, user)) {
        return { ...user, favourite: false };
      }

      return user;
    });
    setUsers(newUsers);
  };
  const onFilter = (users: UserType[]) => {
    return users.filter((user) => {
      if (type == "phone") {
        return user[type]
          .replaceAll(/-|\ /g, "")
          .includes(inputValue.replaceAll(/-|\ /g, ""));
      }
      return user[type].toLowerCase().includes(inputValue.toLowerCase());
    });
  };
  const sortUsers = (selectedSort: keyof UserType) => {
    setSelectedSort(selectedSort);
    setUsers(
      [...users].sort((a: UserType, b: UserType) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    );
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((json) => json.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <main className="main flex justify-around pt-8 bg-zinc-500 ">
      <div className="leftBlock bg-zinc-400 rounded-lg w-1/6 p-4 flex flex-col">
        {/* <TestSelect></TestSelect> */}
        <button
          className="rounded-lg bg-white p-2"
          onClick={() => setModal(true)}
        >
          Create user
        </button>
        <MyModal visible={modal} setVisible={setModal}>
          <UserForm
            create={createUser}
            close={() => setModal(false)}
          ></UserForm>
        </MyModal>
      </div>
      <div className="middleBlock rounded-lg w-1/2 flex flex-col justify-center bg-zinc-400	p-4">
        <FindUser
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
          }}
        />
        <UsersList
          users={users}
          onFilter={onFilter}
          removeButtonCheckbox={removeButtonCheckbox}
          addToFavourite={addToFavourite}
          removeFromFavourite={removeFromFavourite}
          createUser={createUser}
          modalChangeUser={modalChangeUser}
          setModalChangeUser={setModalChangeUser}
          editUser={editUser}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          showUser={showUser}
        ></UsersList>
      </div>
      <div className="rightBlock bg-zinc-400 rounded-lg w-1/6 p-4">
        <SortUsers onChange={(e) => setType(e.target.value)}></SortUsers>
        <MySelect
          value={selectedSort}
          onChange={sortUsers}
          defaultValue="Sort alphabetically by"
          options={[
            { value: "name", name: "name" },
            { value: "email", name: "email" },
          ]}
        ></MySelect>
      </div>
      <HandBook></HandBook>
    </main>
  );
}

//"Leanne Graham", "Sincere@april.biz", "1-770-736-8031 x56442"
//https://jsonplaceholder.typicode.com/users = [{}, {}]
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
