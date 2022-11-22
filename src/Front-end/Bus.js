import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function Bus() {
  const {id} = useParams()
    let navigate = useNavigate();
    const [cities, setcities] = useState([])

    useEffect(()=>{
        loadcities();
    }, []);

    const loadcities=async()=>{
        const response = await axios.get("http://localhost:9196/user/cities/list");
        setcities(response.data);
    }

    const [bus, getBus] = useState({
      boarding: '',
      dropping: ''
  })

  const onInputChange=(e)=>{
    getBus({...bus,[e.target.name]: e.target.value})
        }

  const{boarding, dropping} = bus
 const srcdstn = boarding.toUpperCase().slice(0,3)
 const srcdstn2 = dropping.toUpperCase().slice(0,3)
 const parameter = srcdstn+"-"+srcdstn2

 const [buses, setBuses] = useState([])


    const save=async(e)=>{
        e.preventDefault();

     const response = await axios.get("http://localhost:9196/user/bus/list?srcdstn="+parameter)
        setBuses(response.data)

    }
  return (
    <div>
      <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Enter Source And Destination</h2>
             <form onSubmit={(e)=>save(e)}>  
             
            
            <div className='mb-3'>
                <select className="form-control" name="boarding" value={boarding} id={"boarding"} onChange={(e)=>onInputChange(e)}>
                    <option value="">select any Source</option>
                {cities.map((cities)=>(
                    <option value={cities.cityName}>{cities.cityName}</option>
                ))}
                </select>
                </div>

                <div className='mb-3'>
                <select className="form-control" name="dropping" value={dropping} id={"dropping"} onChange={(e)=>onInputChange(e)}>
                    <option value="">select any Destination</option>
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
      <th scope="col">Bus Id</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Source-Destination</th>
      <th scope="col">Seats</th>
      <th scope="col">Routes</th>
      <th scope="col">Boarding Date</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
                    {
                        buses.map((buses, index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{buses.busId}</td>
                            <td>{buses.busName}</td>
                            <td>{buses.srcDestn}</td>
                            <td>{buses.seats}</td>
                            <td>{buses.routes.map((routes, index)=>(
                            <td>{routes.cityName}</td>
                              ) ) }</td>
                            <td>{buses.fromDate}</td>
                            <td><Link className='btn btn-primary mx-2' to={`/bus/${buses.busId}/book/${id}`}>Book</Link>
                            </td>
                            </tr>
                        ))
                    }
    </tbody>
    </table>
    </div>
    </div>
    </div>
    </div>
    
  )
}

