import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn223(){
	const[btnColor223, setBtnColor223] = useState(localStorage.getItem("savedBtnColor223"));
	useEffect(() => { localStorage.setItem("savedBtnColor223", btnColor223);}, [btnColor223]);
	return(
		<div>
		<button
			className = {btnColor223} 
			onClick = {() => setBtnColor223((btnColor223) => (btnColor223 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn223
