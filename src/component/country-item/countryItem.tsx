
import React ,{Fragment} from "react";
import  {useDispatch,useSelector}  from "react-redux";

//mui
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import FavoriteIcon from  "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { blueGrey, pink } from "@mui/material/colors";

//redux store, types ,css
import "./countryItem.css";
import countryActions from "../../redux/slice/countrySlice"
import { CountryType } from "../../types/type";
import { RootState,AppDispatch } from "../../redux/store";

type ListTypes={
    countries:CountryType;    
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
 },
 [`&.${tableCellClasses.body}`]: {
   fontSize: 14,
 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
   backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function CountryItem({countries}:ListTypes)
{

    const dispatch=useDispatch<AppDispatch>();
    const favaoriteList=useSelector((state:RootState)=>state.country.favoriteList);
    const isDuplicated=favaoriteList.some(
      (faoritrItem)=>
      faoritrItem.name.common.toLocaleLowerCase()===countries.name.common.toLocaleLowerCase());
  
      let isFavorite = favaoriteList.some(
        (item) => item.name.common === countries.name.common
      );
      //alert(isFavorite);
  function getFavorite() {
    if(!isDuplicated)
    {
      dispatch(countryActions.favoriteLists(countries));
    }
    else
    alert("Alraedy in favorite list");   
}
  return(<Fragment>
    <StyledTableRow key={crypto.randomUUID()} className ="CountryTable">
  <StyledTableCell component="th" scope="row">
  <img src={countries.flags.png} alt={countries.name.common} className="flagImage"></img>
  </StyledTableCell>
  <StyledTableCell align="right">{countries.name.common}</StyledTableCell>
  <StyledTableCell align="right">{countries.region}</StyledTableCell>
  <StyledTableCell align="right">{countries.population}</StyledTableCell>
  <StyledTableCell align="left">
  <ul>
       {countries.languages ? (
        Object.entries(countries.languages).map(([key]) => (
           <li key={key}>{countries.languages[key]}</li>
         ))
       ) : (
         <li>No Languages</li>
       )}
     </ul>
       </StyledTableCell>
       <StyledTableCell> <IconButton aria-label="add to favorites" onClick={getFavorite}>
       <FavoriteIcon  sx={{ color: isFavorite ? pink[500] : blueGrey }}>
       </FavoriteIcon>
          </IconButton>
        </StyledTableCell>
       <StyledTableCell>MoreDetail </StyledTableCell>
</StyledTableRow>
</Fragment>);
}



 


