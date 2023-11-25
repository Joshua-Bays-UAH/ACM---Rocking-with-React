import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn334(){
	const[btnColor334, setBtnColor334] = useState(localStorage.getItem("savedBtnColor334"));
	useEffect(() => { localStorage.setItem("savedBtnColor334", btnColor334);}, [btnColor334]);
	return(
		<div>
		<button
			className = {btnColor334} 
			onClick = {() => setBtnColor334((btnColor334) => (btnColor334 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn334
