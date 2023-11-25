import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn140(){
	const[btnColor140, setBtnColor140] = useState(localStorage.getItem("savedBtnColor140"));
	useEffect(() => { localStorage.setItem("savedBtnColor140", btnColor140);}, [btnColor140]);
	return(
		<div>
		<button
			className = {btnColor140} 
			onClick = {() => setBtnColor140((btnColor140) => (btnColor140 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn140
