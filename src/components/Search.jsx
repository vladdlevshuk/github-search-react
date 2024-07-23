import React from 'react'

const Search = () => {
  return (
    <div className='form-group mb-4'>
      <div className='container' style={{ maxWidth: '500px' }}>
        <input
          type="text"
          className='form-control'
          placeholder='Введите имя пользователя ...'
          style={{ height: '50px', padding: '10px' }}
        />
      </div>
    </div>
  )
}

export default Search
