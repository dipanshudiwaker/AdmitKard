import { TextField } from '@mui/material';
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
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
textField:{
  width:"40%",
  backgroundColor:'white',
  borderRadius:'5px',
  marginBottom:'16px',
  marginTop: '7px',
  
  
},
Button:{
  height:"55px",
  width:"20%",
  background:'#7ac2cb',
  borderRadius:'5px',
  margin:'1px',
  borderColor:'transparent'
},
div:{
  boxShadow:'0px 8px 16px 0px rgb(122,194,203,0.5)',
  marginRight:'20%',
  marginLeft:'20%',
  marginTop:'5%',
  padding:'2%',
  background: 'rgba(0,0,0,0.6)',
   borderRadius:'10px'
  },
  div1:{
    boxShadow:'0px 8px 0px 0px rgb(194,71,116,0.5)',
    margin:'10px',
    padding:'1% ! important',
    background: 'transparent',
     borderRadius:'10px',
     color:"#daa7c0"
     
    },
   div2:{ width: '100%',overflowY:'hidden',maxHeight:'45max'}
   
})
function Search() {
  const A=useStyles();

  const [email,setEmail]=useState([]);
  const [tableData,setTableData]=useState([])
 

  const SearchI=()=>
  { 
       axios.get("/AdmitKard/Search",{params:{
           email
        }}).then(res =>{
          res.data.forEach(item => {
            if (!tableData.some(row=> row.email === item.email)) {
              setTableData((arr)=>[...arr,item]);
            }
        })
          })
          .catch(err => {
           console.log(err)
          })
     
  }

  let inputHandler = (e) => {
      setEmail(e.target.value)
       };
  
  

  return (
    <div className={A.div}>
        <div style={{marginTop:'5%',color:'white',justifyContent:'center',display:'flex'}}>
          <h1 >Fetech The User Data </h1>
        </div>
        <div style={{justifyContent:'center',display:'flex'}}>
           <TextField value={email} onChange={inputHandler} label="Enter Email" variant="filled" className={A.textField} />
           <button onClick={SearchI} className={A.Button}>Search</button>
        </div> 
        <div className={A.div2}>  
        {tableData.map((data)=>{return(<div className={A.div1}>
          <List key={data.email} >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={avater} sx={{width:50,height:'100%'}} variant="square"s/>
            </ListItemAvatar>
            <ListItemText
              primary={data.name}
              secondary={
                <React.Fragment>
                <p style={{ display: 'flex',color:'#7ac2cb',margin:'0px' }}>  {data.email}</p>
                  <Typography
                    sx={{ display: 'flex',color:'#7ac2cb' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Age :-  {data.dob}

                  </Typography>
                  <Typography
                    sx={{ display: 'flex',color:'#7ac2cb' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Course Level :-  {data.level}

                  </Typography>
                  <Typography
                    sx={{ display: 'flex',color:'#7ac2cb' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Country Preference :-  {data.preference}

                  </Typography>
                  <Typography
                    sx={{ display: 'flex',color:'#7ac2cb' }}
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
</div>
  )
}

export default Search