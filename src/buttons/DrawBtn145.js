import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn145(){
	const[btnColor145, setBtnColor145] = useState(localStorage.getItem("savedBtnColor145"));
	useEffect(() => { localStorage.setItem("savedBtnColor145", btnColor145);}, [btnColor145]);
	return(
		<div>
		<button
			className = {btnColor145} 
			onClick = {() => setBtnColor145((btnColor145) => (btnColor145 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn145
