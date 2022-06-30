import React from 'react';


class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState( { date: new Date()} );
  }

  render() {
    return(
      <>
      <h3>Date and Time with React Class</h3>

      <div className="time-box">
        <div> Date:  {this.state.date.toLocaleDateString()}</div>
        <div> Time: {this.state.date.toLocaleTimeString()}</div>
        <div> Hours: {this.state.date.getHours()}</div> 
        <div> Minutes: {this.state.date.getMinutes()}</div>
        <div> Seconds: {this.state.date.getSeconds()}</div> 
      </div>
      <hr></hr>
      </>
    )
  }

}

export default Time






//import { format } from 'date-fns';
//format(new Date(), 'dd/mm/yyyy');

//let currentDate = new Date();

/*function covertMonth(num){
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // look into index with num 0-11
    let computedRes = months[num];
    return computedRes;
  }
  */
  

   // const day = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;

/*
    const hours = `${current.getHours()}`;
    const mins = `${current.getMinutes()}`;
    const secs = `${current.getSeconds()}`;

*/
   // const time = `${current.getHours()}.${current.getMinutes()}.${current.getSeconds()}`;
    //let tick = setInterval(current.getSeconds(), 1000);

    /*
    let date = new Date();
  this.time = date.toLocaleTimeString();
  this.year = date.getUTCFullYear();
  this.day = date.getUTCDate();
  this.month = date.getUTCMonth();
  this.currentTime = date.toLocaleTimeString() + ' ' + covertMonth(this.month) + ' ' + this.day + ' ' + this.year;
  // return this.currentTime;
  */

 




/**function covertMonth(num){
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // look into index with num 0-11
  let computedRes = months[num];
  return computedRes;
}

// time func
function Time(){
   // important to get new instant of the Date referrance
  let date = new Date();
  this.time = date.toLocaleTimeString();
  this.year = date.getUTCFullYear();
  this.day = date.getUTCDate();
  this.month = date.getUTCMonth();
  this.currentTime = date.toLocaleTimeString() + ' ' + covertMonth(this.month) + ' ' + this.day + ' ' + this.year;
  return this.currentTime;
}


 function timeOutPut(){
  let where = document.getElementById('some-id');
  where.textContent = Time(); // 1:21:39 AM Dec 17 2017
}

   // run every 5secs
setInterval(timeOutPut, 5000); */




/*function Time() {
  let current = new Date();

return(
  <div className="time-box">
    <div>Date today: {current.toLocaleDateString()}</div>
      <div>Hours {hours}</div>
      <div>Minutes {mins}</div>
<div>Seconds  {secs}</div> 
    </div>    
);

}

setInterval(Time, 1000);*/

//export default Time; 