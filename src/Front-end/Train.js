import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function Train() {
    const {id} = useParams()
    let navigate = useNavigate();
    const [sd, setSD] = useState([])

    useEffect(()=>{
        loadSDs();
    }, []);

    const loadSDs=async()=>{
        const response = await axios.get("http://localhost:9196/user/sd/list");
        setSD(response.data);
    }


    const [train, getTrain] = useState({
        sourceId:'',
        destinationId:'',
        departure:''
    })

    const{sourceId, destinationId, departure} = train

    const onInputChange=(e)=>{
getTrain({...train,[e.target.name]: e.target.value})
    }

    const [trains, setTrains] = useState([])


    const save=async(e)=>{
        e.preventDefault();

     const response = await axios.post("http://localhost:9196/user/train/list", train)
     console.log(response.data)
        setTrains(response.data)
        
    }

  return (
    <div>
        <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Enter Information Below</h2>
             <form onSubmit={(e)=>save(e)}> 
            
            <div className='mb-3'>
                <select className="form-control" name="sourceId" value={sourceId} id={"sourceId"} onChange={(e)=>onInputChange(e)}>
                    <option value="">select any one</option>
                {sd.map((sd)=>(
                    <option value={sd.sdId}>{sd.sdName}</option>
                ))}
                </select>
                </div>

                <div className='mb-3'>
                <select className="form-control" name="destinationId" value={destinationId} id={"destinationId"} onChange={(e)=>onInputChange(e)}>
                    <option value="">select any one</option>
                {sd.map((sd)=>(
                    <option value={sd.sdId}>{sd.sdName}</option>
                ))}
                </select>
                </div>

                <div className='mb-3'>
                    <input type={"date"}
                    className="form-control"
                    placeholder='Enter Date'
                    name="departure" 
                    value={departure} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>


                <button type='submit' className='btn btn-outline-primary'>Submit</button>
            </form>
            </div>
        </div>
        <div className='contaimer'>
        <div className='container'>
        <div className='py-4'>
        <table class="table border shadow">
    <thead className='table-dark'>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Train No</th>
      <th scope="col">Train Name</th>
      <th scope="col">Maps</th>
      <th scope="col">Seats</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
                    {
                        trains.map((trains, index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{trains.trainId}</td>
                            <td>{trains.trainName}</td>
                            <td>{trains.tourMap}</td>
                            <td>{trains.seats}</td>
                            <td><Link className='btn btn-primary mx-2' to={`/train/${trains.trainId}/book/${id}`}>Book</Link>
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
    </div>
  )
}
