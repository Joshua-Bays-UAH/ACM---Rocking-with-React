import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn351(){
	const[btnColor351, setBtnColor351] = useState(localStorage.getItem("savedBtnColor351"));
	useEffect(() => { localStorage.setItem("savedBtnColor351", btnColor351);}, [btnColor351]);
	return(
		<div>
		<button
			className = {btnColor351} 
			onClick = {() => setBtnColor351((btnColor351) => (btnColor351 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn351
