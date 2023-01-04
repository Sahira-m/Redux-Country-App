import React  from "react";

//mui
import CountryItem from "../country-item/countryItem";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//types
import { CountryType } from "../../types/type";

type CountryPropType={ 
  countryList:CountryType[];
    userInput:string;

};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
     backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
     fontSize: 14,
   },
 }));
 
  
export default function CountryList(prop:CountryPropType)
{
 
 const countryResult=prop.countryList.filter((country:CountryType)=> country.name.common.toLocaleLowerCase().includes(prop.userInput.toLowerCase()) )
  
    
    /* const dispatch=useDispatch<AppDispatch>();
    useEffect(()=>
    {dispatch(fetchCountryUrl());},
    [dispatch]); */
    console.log("country res list is",countryResult);
    console.log("country list is",prop.countryList);
    return(<TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table" className="CountryTable">
          <TableHead>
            <TableRow>
              <StyledTableCell>Flag</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Region</StyledTableCell>
              <StyledTableCell align="right">Population</StyledTableCell>
              <StyledTableCell align="right">Languages</StyledTableCell>
              <StyledTableCell align="right">Favorite</StyledTableCell>
              <StyledTableCell align="right">D</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
  {
  countryResult.map((countries)=>
  
  <CountryItem countries={countries} key={crypto.randomUUID()}></CountryItem>
     
      )
  }   


          </TableBody>
        </Table>
      </TableContainer>);
}

