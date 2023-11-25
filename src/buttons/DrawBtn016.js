import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn016(){
	const[btnColor016, setBtnColor016] = useState(localStorage.getItem("savedBtnColor016"));
	useEffect(() => { localStorage.setItem("savedBtnColor016", btnColor016);}, [btnColor016]);
	return(
		<div>
		<button
			className = {btnColor016} 
			onClick = {() => setBtnColor016((btnColor016) => (btnColor016 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn016
