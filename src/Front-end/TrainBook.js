import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function TrainBook() {

    const {id} = useParams()
    const {uId} = useParams()

    let navigate = useNavigate();
    const [booking, setBooking] = useState({
        trainId:'',
        userId:'',
        passengers:''
    })

    const{trainId, userId, passengers} = booking
    booking.trainId = id
    booking.userId = uId
    const onInputChange=(e)=>{
setBooking({...booking,[e.target.name]: e.target.value})
    }

    const save=async(e)=>{
        e.preventDefault();

        const res = await axios.post("http://localhost:9196/user/book/train", booking)
        console.log(res.data)
        navigate('/dashboard/'+uId)
    }


    const[train, setTrain] = useState({
        trainName:'',
        tourMap:'',
        departure:'',
        seats:''
    })
    
      useEffect(()=>{
        loadTrains()
    },[])
    const loadTrains = async ()=>{
        const result = await axios.get(`http://localhost:9196/user/get/train/${id}`)
        setTrain(result.data)
    }


  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Book Train</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your name'
                    name="hotelId"
                    value={train.trainName}
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
                    <input type={"number"}
                    className="form-control"
                    placeholder='Total No. Of Passengers'
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
    </div>
    </div>
  )
}
