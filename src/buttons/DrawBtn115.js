import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn115(){
	const[btnColor115, setBtnColor115] = useState(localStorage.getItem("savedBtnColor115"));
	useEffect(() => { localStorage.setItem("savedBtnColor115", btnColor115);}, [btnColor115]);
	return(
		<div>
		<button
			className = {btnColor115} 
			onClick = {() => setBtnColor115((btnColor115) => (btnColor115 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn115
