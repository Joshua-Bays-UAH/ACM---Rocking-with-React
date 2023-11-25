import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn112(){
	const[btnColor112, setBtnColor112] = useState(localStorage.getItem("savedBtnColor112"));
	useEffect(() => { localStorage.setItem("savedBtnColor112", btnColor112);}, [btnColor112]);
	return(
		<div>
		<button
			className = {btnColor112} 
			onClick = {() => setBtnColor112((btnColor112) => (btnColor112 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn112
