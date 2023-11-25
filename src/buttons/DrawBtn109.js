import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn109(){
	const[btnColor109, setBtnColor109] = useState(localStorage.getItem("savedBtnColor109"));
	useEffect(() => { localStorage.setItem("savedBtnColor109", btnColor109);}, [btnColor109]);
	return(
		<div>
		<button
			className = {btnColor109} 
			onClick = {() => setBtnColor109((btnColor109) => (btnColor109 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn109
