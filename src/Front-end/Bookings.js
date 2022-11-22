import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function Bookings() {
    const {id} = useParams()
    const[bookings, setBookings] = useState({
        user: '',
        train: [],
        hotel:[],
        bus:[]
    })
    
      useEffect(()=>{
        loadBooking()
    },[])
    const loadBooking = async ()=>{
        const result = await axios.get(`http://localhost:9196/user/booking/${id}`)
        setBookings(result.data)
        console.log(result.data)
    }
  return (
    <div><div className='contaimer'>
    <div className='container'>
    <div className='py-4'>
    <h2><b>User Information</b></h2>
    <table class="table border shadow">
<thead className='table table-sm'> 

</thead>
<tbody>
                {

                        <tr>
                        <td>{bookings.user.email}</td>
                        <td>{bookings.user.firstName}  {bookings.user.lastName}</td>
                        <td>{bookings.user.district} {bookings.user.state} {bookings.user.country}</td>
                        
                        </tr>
                }
</tbody>
</table>
</div>
</div>
</div>

<div className='contaimer'>
        <div className='container'>
        <div className='py-4'>
        <h2><b>Bus Bookings</b></h2>
        <table class="table border shadow">
        
    <thead className='table-dark'>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Booking Id</th>
      <th scope="col">Bus Id</th>
      <th scope="col">Passengers</th>
      <th scope="col">Boarding</th>
      <th scope="col">Dropping</th>
    </tr>
    </thead>
    <tbody>
                    {
                        bookings.bus.map((buses, index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{buses.busId}</td>
                            <td>{buses.bookingId}</td>
                            <td>{buses.passengers}</td>
                            <td>{buses.boarding}</td>
                            <td>{buses.dropping}</td>
                            </tr>
                        ))
                    }
    </tbody>
    </table>
    </div>
    </div>
    </div>


    <div className='contaimer'>
        <div className='container'>
        <div className='py-4'>
        <h2><b>Hotel Bookings</b></h2>
        <table class="table border shadow">
        
    <thead className='table-dark'>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Booking Id</th>
      <th scope="col">Hotel Id</th>
      <th scope="col">Guests</th>
      <th scope="col">Room Type</th>
    </tr>
    </thead>
    <tbody>
                    {
                        bookings.hotel.map((hotels, index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{hotels.bookingId}</td>
                            <td>{hotels.hotelId}</td>
                            <td>{hotels.guests}</td>
                            <td>{hotels.roomType}</td>
                            </tr>
                        ))
                    }
    </tbody>
    </table>
    </div>
    </div>
    </div>
    

    <div className='contaimer'>
        <div className='container'>
        <div className='py-4'>
        <h2><b>Train Bookings</b></h2>
        <table class="table border shadow">
        
    <thead className='table-dark'>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Booking Id</th>
      <th scope="col">Train Id</th>
      <th scope="col">Passengers</th>
      <th scope="col">Seats</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
                    {
                        bookings.train.map((trains, index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{trains.bookingId}</td>
                            <td>{trains.trainId}</td>
                            <td>{trains.passengers}</td>
                            {trains.seat.map((seats, index)=>(
                                <td>
                                    <table className='table border shadow'>
                                        <tr><td>{seats.seatNo}{seats.status}</td></tr></table></td>
                            ))}
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
