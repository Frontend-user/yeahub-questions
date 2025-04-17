import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { SELECT_TYPE } from "@/shared/constats/constats.ts";

interface UseChangeParamsReturnType {
  onHandleClick: (id: number) => void;
  defineParamsInState: () => void;
}

type UseChangeParamsFnReturnType = [
  UseChangeParamsReturnType["onHandleClick"],
  UseChangeParamsReturnType["defineParamsInState"],
];

export const useChangeParams = (
  reducerToDispatch: ActionCreatorWithPayload<number>,
  queryParamName: string,
  selectType = SELECT_TYPE.MANY_ITEMS,
): UseChangeParamsFnReturnType => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  function onHandleClick(id: number) {
    searchParams.set("page", "1");
    dispatch(reducerToDispatch(id));
    const queryParamsList = searchParams.getAll(queryParamName);
    const currentIdExistInQuery = queryParamsList.includes(id.toString());
    if (selectType === SELECT_TYPE.MANY_ITEMS) {
      if (currentIdExistInQuery) {
        const currentIdIndexToDelete = queryParamsList.findIndex((i) => i === id.toString());
        queryParamsList.splice(currentIdIndexToDelete, 1);
      } else {
        queryParamsList.push(String(id));
      }
      searchParams.delete(queryParamName);
      queryParamsList.forEach((s) => searchParams.append(queryParamName, s));
    } else if (selectType === SELECT_TYPE.ONE_ITEM) {
      searchParams.delete(queryParamName);
      if (!currentIdExistInQuery) {
        searchParams.set(queryParamName, String(id));
      }
    }
    setSearchParams(searchParams);
  }

  const defineParamsInState = () => {
    const queryParamsList = searchParams.getAll(queryParamName);
    if (queryParamsList.length) {
      queryParamsList.forEach((id) => {
        dispatch(reducerToDispatch(+id));
      });
    }
  };

  return [onHandleClick, defineParamsInState];
};
