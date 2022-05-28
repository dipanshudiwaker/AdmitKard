import { avatarClasses, TextField } from '@mui/material';
import axios from 'axios';
import React,{useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avater from './avater.png'

function Search() {
  const [email,setEmail]=useState([]);
  const [tableData,setTableData]=useState([])
 

  const SearchI=()=>{ 
    axios.get("/AdmitKard/Search",{params:{
      email
    }})
    .then(res =>{
    setTableData((arr)=>arr.concat(res.data));
    }).catch(err => {
    ).catch(err => {
      console.log(err)
    })
    console.log(tableData)
  }
 
  let inputHandler = (e) => {
      setEmail(e.target.value)
     

  };
  
  

  return (
    <div>

      <h1 style={{marginLeft:'40%'}}>Fetech The User Data </h1>
       <TextField value={email} onChange={inputHandler} label="Enter Email" variant="filled" style={{width:"30%",backgroundColor:'white',borderRadius:'5px',marginBottom:'16px',marginTop: '7px',marginLeft:"30%"}} />
          <button onClick={SearchI} style={{height:"60px",width:"20%",background:'#dca6e7',borderRadius:'5px',margin:'5px',borderColor:'transparent'}}>Search</button>
        
        {tableData.map((data,)=>{return(<div style={{boxShadow:'0px 8px 16px 0px rgb(0,0,0,0.2)',margin:'10px',background: '#cdcde0', borderRadius:'10px'}}>
          <List key={data.email} sx={{ width: '100%', bgcolor: 'grey'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={avater} />
            </ListItemAvatar>
            <ListItemText
              primary={data.name}
              secondary={
                <React.Fragment>
                  {data.email}
                  <Typography
                    sx={{ display: 'flex' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Age :-  {data.dob}

                  </Typography>
                  <Typography
                    sx={{ display: 'flex' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Course Level :-  {data.level}

                  </Typography>
                  <Typography
                    sx={{ display: 'flex' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Country Preference :-  {data.preference}

                  </Typography>
                  <Typography
                    sx={{ display: 'flex' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Contact :-  {data.contact}

                  </Typography>
                
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
         
        </List>
    </div>
        )
 
        })}  


</div>
  )
}

export default Search