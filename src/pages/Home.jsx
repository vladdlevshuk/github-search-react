import React, { Fragment } from 'react'
import Search from '../components/Search'
import Card from '../components/Card'

const Home = () => {
  const cards = new Array(15)
    .fill('')
    .map((_, i) => i)
  return (
    <Fragment>
      <div className='container' style={{ marginTop: '90px' }}>
        <Search />
        <div className='row' style={{ maxWidth: '1100px', margin: 'auto'}}>
          {cards.map(card => (
            <div className='col-sm-4 mb-4' key={card}>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Home
