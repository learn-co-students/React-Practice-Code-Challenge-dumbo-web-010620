import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  
   let sushiData = props.sushiData
   console.log(sushiData)
   let sushiDisplay = sushiData.slice(props.sushiIndex.start, props.sushiIndex.end)
   
   let sushiProp = sushiDisplay.map((sushi) => {
    return <Sushi key={sushi.id} id={sushi.id} name={sushi.name}
     img_url={sushi.img_url} price={sushi.price} eaten={sushi.eaten}
     buySushi={props.buySushi} budget={props.budget}/>
  })
  console.log(sushiProp)
  return (
    <Fragment>
      <div className="belt">
        {sushiProp}
        <MoreButton nextFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer