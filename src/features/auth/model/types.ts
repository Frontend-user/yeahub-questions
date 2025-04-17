import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { IUser } from "@/shared/types/types.ts";

export interface ILoginDATA {
  access_token: string;
  user: IUser;
}

export interface IRTKMutationResulT {
  data?: ILoginDATA;
  error?: SerializedError | FetchBaseQueryError;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isUninitialized: boolean;
  reset: () => void;
  fulfilledTimeStamp: number;
  status: "uninitialized" | "pending" | "fulfilled" | "rejected";
}
