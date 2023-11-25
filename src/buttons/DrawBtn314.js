import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn314(){
	const[btnColor314, setBtnColor314] = useState(localStorage.getItem("savedBtnColor314"));
	useEffect(() => { localStorage.setItem("savedBtnColor314", btnColor314);}, [btnColor314]);
	return(
		<div>
		<button
			className = {btnColor314} 
			onClick = {() => setBtnColor314((btnColor314) => (btnColor314 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn314
