export { specializationsApi } from "./api/specializationsApi.ts";
export { useGetSpecializationsQuery } from "./api/specializationsApi.ts";
export {
  chooseSpecialization,
  setSpecializationsList,
  setFormattedSpecializations,
  specializationsSlice,
} from "./model/specializationsSlice.ts";

export type {
  ISpecialization,
  IFormattedSpecialization,
  ISpecializationsSliceInitialState,
} from "./model/types.ts";

export { getFormattedSpecializations } from "./model/selectors/specializationsSelectors";
