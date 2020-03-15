import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {
  state={
    sushis: [],
    sushiIndex: {
      start:0,
      end:4
    },
    budget:100,
    sushiEaten:[]
  }

  async componentDidMount(){
    let resp = await fetch(API)
    let sushiArray = await resp.json()
    this.setState({sushis: sushiArray})
  }

  nextFour =()=> {
  (this.state.sushiIndex.end < 100 ?
   this.setState({
     sushiIndex: {
       start: this.state.sushiIndex.start += 4,
       end: this.state.sushiIndex.end += 4}
    })
    :
    this.setState({
      sushiIndex: {
        start: this.state.sushiIndex.start = 0,
        end: this.state.sushiIndex.end = 4}
     }))
    console.log(this.state.sushiIndex.end)
   }
 
   eatSushi=(sushiObj)=>{
    let {sushis} = this.state
   
   let updatedArray = sushis.map(sushi => {
      if(sushi.id === sushiObj.id){
        return {
          ...sushi,
          eaten:true}}
      else{return sushi}
    })//end of map
    this.setState({sushis: updatedArray})
    
   }

   buySushi=sushiObj=>{
    let {budget} = this.state
    let dirtyPlate = this.state.sushiEaten

    if (budget >= sushiObj.price && sushiObj.eaten !== true) 
    {this.setState({budget: budget - sushiObj.price})
    this.eatSushi(sushiObj)
    dirtyPlate.push(sushiObj)
    this.setState({sushiEaten: dirtyPlate})
  }
    
    
   }

  
  render() {
    return (
      <div className="app">
        {}
        <SushiContainer sushiData={this.state.sushis} sushiIndex={this.state.sushiIndex} 
        nextFour={this.nextFour} eaten={this.state.eaten} buySushi={this.buySushi} budget={this.state.budget}/>
        <Table budget={this.state.budget} sushiEaten={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;