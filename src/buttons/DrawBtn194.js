import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn194(){
	const[btnColor194, setBtnColor194] = useState(localStorage.getItem("savedBtnColor194"));
	useEffect(() => { localStorage.setItem("savedBtnColor194", btnColor194);}, [btnColor194]);
	return(
		<div>
		<button
			className = {btnColor194} 
			onClick = {() => setBtnColor194((btnColor194) => (btnColor194 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn194
