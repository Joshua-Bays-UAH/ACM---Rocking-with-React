import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn324(){
	const[btnColor324, setBtnColor324] = useState(localStorage.getItem("savedBtnColor324"));
	useEffect(() => { localStorage.setItem("savedBtnColor324", btnColor324);}, [btnColor324]);
	return(
		<div>
		<button
			className = {btnColor324} 
			onClick = {() => setBtnColor324((btnColor324) => (btnColor324 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn324
