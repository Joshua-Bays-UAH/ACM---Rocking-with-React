import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn204(){
	const[btnColor204, setBtnColor204] = useState(localStorage.getItem("savedBtnColor204"));
	useEffect(() => { localStorage.setItem("savedBtnColor204", btnColor204);}, [btnColor204]);
	return(
		<div>
		<button
			className = {btnColor204} 
			onClick = {() => setBtnColor204((btnColor204) => (btnColor204 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn204
