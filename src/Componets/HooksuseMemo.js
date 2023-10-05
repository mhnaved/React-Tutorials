import React, {useState, useMemo} from 'react';

function HooksuseMemo() {
const [number, setNumber] = useState(0);
// Using useMemo
const squaredNum = useMemo(()=> {
	return squareNum(number);
}, [number])
const [counter, setCounter] = useState(0);

// Change the state to the input
const onChangeHandler = (e) => {
	setNumber(e.target.value);
}
	
// Increases the counter by 1
const counterHandler = () => {
	setCounter(counter + 1);
}
return (
	<div className="App">

	<input type="number" 
		value={number} onChange={onChangeHandler}>
	</input>
		
	<div>OUTPUT: {squaredNum}</div>
	<button onClick= {counterHandler}>Counter ++</button>
	<div>Counter : {counter}</div>
	</div>
);
}

// function to square the value
function squareNum(number){
console.log("Squaring will be done!");
return Math.pow(number, 2);
}

export default HooksuseMemo;



// p/ractice spot


// const[number, setNumber] = useState(0);
// onChangeHandler =(e)=>{
// 	setNumber(e.target.value);
// }
// const counterHander =()=>{
// 	setCounter(counter+1);
// }

// const squaredNum =useMemo(()=>{
// 	return squareNum(number);
// },[number])

// const squaredNum = useMemo(()=>{
// 	return Math.pow
// })
