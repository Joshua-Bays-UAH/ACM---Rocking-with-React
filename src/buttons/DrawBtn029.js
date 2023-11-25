import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn029(){
	const[btnColor029, setBtnColor029] = useState(localStorage.getItem("savedBtnColor029"));
	useEffect(() => { localStorage.setItem("savedBtnColor029", btnColor029);}, [btnColor029]);
	return(
		<div>
		<button
			className = {btnColor029} 
			onClick = {() => setBtnColor029((btnColor029) => (btnColor029 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn029
