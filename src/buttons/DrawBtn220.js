import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn220(){
	const[btnColor220, setBtnColor220] = useState(localStorage.getItem("savedBtnColor220"));
	useEffect(() => { localStorage.setItem("savedBtnColor220", btnColor220);}, [btnColor220]);
	return(
		<div>
		<button
			className = {btnColor220} 
			onClick = {() => setBtnColor220((btnColor220) => (btnColor220 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn220
