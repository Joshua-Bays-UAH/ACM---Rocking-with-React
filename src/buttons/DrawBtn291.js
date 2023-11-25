import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn291(){
	const[btnColor291, setBtnColor291] = useState(localStorage.getItem("savedBtnColor291"));
	useEffect(() => { localStorage.setItem("savedBtnColor291", btnColor291);}, [btnColor291]);
	return(
		<div>
		<button
			className = {btnColor291} 
			onClick = {() => setBtnColor291((btnColor291) => (btnColor291 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn291
