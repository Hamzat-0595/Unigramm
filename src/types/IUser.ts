export type UserState = {
  user: IUser;
  currentUser?: Ilogin;
  isAuth: boolean;
  isLoading: boolean;
};

export interface IUser {
  _id: string;
  avatar: string;
  username: string;
}

export interface Ilogin {
  token: string;
  username: string;
  _id: string;
  avatar: string;
}
