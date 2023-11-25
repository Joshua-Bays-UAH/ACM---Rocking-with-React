import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn369(){
	const[btnColor369, setBtnColor369] = useState(localStorage.getItem("savedBtnColor369"));
	useEffect(() => { localStorage.setItem("savedBtnColor369", btnColor369);}, [btnColor369]);
	return(
		<div>
		<button
			className = {btnColor369} 
			onClick = {() => setBtnColor369((btnColor369) => (btnColor369 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn369
