import './App.css';
import React, {useState} from 'react';


function App() {
const [weight, setWeight]=useState(0);
const [height, setHeight]=useState(0);
const [bmi, setBmi]=useState('');
const [message, setMessage]=useState('');

let calBMI=(event)=>{
  event.preventDefault()
  if(weight===0 || height===0){
    alert('Please enter valid weight and height')
  }else{
    let bmi=(weight/(height*height)*703);
    setBmi(bmi.toFixed(1))
    if(bmi<25){
      setMessage('underweight');
    }else if (bmi>=25 && bmi<30){
      setMessage('healthy')
    }else{
      setMessage('overwight');
    }
  }
}
let reload=()=>{
  window.location.reload();
}


  return (
    <div className="APP">
      <div className='container'>
        <h2>BMI calculator</h2>
        <form onSubmit={calBMI}>
          <div>
            <label>Weight (LBS)</label>
            <input type="text" placeholder="Enter Weight" value={weight} onChange={(e)=> setWeight(e.target.value)}></input>
          </div>
          <div>
            <label>Height</label>
            <input type="text" placeholder="Enter Height" value={height} onChange={(event)=> setHeight(event.target.value)}></input>
          </div>
          <div>
            <button className='btn' type="submit">Submit</button>
            <button className='btn btn-reload' onClick={reload} type="submit">Reload</button>
          </div>
          <div className='center'>
            <label className='right'>BMI is {bmi}</label>
            <label>{message}</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
