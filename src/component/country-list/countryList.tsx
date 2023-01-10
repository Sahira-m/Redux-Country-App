import React  from "react";
import { Button } from "react-bootstrap";
//mui
import CountryItem from "../country-item/CountryItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./CountryList.css";
//component
//types
import { CountryType } from "../../types/type";

type CountryPropType={ 
  countryList:CountryType[];
    userInput:string;
}; 
export default function CountryList(prop:CountryPropType)
{
 
 let countryResult=prop.countryList.filter((country:CountryType)=> country.name.common.toLocaleLowerCase().includes(prop.userInput.toLowerCase()) )
  
    console.log("country res list is",countryResult);
    console.log("country list is",prop.countryList);
    const sortedCountry = [...countryResult];
    function ascendingCountry()
     {   
      const sorted = sortedCountry.sort((a, b) => {
        if (a.name.common > b.name.common) {
          return 1;
        }
    
        if (a.name.common < b.name.common) {
          return -1;
        }
        return 0;
      });
       console.log("After sort is in  new lines countryList",sortedCountry);
     }
     function SubmitHandler(Event :any ) 
     {
Event.preventDefault();
     }
    return(
    <TableContainer component={Paper} className="table" onSubmit={SubmitHandler}> 
        <Table sx={{ minWidth:100 }} size="small" aria-label="a dense table"  className="table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="right">Name <Button onClick={ascendingCountry}>ASCENDING</Button></TableCell>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Languages</TableCell>
              <TableCell align="right">Favorite</TableCell>
              <TableCell align="right">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {
    sortedCountry.map((countries)=>
  <CountryItem countries={countries} key={crypto.randomUUID()}></CountryItem>
      )
  }
      </TableBody>
        </Table>
      </TableContainer>);
}

