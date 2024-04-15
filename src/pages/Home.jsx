import React from 'react'
import WrapperMusic from '../components/WrapperMusic'
import CardMusic from '../components/CardMusic'
import Search from '../components/Search'

const Home = () => {
  return (
    <>

        <Search/>
      <WrapperMusic>
        <CardMusic object={''}/>
      </WrapperMusic>
    </>
  )
}

export default Home