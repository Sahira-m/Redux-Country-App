import React, {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

//Components
import CountryList from "../component/country-List/CountryList";
import Header from "../component/Header/Header";
import Search  from "../component/search-component/Search";
import { CountryType } from "../types/type";
import PageLaoad from "../component/Page-Load/PageLoad";
import { RootState,AppDispatch } from "../redux/store";
import { fetchCountryUrl } from "../thunk/CountryReads";
//import CountryLists from "../App";
 type PropType=
  {
     userInput:string;
     countryList:CountryType[];
 setUserInput:Function ;
 
   };
export function Home(prop:PropType  )
{ const dispatch = useDispatch<AppDispatch>();
   const isLoading = useSelector((state: RootState) => state.country.isLoad);
   useEffect(() => {
      dispatch(fetchCountryUrl);
    }, []);
    return <div className="Home">
        <div>
        
          </div>

<div>
<Search userInput={prop.userInput} setUserInput={prop.setUserInput} ></Search>
</div>
 
 {
    /* prop.countryList.length<249?  */
    /*  <PageLaoad></PageLaoad>: */

     isLoading?  
         <PageLaoad></PageLaoad>
     :  
<CountryList countryList={prop.countryList}  userInput={prop.userInput} ></CountryList> 
     
}
    </div>;
}