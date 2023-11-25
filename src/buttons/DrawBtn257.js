import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn257(){
	const[btnColor257, setBtnColor257] = useState(localStorage.getItem("savedBtnColor257"));
	useEffect(() => { localStorage.setItem("savedBtnColor257", btnColor257);}, [btnColor257]);
	return(
		<div>
		<button
			className = {btnColor257} 
			onClick = {() => setBtnColor257((btnColor257) => (btnColor257 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn257
