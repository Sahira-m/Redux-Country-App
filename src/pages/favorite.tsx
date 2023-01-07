import React from "react";

//Componenets
import FavoriteList from "../component/favorite-item/favoriteList";
import Header from "../component/header/headrt";
import Footer from "../component/Footer/Footer"
export default function FavoritePage() 
{
return(
    <div>
        <Header></Header>
        <FavoriteList></FavoriteList>
<Footer></Footer>
     </div>);    
}