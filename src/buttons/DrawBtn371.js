import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn371(){
	const[btnColor371, setBtnColor371] = useState(localStorage.getItem("savedBtnColor371"));
	useEffect(() => { localStorage.setItem("savedBtnColor371", btnColor371);}, [btnColor371]);
	return(
		<div>
		<button
			className = {btnColor371} 
			onClick = {() => setBtnColor371((btnColor371) => (btnColor371 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn371
