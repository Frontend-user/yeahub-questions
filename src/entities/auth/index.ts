export {
  useLoginMutation,
  useSignUpMutation,
  useProfileQuery,
} from "./api/authApi";
export { authSlice, setIsAuth } from "./model/authSlice";
export { isUserAuthenticated } from "./model/authSliceSelectors";
