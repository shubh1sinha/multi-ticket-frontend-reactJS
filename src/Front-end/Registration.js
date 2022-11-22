import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Registration() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: '',
        country: '',
        state: '',
        district: ''
    })

    const{firstName, lastName, mobile, email, password, country, state, district} = user

    const onInputChange=(e)=>{
setUser({...user,[e.target.name]: e.target.value})
    }

    const save=async(e)=>{
        e.preventDefault();

        await axios.post("http://localhost:9196/user/registration", user)
        console.log(user)
        navigate('/')
    }

  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Registration</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter First Name'
                    name="firstName"
                    value={firstName} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter tour Last Name'
                    name="lastName"
                    value={lastName} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"number"}
                    className="form-control"
                    placeholder='Enter contact number'
                    name="mobile"
                    value={mobile}
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your email'
                    name="email" 
                    value={email} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your password'
                    name="password" 
                    value={password} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <select className="form-control" name="country" value={country} id={"country"} onChange={(e)=>onInputChange(e)}>
                        <option value ="">Select country</option>
                        <option value={"India"}>India</option>
                    </select>
                    </div>


                    <div className='mb-3'>
                    <select className="form-control" name="state" value={state} id={"state"} onChange={(e)=>onInputChange(e)}>
                        <option value="">Select country</option>
                        <option value={"DEL"}>Delhi</option>
                        <option value={"BR"}>Bihar</option>
                        <option value={"RJ"}>Rajasthan</option>
                        <option value={"MH"}>Maharastra</option>
                        <option value={"OD"}>Odisha</option>
                        <option value={"JH"}>Jharkhand</option>
                        <option value={"WB"}>West Bengal</option>
                    </select>
                    </div>

                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter district'
                    name="district" 
                    value={district}
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    &nbsp;
                    <Link type='submit' className='btn btn-outline-danger' to='/'>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
