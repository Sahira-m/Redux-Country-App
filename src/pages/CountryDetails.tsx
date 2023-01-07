import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";

//redux
import {fetchCountryUrl}  from "../thunk/countryDetail";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AppDispatch } from "../redux/store";

//mui
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//mui
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CountryDetails()
 {
//mui
const [expanded, setExpanded] = useState(false);
const handleExpandClick = () => {
  setExpanded(!expanded);
};

  const name = useParams();
  const Apiurl = "https://restcountries.com/v3.1/name/" + name.name;
  const countryDetails = useSelector((state: RootState) =>state.countryData.countryItem);
 console.log("apiurl is ",Apiurl);
 const dispatch = useDispatch<AppDispatch>();
 
  
 useEffect(() => {
  dispatch(fetchCountryUrl(Apiurl));
}, [dispatch,Apiurl]);
//dispatch(fetchCountryUrl(Apiurl));
  console.log("country details page",countryDetails);
  
    return (
      <div>
      
    countryDetails[0]? 
     <div>
      <h1> country details </h1>
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {countryDetails[0].name.common}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
          <h3>{countryDetails[0].name.common} </h3>
        </IconButton>
      }
      
      title="Shrim"
      subheader="Sep"
    />
    <CardMedia
      component="img"
      height="194"
      alt="images">
        <img src={countryDetails[0].flags.svg} alt={countryDetails[0].name.common}></img> 
      </CardMedia>
      
    
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      

     <p> Region:{countryDetails[0].region}</p>
     <h1> Population:{countryDetails[0].population}</h1> 
     <p>Languages</p>
     {countryDetails[0].languages ? (
      Object.entries(countryDetails[0].languages).map(([key]) => (
         <p key={key}> <span>{countryDetails[0].languages[key]}</span></p>
       ))
     ) : (
       <li>No Languages</li>
     )}
   
      </Typography>
    </CardContent>
    </Card> 
   </div> : no datas
     
    </div> 
      
     );  
 




 /*   return (
    <div>
      
 <h1> details page is in here </h1>
 {
  countryDetails[0]? 
   <div><p>{countryDetails[0].region}</p>
  <img src={countryDetails[0].flags.svg} alt={"Country images"}></img> 
 <p>{countryDetails[0].name.common}</p>
 <h1>{countryDetails[0].population}</h1> 
 {countryDetails[0].languages ? (
  Object.entries(countryDetails[0].languages).map(([key]) => (
     <p key={key}> <span>{countryDetails[0].languages[key]}</span></p>
   ))
 ) : (
   <li>No Languages</li>
 )}
  </div>:"no Details"
 } 
     </div>  
   );  */  
}
       
  
     
 
 
 
 
 
 /* <CardActions disableSpacing> */
        /* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            il.
          </Typography>
          <Typography paragraph>
            
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      */
    
       



