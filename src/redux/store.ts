import {configureStore} from "@reduxjs/toolkit";

import {countryReducer} from "./slice/countrySlice";

const store=configureStore({
    reducer:{country:countryReducer},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false,
    }),
});
    export type RootState=ReturnType<typeof store.getState>;
    export default store;
    export type AppDispatch=typeof store.dispatch;
        