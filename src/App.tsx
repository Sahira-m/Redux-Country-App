import React from "react";
import {Routes,Route} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";

//pages 
import Favorite from "./pages/Favorite";
import {Home} from "./pages/Home";
//css redux store and thunk
import "./App.css";
import { RootState } from "./redux/store";
import { AppDispatch } from "./redux/store";
import { fetchCountryUrl } from "./thunk/CountryReads";
import CountryDetails from "./pages/CountryDetails";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
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
    <Header></Header>
    <Routes>
<Route path= "" element={<Home userInput={userInput} countryList={countryList} setUserInput={setUserInput}   ></Home>} ></Route>
<Route path= "/favorite" element={<Favorite></Favorite>}  ></Route>
<Route path="/countries/:name" element={<CountryDetails />}></Route>
    </Routes>
       <Footer></Footer> 
  </div>;
}
export default App;
