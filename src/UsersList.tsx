import React, { useEffect, useState } from "react";

type UserType = {
  name: string;
  email: string;
  phone: string;
  id: string;
  favourite?: boolean;
};
interface Props {
  users: UserType[];
  onFilter(value: UserType[]): UserType[];
  removeButtonCheckbox: (value1: UserType, value2: boolean[]) => void;
  addToFavourite: (value1: UserType, value2: boolean[]) => void;
  removeFromFavourite: (value1: UserType, value2: boolean[]) => void;
}
const UsersList: React.FC<Props> = ({
  users,
  onFilter,
  // , removeButton
  removeButtonCheckbox,
  addToFavourite,
  removeFromFavourite,
}) => {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(users.length).fill(false)
  );
  useEffect(() => {
    setCheckedState(new Array(users.length).fill(false));
  }, [users]);
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
  };
  return (
    <>
      <div className="flex pt-4">
        <button
          onClick={(e) => removeButtonCheckbox(users, checkedState)}
          className="bc-w rounded-lg	mr-4"
        >
          Remove user
        </button>

        <button
          onClick={() => addToFavourite(users, checkedState)}
          className="mr-4 bc-w rounded-lg"
        >
          Add to favourite
        </button>
        <button
          className=" bc-w rounded-lg	mr-4"
          onClick={(e) => removeFromFavourite(users, checkedState)}
        >
          Remove from Favourite
        </button>
        <div>{checkedState}</div>
      </div>
      {users.length ? (
        <ol className="pt-4">
          {onFilter(users).map((user: UserType, index: number) => (
            <li key={index} className="flex flex-row border-b ">
              <input
                type="checkbox"
                id={user.name}
                name={user.name}
                value={user.name}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <div className="m-3 py-2 w-50">{user.name}</div>
              <div className="m-3 py-2 w-50">{user.email}</div>
              <div className="m-3 py-2 w-50">{user.phone}</div>
              {user.favourite && (
                <div className="m-3 py-2">
                  <img src="./UI/svg/favourite.svg" alt="Your SVG" />
                </div>
              )}
              {/* <button onClick={() => removeButton(index)}>remove</button> */}
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
