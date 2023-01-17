
import './App.css';
import {connect} from 'react-redux'
import {increment,decrement} from './Actions/counterAction'
function App(props) {
 
 
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={()=>props.plusBtn()}>+</button>
      <p>{props.count}</p>
       <button onClick={()=>props.minusBtn()}>-</button>
      </header>
    </div>
  );

 
}
const mapStateToProps = state =>{
  return {count : state.counterReducer}
}
const mapDispatchToProps =dispatch=>{
return {
  plusBtn:()=>dispatch(increment()),
  minusBtn:()=>dispatch(decrement())
  
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
