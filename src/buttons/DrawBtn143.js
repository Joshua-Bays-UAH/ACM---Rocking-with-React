import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn143(){
	const[btnColor143, setBtnColor143] = useState(localStorage.getItem("savedBtnColor143"));
	useEffect(() => { localStorage.setItem("savedBtnColor143", btnColor143);}, [btnColor143]);
	return(
		<div>
		<button
			className = {btnColor143} 
			onClick = {() => setBtnColor143((btnColor143) => (btnColor143 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn143
