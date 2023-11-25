import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn309(){
	const[btnColor309, setBtnColor309] = useState(localStorage.getItem("savedBtnColor309"));
	useEffect(() => { localStorage.setItem("savedBtnColor309", btnColor309);}, [btnColor309]);
	return(
		<div>
		<button
			className = {btnColor309} 
			onClick = {() => setBtnColor309((btnColor309) => (btnColor309 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn309
