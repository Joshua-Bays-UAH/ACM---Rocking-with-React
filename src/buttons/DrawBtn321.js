import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn321(){
	const[btnColor321, setBtnColor321] = useState(localStorage.getItem("savedBtnColor321"));
	useEffect(() => { localStorage.setItem("savedBtnColor321", btnColor321);}, [btnColor321]);
	return(
		<div>
		<button
			className = {btnColor321} 
			onClick = {() => setBtnColor321((btnColor321) => (btnColor321 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn321
