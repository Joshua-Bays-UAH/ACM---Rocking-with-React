import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn184(){
	const[btnColor184, setBtnColor184] = useState(localStorage.getItem("savedBtnColor184"));
	useEffect(() => { localStorage.setItem("savedBtnColor184", btnColor184);}, [btnColor184]);
	return(
		<div>
		<button
			className = {btnColor184} 
			onClick = {() => setBtnColor184((btnColor184) => (btnColor184 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn184
