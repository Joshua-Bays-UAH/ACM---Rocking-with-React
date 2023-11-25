import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn034(){
	const[btnColor034, setBtnColor034] = useState(localStorage.getItem("savedBtnColor034"));
	useEffect(() => { localStorage.setItem("savedBtnColor034", btnColor034);}, [btnColor034]);
	return(
		<div>
		<button
			className = {btnColor034} 
			onClick = {() => setBtnColor034((btnColor034) => (btnColor034 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn034
