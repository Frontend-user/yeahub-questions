export interface ISelectItem {
  id: number;
  title: string;
  imageSrc?: string;
  value?: number[];
  selected: boolean;
}
export interface UiRoute {
  id: number;
  name: string;
  to: string;
  isActive: boolean;
}

export type LikeTypes = "like" | "dislike";

export interface IROUTE_NAMES {
  [key: string]: {
    name: string;
    to: string;
  };
}

export interface IUser {
  id: string;
  username: string;
  phone: string | null;
  country: string | null;
  city: string | null;
  email: string;
  birthday: string | null;
  address: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
  isEmailVerified: boolean;
  userRoles: IUserRole[];
}

export interface IUserRole {
  id: number;
  name: string;
  permissions: [];
}
