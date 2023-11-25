import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn192(){
	const[btnColor192, setBtnColor192] = useState(localStorage.getItem("savedBtnColor192"));
	useEffect(() => { localStorage.setItem("savedBtnColor192", btnColor192);}, [btnColor192]);
	return(
		<div>
		<button
			className = {btnColor192} 
			onClick = {() => setBtnColor192((btnColor192) => (btnColor192 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn192
