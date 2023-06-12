import React, { useEffect, useState } from "react";
import { isChecked } from "./helpers";
import MyModalChangeUser from "./UI/MyModalChangeUser/MyModalChangeUser";
import ChangeUserForm from "./UI/MyModalChangeUser/ChangeUserForm";

type UserType = {
  name: string;
  email: string;
  phone: string;
  id: number;
  favourite?: boolean;
};
interface Props {
  users: UserType[];
  onFilter: (value: UserType[]) => UserType[];
  removeButtonCheckbox: (selectedUsers: UserType[]) => void;
  addToFavourite: (selectedUsers: UserType[]) => void;
  removeFromFavourite: (selectedUsers: UserType[]) => void;
  editUser: (newUser: UserType) => void;
  modalChangeUser: boolean;
  setModalChangeUser: (modalChangeUser: boolean) => void;
}
const UsersList: React.FC<Props> = ({
  users,
  onFilter,
  removeButtonCheckbox,
  addToFavourite,
  removeFromFavourite,
  editUser,
  modalChangeUser,
  setModalChangeUser,
}) => {
  const [selectedUsers, setSelectedUsers] = useState<UserType[]>([]);

  const handleOnChange = (user: UserType) => {
    if (isChecked(selectedUsers, user)) {
      setSelectedUsers((prevState) =>
        prevState.filter((prevUser) => prevUser.id !== user.id)
      );
      return;
    }
    setSelectedUsers([...selectedUsers, user]);
  };

  return (
    <>
      <div className="flex pt-4">
        <button
          onClick={(e) => removeButtonCheckbox(selectedUsers)}
          className="bc-w rounded-lg	mr-4"
        >
          Remove user
        </button>

        <button
          onClick={() => addToFavourite(selectedUsers)}
          className="mr-4 bc-w rounded-lg"
        >
          Add to favourite
        </button>
        <button
          className=" bc-w rounded-lg	mr-4"
          onClick={(e) => removeFromFavourite(selectedUsers)}
        >
          Remove from Favourite
        </button>
        <div>{selectedUsers.length}</div>
      </div>
      {users.length ? (
        <ol className="pt-4">
          {onFilter(users).map((user: UserType, index: number) => (
            <li key={index} className="flex flex-row border-b items-center		">
              <input
                className="mr-3"
                type="checkbox"
                id={user.name}
                name={user.name}
                value={user.name}
                checked={isChecked(selectedUsers, user)}
                onChange={() => handleOnChange(user)}
              />

              <div className="flex flex-row justify-start">
                <div className="m-3 py-2 w-50">{user.name}</div>
                <div className="m-3 py-2 w-50 ">{user.email}</div>
                <div className="m-3 py-2 w-50 ">{user.phone}</div>
              </div>

              {user.favourite && (
                <div className="m-3 py-2">
                  <img src="./UI/svg/favourite.svg" alt="Your SVG" />
                </div>
              )}

              <MyModalChangeUser
                modalChangeUser={modalChangeUser}
                setModalChangeUser={setModalChangeUser}
              >
                <ChangeUserForm
                  editUser={editUser}
                  close={() => setModalChangeUser(false)}
                ></ChangeUserForm>
              </MyModalChangeUser>
              <button
                className="rounded-lg bg-white p-2 w-22 h-10 "
                onClick={() => setModalChangeUser(true)}
              >
                Edit user
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <h1 style={{ textAlign: "center" }}>No users right now</h1>
      )}
    </>
  );
};

export default UsersList;
