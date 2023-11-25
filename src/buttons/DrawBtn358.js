import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn358(){
	const[btnColor358, setBtnColor358] = useState(localStorage.getItem("savedBtnColor358"));
	useEffect(() => { localStorage.setItem("savedBtnColor358", btnColor358);}, [btnColor358]);
	return(
		<div>
		<button
			className = {btnColor358} 
			onClick = {() => setBtnColor358((btnColor358) => (btnColor358 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn358
