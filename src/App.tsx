import React from "react";
import {Routes,Route} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";

//pages 
import Favorite from "./pages/favorite";
import {Home} from "./pages/home";
//css redux store and thunk
import "./App.css";
import { RootState } from "./redux/store";
import { AppDispatch } from "./redux/store";
import { fetchCountryUrl } from "./thunk/countryRead";
import CountryDetails from "./pages/CountryDetails";

function App()
 {
  const countryList=useSelector((state:RootState)=>state.country.countryList);
  const dispatch=useDispatch<AppDispatch>();
  useEffect(()=>
  {dispatch(fetchCountryUrl());},
  [dispatch]);
    // search part 
    const [userInput, setUserInput]=useState<string>("");
  return <div className="App">
    <Routes>
<Route path= "" element={<Home userInput={userInput} countryList={countryList} setUserInput={setUserInput}   ></Home>} ></Route>
<Route path= "/favorite" element={<Favorite></Favorite>}  ></Route>
{/* <Route path= "/countries/:name" element={<CountryDetails></CountryDetails>}  ></Route>
    </Routes> */}
    <Route path="/countries/:name" element={<CountryDetails />}></Route>
      </Routes>
  </div>;
}
export default App;
