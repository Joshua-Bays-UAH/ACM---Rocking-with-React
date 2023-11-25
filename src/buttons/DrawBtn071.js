import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn071(){
	const[btnColor071, setBtnColor071] = useState(localStorage.getItem("savedBtnColor071"));
	useEffect(() => { localStorage.setItem("savedBtnColor071", btnColor071);}, [btnColor071]);
	return(
		<div>
		<button
			className = {btnColor071} 
			onClick = {() => setBtnColor071((btnColor071) => (btnColor071 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn071
