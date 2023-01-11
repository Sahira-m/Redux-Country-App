import React, {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

//Components
import CountryList from "../component/country-List/CountryList";
import Header from "../component/Header/Header";
import Search  from "../component/search-component/Search";
import { CountryType } from "../types/type";

import { RootState,AppDispatch } from "../redux/store";
import { fetchCountryUrl } from "../thunk/CountryReads";
//import CountryLists from "../App";
 
export function Home(  )
{ 
  
    return <div className="Home">
<div>
<Search  ></Search>
<CountryList></CountryList>
</div>
</div>;
}