import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn343(){
	const[btnColor343, setBtnColor343] = useState(localStorage.getItem("savedBtnColor343"));
	useEffect(() => { localStorage.setItem("savedBtnColor343", btnColor343);}, [btnColor343]);
	return(
		<div>
		<button
			className = {btnColor343} 
			onClick = {() => setBtnColor343((btnColor343) => (btnColor343 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn343
