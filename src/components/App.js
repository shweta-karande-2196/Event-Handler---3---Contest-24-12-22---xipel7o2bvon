import React from 'react'
import '../styles/App.css';
const App = () => {
let [data, setData] = useState({
  text:''
,num:''}]
 const handleInput = (event) =>{
   // use console.log
  setData({...data,
           [e.target.name]:e.target.value
  })
}
console.log(data);
  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" name='text' onChange={handleInput} type={'text'} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" name='num' onChange={handleInput}  type={'number'} />
      <br/>
    </div>
  )
}


export default App;
