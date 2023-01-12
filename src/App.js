
import './App.css';
import {connect} from 'react-redux'
function App(props) {
  const mapStateToProps = state =>{
    return {count : state.counterReducer}
  }
 
  return (
    <div className="App">
      <header className="App-header">
      <p>{props.count}</p>
       
      </header>
    </div>
  );

 
}

export default connect(mapStateToProps)(App);
