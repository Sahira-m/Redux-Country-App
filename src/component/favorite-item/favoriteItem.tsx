
import React ,{Fragment} from "react";
import { useSelector } from "react-redux";

//Mui
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import FavoriteIcon from  "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

//redux srore,css, types
import "./countryItem.css";
import { RootState } from "../../redux/store";
import { CountryType } from "../../types/type";

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
//let favoriteArray:CountryType[];
export default function FavoriteItem({countries}:ListTypes)
{
    const favoriteList=useSelector((state:RootState)=>state.country.favoriteList);

    console.log("favorite array in favorite item",favoriteList);
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

       <StyledTableCell> <IconButton aria-label="add to favorites" >
          <FavoriteIcon   />
        </IconButton></StyledTableCell>
       <StyledTableCell>MoreDetail </StyledTableCell>
</StyledTableRow></Fragment>);
}



 


