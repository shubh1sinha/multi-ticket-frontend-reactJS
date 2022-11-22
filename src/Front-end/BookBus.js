import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function BookBus() {
    const {id} = useParams()
    const {uId} = useParams()

    let navigate = useNavigate();
    const [booking, setBooking] = useState({
        busId: '',
        passengers: '',
        userId:'',
        boarding:'',
        dropping:''
    })

    const{busId, passengers, userId, boarding, dropping} = booking
    booking.busId = id
    booking.userId = uId
    const onInputChange=(e)=>{
setBooking({...booking,[e.target.name]: e.target.value})
    }

    const save=async(e)=>{
        e.preventDefault();

        const res = await axios.post("http://localhost:9196/user/book/bus", booking)
        console.log(res.data)
        navigate('/dashboard/'+uId)
    }


    const[bus, setBus] = useState({
        busName:'',
        secdestn:'',
        fromDate:'',
        seats:'',
        routes:[],
    })
    
      useEffect(()=>{
        loadBus()
    },[])
    const loadBus = async ()=>{
        const result = await axios.get(`http://localhost:9196/user/get/bus/${id}`)
        setBus(result.data)
        console.log(result.data.routes)

    }

  return (
    <div><div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Book Bus</h2>
            <form onSubmit={(e)=>save(e)}>
                <div className='mb-3'>
                <input type={"text"}
                className="form-control"
                placeholder='Enter your name'
                name="busId"
                value={bus.busName}
                readOnly
                 />
                </div>

                <div className='mb-3'>
                <input type={"text"}
                className="form-control"
                placeholder='Enter your name'
                name="userId"
                value={booking.userId}
                readOnly
                 />
                </div>



                 <div className='mb-3'>
                <select className="form-control" name="boarding" value={boarding} id={"boarding"} onChange={(e)=>onInputChange(e)}>
                    <option value ="">Select Boarding Point</option>
                            {bus.routes.map((routes)=>(
                             <option value={routes.cityName}>{routes.cityName}</option>
                              ) ) }
                </select>
                </div> 

                <div className='mb-3'>
                <select className="form-control" name="dropping" value={dropping} id={"dropping"} onChange={(e)=>onInputChange(e)}>
                    <option value ="">Select Boarding Point</option>
                            {bus.routes.map((routes)=>(
                             <option value={routes.cityName}>{routes.cityName}</option>
                              ) ) }
                </select>
                </div> 

                <div className='mb-3'>
                <input type={"number"}
                className="form-control"
                placeholder='Total No. Of Guests'
                name="passengers"
                value={passengers}
                onChange={(e)=>onInputChange(e)} />
                </div>


                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                &nbsp;
                <button type='submit' className='btn btn-outline-danger'>Cancel</button>
            </form>
            
        </div>
    </div>
</div></div>
  )
}
