import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn059(){
	const[btnColor059, setBtnColor059] = useState(localStorage.getItem("savedBtnColor059"));
	useEffect(() => { localStorage.setItem("savedBtnColor059", btnColor059);}, [btnColor059]);
	return(
		<div>
		<button
			className = {btnColor059} 
			onClick = {() => setBtnColor059((btnColor059) => (btnColor059 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn059
