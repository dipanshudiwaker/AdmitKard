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
function Search() {
  const [email,setEmail]=useState("");
  const [tableData,setTableData]=useState([])


  const SearchI=()=>{ 
    axios.get("/AdmitKard/Search",{params:{
      email
    }})
    .then(res =>{
    setTableData(res.data);
    }).catch(err => {
      console.log(err)
    })
    console.log(tableData)
  }
  
  
  let inputHandler = (e) => {
      setEmail(e.target.value)
  };
  
  

  return (
    <div>
       <TextField value={email} onChange={inputHandler} label="Search Custmer Id" variant="filled" style={{backgroundColor:'white',borderRadius:'5px',marginBottom:'16px',marginTop: '7px'}} />
          <button onClick={SearchI}>Search</button>
        
        {tableData.map((data,id)=>{return(
          <List sx={{ width: '100%', bgcolor: 'grey' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
    
        )
 
        })}  


</div>
  )
}

export default Search