import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function Dashboard() {
const {id} = useParams()


  return (
    <div>
        <div>
      <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Portal</h2>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                            
                            <Link className='btn btn-outline-dark' to={`/hotel/${id}`} >Hotel</Link> &nbsp;
                            <Link className='btn btn-outline-dark' to={`/train/${id}`} >Train</Link> &nbsp;
                            <Link className='btn btn-outline-dark' to={`/bus/${id}`} >Bus</Link> &nbsp;
                            <Link className='btn btn-outline-dark' to={`/bookings/${id}`} >Bookings</Link> &nbsp;
                            
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    </div>
    </div>
    </div>
  )
}
