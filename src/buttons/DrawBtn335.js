import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn335(){
	const[btnColor335, setBtnColor335] = useState(localStorage.getItem("savedBtnColor335"));
	useEffect(() => { localStorage.setItem("savedBtnColor335", btnColor335);}, [btnColor335]);
	return(
		<div>
		<button
			className = {btnColor335} 
			onClick = {() => setBtnColor335((btnColor335) => (btnColor335 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn335
