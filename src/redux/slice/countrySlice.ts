import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import FavoriteList from "../../component/favorite-item/favoriteList";

import {CountryType } from "../../types/type";

type stateType={
    countryList:CountryType[];
    favoriteList:CountryType[];
};
const initialState:stateType={
   countryList:[],
   favoriteList:[],
};

const countrySlice=createSlice(
{
name:"country",
initialState,
reducers:{
    countryLists:(state,action)=>
    {
      state.countryList=action.payload;
      console.log("states is",state);
      console.log("country  lis is",state.countryList);
      console.log("country actionpayload list is",action.payload);
    },
    favoriteLists:(state,action:PayloadAction<CountryType>)=>
    {
      state.favoriteList.push(action.payload);
      console.log("favorite actionpayload list is",action.payload);
      console.log("favorite array list is",state.favoriteList);

    }

}
}
);
const countryActions=countrySlice.actions;
export default countryActions;
export const countryReducer=countrySlice.reducer;
