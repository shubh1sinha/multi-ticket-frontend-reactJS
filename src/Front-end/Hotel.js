import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default function Hotel() {
    const {id} = useParams()

    const [cities, setCities] = useState([])

    useEffect(()=>{
        loadCities();
    }, []);

    const loadCities=async()=>{
        const response = await axios.get("http://localhost:9196/user/cities/list");
        console.log(response)
        setCities(response.data);
    }

    const [hotel, getHotel] = useState({
        cityName: ''
    })

    const{cityName} = hotel

    const onInputChange=(e)=>{
getHotel({...hotel,[e.target.name]: e.target.value})
    }

    const [hotels, setHotels] = useState([])


    const save=async(e)=>{
        e.preventDefault();

     const response = await axios.get("http://localhost:9196/user/hotel/list/"+cityName)
        setHotels(response.data)
        
    }
  return (
    <div><div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Book Hotel</h2>
             <form onSubmit={(e)=>save(e)}> 
            
            <div className='mb-3'>
                <select className="form-control" name="cityName" value={cityName} id={"cityName"} onChange={(e)=>onInputChange(e)}>
                    <option value="">select any one</option>
                {cities.map((cities)=>(
                    <option value={cities.cityName}>{cities.cityName}</option>
                ))}
                </select>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
            </form>
            </div>
        </div>
    </div>
    <div className='contaimer'>
        <div className='container'>
        <div className='py-4'>
        <table class="table border shadow">
    <thead className='table-dark'>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Hotel Id</th>
      <th scope="col">Hotel Name</th>
      <th scope="col">Facilities</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
                    {
                        hotels.map((hotels, index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{hotels.hotelId}</td>
                            <td>{hotels.name}</td>
                            <td>{hotels.facilities}</td>
                            <td><Link className='btn btn-primary mx-2' to={`/hotel/${hotels.hotelId}/book/${id}`}>Book</Link>
                            </td>
                            </tr>
                        ))
                    }
    </tbody>
    </table>
    </div>
    </div>
    </div></div>
  )
}
