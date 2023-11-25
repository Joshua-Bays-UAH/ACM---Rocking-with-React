import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn274(){
	const[btnColor274, setBtnColor274] = useState(localStorage.getItem("savedBtnColor274"));
	useEffect(() => { localStorage.setItem("savedBtnColor274", btnColor274);}, [btnColor274]);
	return(
		<div>
		<button
			className = {btnColor274} 
			onClick = {() => setBtnColor274((btnColor274) => (btnColor274 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn274
