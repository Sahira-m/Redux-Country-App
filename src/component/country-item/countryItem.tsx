
import React ,{Fragment,useState} from "react";
import  {useSelector}  from "react-redux";

//mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import FavoriteIcon from  "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { blueGrey, pink } from "@mui/material/colors";
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";

//redux store, types ,css
import "./countryItem.css";
import countryActions from "../../redux/slice/countrySlice"
import { CountryType } from "../../types/type";
import { RootState,AppDispatch } from "../../redux/store";
 import { Link } from "react-router-dom";
 import { useDispatch } from "react-redux";
import CountryDetails from "../../pages/CountryDetails";

type ListTypes={
    countries:CountryType;    
}

export default function CountryItem({countries}:ListTypes)
{
const url= `https://restcountries.com/v3.1/name/{name}`;
    const dispatch=useDispatch<AppDispatch>();
    const favaoriteList=useSelector((state:RootState)=>state.country.favoriteList);
    const isDuplicated=favaoriteList.some(
      (faoritrItem)=>
      faoritrItem.name.common.toLocaleLowerCase()===countries.name.common.toLocaleLowerCase());
  
      let isFavorite = favaoriteList.some(
        (item) => item.name.common === countries.name.common
      );
      //alert(isFavorite);
  /*function getFavorite()
   {
    if(!isDuplicated)
    {
      dispatch(countryActions.favoriteLists(countries));
    }
    else
    alert("Alraedy in favorite list");  
  }*/
//snackbar logic
const [open, setOpen] = useState(false);
const [openFail, setOpenFail] = useState(false);
const [alertMessage,setAlert]=useState<boolean>(false);      
const handleClick = () => {
  setOpen(true);
  setAlert(true);
};
const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }; 
    function addFavorite()
{
handleClick();
   if(isDuplicated)
   {
    setAlert(false);
    setOpen(true);
   } 
   else
   {
    dispatch(countryActions.favoriteLists(countries));
    //dispatch(favoriteActions.addFavorite(products));
    setAlert(true);
    setOpenFail(true);
   }
   
  }
  return(<Fragment>
    <TableRow key={crypto.randomUUID()} className ="CountryTable" >
  <TableCell component="th" scope="row">
  <img src={countries.flags.png} alt={countries.name.common} className="flagImage"></img>
  </TableCell>
  <TableCell align="right">{countries.name.common}</TableCell>
  <TableCell align="right">{countries.region}</TableCell>
  <TableCell align="right">{countries.population}</TableCell>
  <TableCell align="right">
  <ul>
       {countries.languages ? (
        Object.entries(countries.languages).map(([key]) => (
           <p key={key}> <span>{countries.languages[key]}</span></p>
         ))
       ) : (
         <li>No Languages</li>
       )}
     </ul>
       </TableCell>
       <TableCell> <IconButton aria-label="add to favorites" onClick={addFavorite}>
       <FavoriteIcon  sx={{ color: isFavorite ? pink[500] : blueGrey }}>
       </FavoriteIcon>
          </IconButton>
        </TableCell>
       <TableCell>
       {/* {" "}
          <Link to={`/countries`} onClick={getMoreDetailas}> */}
           <Link to={`/countries/${countries.name.common}`}  > 
            MoreDetails
          </Link>{" "}  </TableCell>
</TableRow>

{!alertMessage ? 
(
        <Snackbar open={open} autoHideDuration={100} onClose={handleClose}>
        
        <Alert severity="warning">The favorite item exist already</Alert>
      </Snackbar>):
      <Snackbar  open={openFail} autoHideDuration={100} onClose={handleClose}>
        <Alert severity="success">Item Added Succesfully</Alert>
    </Snackbar>

}
   
</Fragment>);
}



        





 

