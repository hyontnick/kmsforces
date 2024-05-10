import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='NOS TARIFS' title='Tarification' />
        <div className='price container grids'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
