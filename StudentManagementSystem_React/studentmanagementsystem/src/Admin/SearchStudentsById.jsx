import axios from 'axios';
import React, { useState } from 'react'

const SearchStudentsById = () => {
    const [id, setId] = useState(0);
    const [student, setStudent] = useState({
        id:"",
        email:"",
        gender:"",
        mobile:"",
        password:"",
        student_name:"",
        batches:[]
    })

    function handleInputChange(e){
        const {name, value} = e.target;
        setId(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        // axios.get("http://localhost:8080/findstudentbyid/101")
        axios.get("http://localhost:8080/findallstudents")
        // axios.get("http://localhost:8080/findallbatches")
            .then((s)=>{
                console.log(s.data)
            }).catch((err)=>{
                console.log(err)
            })

    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="sid">id</label>
            <input type="number" name="id" id="sid"
                onClick={(e)=>handleInputChange(e)}
             /><br /><br />
            <button type='submit'>search</button>
        </form>
    </div>
  )
}

export default SearchStudentsById