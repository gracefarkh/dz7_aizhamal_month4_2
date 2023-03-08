import React, { Component, useState } from 'react';
import './App.css';

// export default class  App extends Component (){
//   constructor(props){
//     super(props)
//     this.state = {
//       show:true , 
//       text :'Нажми на меня' 
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick = ()=>{
//     this.setState({show:!this.state.show})
//   }
//   render(){
//     return(
//       <div className='App'>
//           {
//           this.state.show ? <button onClick={this.handleClick} className='blue'>{this.state.text}</button>
//           : <button onClick = {this.handleClick}className='red'>{this.state.text}</button> 
//           }
//       </div>
//   )
//   }  
  
// }

function Blocks (){
  const [color, setColor] = useState('blue')
    return(
      <div className='App'>
        <div className='wrapper'>
          {
            color === 'blue'
            ? 
            <button 
            className='blue'
            onClick={()=>setColor('green')}>
              blue
            </button>
            :
            <button
            className='green'
            onClick={()=> setColor('blue')}>
              green
            </button>
          }
        </div>
      </div>
    )
  }
  export default Blocks

