import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn320(){
	const[btnColor320, setBtnColor320] = useState(localStorage.getItem("savedBtnColor320"));
	useEffect(() => { localStorage.setItem("savedBtnColor320", btnColor320);}, [btnColor320]);
	return(
		<div>
		<button
			className = {btnColor320} 
			onClick = {() => setBtnColor320((btnColor320) => (btnColor320 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn320
