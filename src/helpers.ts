import { UserType } from "./App";

export const isChecked = (userList: UserType[], user: UserType) =>
  Boolean(userList.find((el) => el.id === user.id));
