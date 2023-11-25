import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn177(){
	const[btnColor177, setBtnColor177] = useState(localStorage.getItem("savedBtnColor177"));
	useEffect(() => { localStorage.setItem("savedBtnColor177", btnColor177);}, [btnColor177]);
	return(
		<div>
		<button
			className = {btnColor177} 
			onClick = {() => setBtnColor177((btnColor177) => (btnColor177 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn177
