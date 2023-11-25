import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn391(){
	const[btnColor391, setBtnColor391] = useState(localStorage.getItem("savedBtnColor391"));
	useEffect(() => { localStorage.setItem("savedBtnColor391", btnColor391);}, [btnColor391]);
	return(
		<div>
		<button
			className = {btnColor391} 
			onClick = {() => setBtnColor391((btnColor391) => (btnColor391 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn391
