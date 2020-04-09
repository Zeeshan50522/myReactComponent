import React,{Component} from 'react';
import Image from './img.jpg'
class App extends Component {


  render(){
  return (
    <div>
      <h3>Name: Muhammad Zeeshan</h3>
      <h3>Roll No: i160315</h3>
      <img src={Image} alt=""/>
    </div>
  );
  };
}

export default App;
