import React from "react";

//Components
import CountryList from "../../component/Country-List/CountryList";
import Search  from "../../component/Search-component/Search";
 import "./Home.css";
export function Home(  )
{ 
 return <div className="home">

<Search></Search>
<CountryList></CountryList>

</div>;
}