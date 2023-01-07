import React , { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

//redux store ,component,thunk file
import { RootState,AppDispatch } from "../../redux/store";
import { fetchCountryUrl } from "../../thunk/countryRead";
import CountryItem from "../country-item/countryItem";

//Mui
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Favorite.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
     backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
     fontSize: 14,
   },
 }));
 
  
export default function FavoriteList()
{
    const favoriteList=useSelector((state:RootState)=>state.country.favoriteList);
    const dispatch=useDispatch<AppDispatch>();
    useEffect(()=>
    {dispatch(fetchCountryUrl());},
    [dispatch]);
    return(<TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table" className="table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Flag</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Region</StyledTableCell>
              <StyledTableCell align="right">Population</StyledTableCell>
              <StyledTableCell align="right">Languages</StyledTableCell>
              <StyledTableCell align="right">Favorite</StyledTableCell>
              <StyledTableCell align="right">More Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {
  favoriteList.map((countries)=>
  
  <CountryItem countries={countries} key={crypto.randomUUID()}></CountryItem>
     
      )
  }   
          </TableBody>
        </Table>
      </TableContainer>);
}