import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn227(){
	const[btnColor227, setBtnColor227] = useState(localStorage.getItem("savedBtnColor227"));
	useEffect(() => { localStorage.setItem("savedBtnColor227", btnColor227);}, [btnColor227]);
	return(
		<div>
		<button
			className = {btnColor227} 
			onClick = {() => setBtnColor227((btnColor227) => (btnColor227 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn227
