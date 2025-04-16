import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface IRTKMutationResulT {
  // data?: YourResponseType;
  error?: SerializedError | FetchBaseQueryError;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isUninitialized: boolean;
  reset: () => void;
  fulfilledTimeStamp: number;
  status: 'uninitialized' | 'pending' | 'fulfilled' | 'rejected';
}
