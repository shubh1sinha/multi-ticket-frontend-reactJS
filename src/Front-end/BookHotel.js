import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function BookHotel() {
    const {id} = useParams()
    const {uId} = useParams()

    let navigate = useNavigate();
    const [booking, setBooking] = useState({
        hotelId: '',
        guests: '',
        userId:'',
        roomType:''
    })

    const{hotelId, userId, guests, roomType} = booking
    booking.hotelId = id
    booking.userId = uId
    const onInputChange=(e)=>{
setBooking({...booking,[e.target.name]: e.target.value})
    }

    const save=async(e)=>{
        e.preventDefault();

        const res = await axios.post("http://localhost:9196/user/book/hotel", booking)
        console.log(res.data)
        navigate('/dashboard/'+uId)
    }


    const[hotel, setHotel] = useState({
        name:'',
        city:'',
        faccilities:''
    })
    
      useEffect(()=>{
        loadHotels()
    },[])
    const loadHotels = async ()=>{
        const result = await axios.get(`http://localhost:9196/user/get/hotel/${id}`)
        setHotel(result.data)
    }

  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Book Hotel</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your name'
                    name="hotelId"
                    value={hotel.name}
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
                    placeholder='Total No. Of Guests'
                    name="guests"
                    value={guests}
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <select className="form-control" name="roomType" value={roomType} id={"roomType"} onChange={(e)=>onInputChange(e)}>
                        <option value ="">Select Room Type</option>
                        <option value={"1-Bed"}>One Bedded</option>
                        <option value={"2-Bed"}>Two Bedded</option>
                        <option value={"3-Bed"}>Three Bedded</option>
                    </select>
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
