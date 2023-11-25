import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn304(){
	const[btnColor304, setBtnColor304] = useState(localStorage.getItem("savedBtnColor304"));
	useEffect(() => { localStorage.setItem("savedBtnColor304", btnColor304);}, [btnColor304]);
	return(
		<div>
		<button
			className = {btnColor304} 
			onClick = {() => setBtnColor304((btnColor304) => (btnColor304 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn304
