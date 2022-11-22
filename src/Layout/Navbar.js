import React from 'react'
import { Link} from 'react-router-dom'

export default function 
() {
  return (
    <div>
        <div>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <a class="navbar-brand"></a>
            
  <Link class="navbar-brand" to={'/'}>Milti-Ticket Booking</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">

      <li class="nav-item">
        <Link class="nav-link" to='/registration'>Register</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
    </div>
  )
}
