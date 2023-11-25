import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn380(){
	const[btnColor380, setBtnColor380] = useState(localStorage.getItem("savedBtnColor380"));
	useEffect(() => { localStorage.setItem("savedBtnColor380", btnColor380);}, [btnColor380]);
	return(
		<div>
		<button
			className = {btnColor380} 
			onClick = {() => setBtnColor380((btnColor380) => (btnColor380 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn380
