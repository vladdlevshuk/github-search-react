import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='card shadow-sm border-light'>
      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        className='card-img-top'
      />
      <div className="card-body">
        <h5 className='card-title'>Имя Пользователя</h5>
        <p className='card-text'>Описание</p>
        <Link to={'/profile/'} className='btn btn-primary'>Открыть</Link>
      </div>
    </div>
  )
}

export default Card
