import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn370(){
	const[btnColor370, setBtnColor370] = useState(localStorage.getItem("savedBtnColor370"));
	useEffect(() => { localStorage.setItem("savedBtnColor370", btnColor370);}, [btnColor370]);
	return(
		<div>
		<button
			className = {btnColor370} 
			onClick = {() => setBtnColor370((btnColor370) => (btnColor370 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn370
