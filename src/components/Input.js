import React, { useState , useEffect} from 'react'
import cityJson from './cities.json'
import generated from './generated.json'
import axios from 'axios'
import {Button , TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import './Input.css'

function Input() {


    const [temp,setTemp] = useState(null)
    // const[id,setID] = useState(null)
    const [err,setErr] = useState(null)
    const [loading,setLoading] = useState(false)
    const[inputHandler,setInputhandler] = useState('')
 
    const filterOptions = createFilterOptions({
        startAfter: 3,
        limit: 25,
        blurOnSelect: 'mouse'
      });      
        
    const clickHandler = ()=>{
        setLoading(true)
        const val2 = inputHandler
                    .toLowerCase()
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
        let id = null
    
        for(let  i =0 ; i< cityJson.length ; i++){

        if(cityJson[i].city_name === val2 ){
           id = cityJson[i].city_id
        //    console.log("ID: " + id)
        }
       }

       
       
    //    console.log("Final ID: " + id)

       if(id){
           axios.get(`https://api.weatherbit.io/v2.0/current?city_id=${id}&key=64da8796d4e94d9ba3b3c93ea02c8084`)
                .then(data =>{
                    // debugger
                        // console.log(data.data.data[0].temp)
                        setTemp(data.data.data[0].temp)
        })
       }else{
        console.log(id)
        setErr("Bad Request: No City Found With the Given Name")
        setTemp(null)
       }

       setLoading(false)
    }

    return (
        <div>
            {temp ? <h4> {temp} Celcious </h4> : <h5>{err}</h5>}
            {loading? <h5>Fetching Data Please Wait...</h5>:
            (<div className="auto">
            <Autocomplete
            id="combo-box-demo"
            filterOptions={filterOptions}
            options={cityJson}
            getOptionLabel={(option) => option.city_name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City Name" variant="outlined" value={inputHandler}  onChange={e => setInputhandler(e.target.value)}  placeholder="Enter City Name" />}
            />
            </div>)
            }
            <Button variant="contained" color="primary" onClick={clickHandler}>
                Check
            </Button>
        
        </div>
    )
}

export default Input
