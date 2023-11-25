import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn006(){
	const[btnColor006, setBtnColor006] = useState(localStorage.getItem("savedBtnColor006"));
	useEffect(() => { localStorage.setItem("savedBtnColor006", btnColor006);}, [btnColor006]);
	return(
		<div>
		<button
			className = {btnColor006} 
			onClick = {() => setBtnColor006((btnColor006) => (btnColor006 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn006
