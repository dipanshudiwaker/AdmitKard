import React, { useState } from "react";
import axios from "axios";
import {TextField,Button,DialogContent,DialogTitle,InputLabel,MenuItem,FormControl,Select} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider,DatePicker} from '@mui/lab';
import { makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  textField: {
      width: '30%',
      backgroundColor: "#fff",
      borderRadius: "0.4rem",
      margin: '1rem'
  },
  button: {
      width: '49%',
      border: "1px solid #fff" ,  
      color: "#fff",
      margin: '0.2rem' 
  }
});

function Add(props){

    const classes = useStyles();

    const {openAdd,setOpenAdd} = props;

    const handleCloseAdd = () => {setOpenAdd(false);};
  
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
      handleCloseAdd();
    };

    return (
    
      <form  onSubmit={submit} autoComplete="off" style={{overflow:'hidden'}}> 
        <DialogTitle style={{color:'white'}}>Add</DialogTitle>
        <DialogContent  style= {{ minWidth: "90% !important",maxWidth:'95% !important', height: "100%"} }  >  
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
                <MenuItem value="">None</MenuItem>
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
                <MenuItem value="">None</MenuItem>
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
              renderInput={(params) => <TextField required variant="filled" className={classes.textField}  {...params} />}
            />
          </LocalizationProvider>
          <Button type="submit" className={classes.button}>Add</Button>
          <Button onClick={handleCloseAdd} className={classes.button}>Canncel</Button>
        </DialogContent>
      </form>
  );
}

export default Add;
