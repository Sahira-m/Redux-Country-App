import React  from "react";

//mui
import CountryItem from "../country-item/countryItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Country-List.css";
//types
import { CountryType } from "../../types/type";


type CountryPropType={ 
  countryList:CountryType[];
    userInput:string;

};

  
export default function CountryList(prop:CountryPropType)
{
 
 const countryResult=prop.countryList.filter((country:CountryType)=> country.name.common.toLocaleLowerCase().includes(prop.userInput.toLowerCase()) )
  
    console.log("country res list is",countryResult);
    console.log("country list is",prop.countryList);
    return(
    <TableContainer component={Paper}> 
         {/* > <Table sx={{ minWidth: 200 }} aria-label="customized table" className="CountryTable">  */}
        <Table sx={{ minWidth:100 }} size="small" aria-label="a dense table"  className="table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Languages</TableCell>
              <TableCell align="right">Favorite</TableCell>
              <TableCell align="right">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {
  countryResult.map((countries)=>
  
  <CountryItem countries={countries} key={crypto.randomUUID()}></CountryItem>
     
      )
  }   


          </TableBody>
        </Table>
      </TableContainer>);
}

