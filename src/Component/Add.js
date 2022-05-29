import React, { useState } from "react";
import axios from "axios";
import {TextField,Button,DialogContent,DialogTitle,InputLabel,MenuItem,FormControl,Select} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider,DatePicker} from '@mui/lab';
import { makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  form:{
    boxShadow:'0px 8px 16px 0px rgb(122,194,203,0.5)',
  marginLeft:'20%',
  marginRight:'20%',
    marginTop:'5%',
    padding:'2%',
    background:'rgba(0,0,0,0.6)',
    width:'50%',
    height:'90% !important'

  },
  textField: {
      width: '45%',
      backgroundColor: "white",
      borderRadius: "0.4rem",
      margin: '5px ! important',
      padding:"5px ! important",
      
  },
  button: {
      width: '100%',
      border: "2px solid rgb(122,194,203) !important" ,  
   marginTop:'20px ! important'

  }
});

function Add(props){

    const classes = useStyles();


  
    const[name,setName]=useState('');
    const[email,setEmil]=useState('');
    const[contact,setContact]=useState('');
    const[level,setLevel]=useState('');
    const[preference,setPreference]=useState('');
    const[dob,setDob]=useState(null);
    
    const addInfo = async()=> {
      const response = await axios.get("/AdmitKard/Add",{params:{
          name,email,contact,level,preference,dob
      }})
      console.log(response)
    }

    const submit = event => {
      event.preventDefault();
      addInfo();
    
    };

    return (
    
      <form  onSubmit={submit} autoComplete="off" className={classes.form}> 
        <div style={{}}>
            <h1 style={{color:'rgb(107 170 179)',fontSize:'30px'}}>New User Details</h1>
        </div>

        <div  style= {{ } }  >  
          <TextField value={name} label="Name" required variant="filled" className={classes.textField} onChange={(e) =>{setName(e.target.value)}} />
          <TextField value={email} label="Email" required variant="filled" className={classes.textField} onChange={(e) =>{setEmil(e.target.value)}} />
          <TextField value={contact} label="Conatct Number" required variant="filled" className={classes.textField} onChange={(e) =>{setContact(e.target.value)}} />
          <FormControl required className={classes.textField} variant="filled">
            <InputLabel id="demo-simple-select-required-label">Course Level</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={level}
                label="Course Level"
                onChange={(e) =>{setLevel(e.target.value)}}
              >
                <MenuItem value={'PG'}>PG</MenuItem>
                <MenuItem value={'UG'}>UG</MenuItem>
              </Select>
          </FormControl>
          <FormControl required className={classes.textField} variant="filled">
            <InputLabel id="demo-simple-select-required-label">Country Preference</InputLabel>
              <Select 
             
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={preference}
                label="Country Prefrence"
                onChange={(e) =>{setPreference(e.target.value)}}
              >
                
                <MenuItem value={'USA'}>USA</MenuItem>
                <MenuItem value={'Austraila'}>Austraila</MenuItem>
                <MenuItem value={'New-Zealand'}>New-Zealand</MenuItem>
                <MenuItem value={'Canada'}>Canada</MenuItem>
                <MenuItem value={'Irland'}>Irland</MenuItem>
                <MenuItem value={'UK'}>UK</MenuItem>
                <MenuItem value={'Germany'}>Germany</MenuItem>
              </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker 
              label="Date Of Birth"  
              value={dob}
              onChange={(newValue) => {setDob(newValue);}}
              renderInput={(params) => <TextField  variant="filled" className={classes.textField}  {...params} />}
            />
          </LocalizationProvider>
          <Button type="submit" className={classes.button}>Add</Button>
        </div>
       
      </form>
  );
}

export default Add;
