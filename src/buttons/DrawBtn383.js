import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn383(){
	const[btnColor383, setBtnColor383] = useState(localStorage.getItem("savedBtnColor383"));
	useEffect(() => { localStorage.setItem("savedBtnColor383", btnColor383);}, [btnColor383]);
	return(
		<div>
		<button
			className = {btnColor383} 
			onClick = {() => setBtnColor383((btnColor383) => (btnColor383 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn383
