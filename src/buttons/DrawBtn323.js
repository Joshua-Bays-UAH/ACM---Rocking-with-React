import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn323(){
	const[btnColor323, setBtnColor323] = useState(localStorage.getItem("savedBtnColor323"));
	useEffect(() => { localStorage.setItem("savedBtnColor323", btnColor323);}, [btnColor323]);
	return(
		<div>
		<button
			className = {btnColor323} 
			onClick = {() => setBtnColor323((btnColor323) => (btnColor323 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn323
