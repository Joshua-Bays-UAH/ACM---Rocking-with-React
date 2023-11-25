import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn104(){
	const[btnColor104, setBtnColor104] = useState(localStorage.getItem("savedBtnColor104"));
	useEffect(() => { localStorage.setItem("savedBtnColor104", btnColor104);}, [btnColor104]);
	return(
		<div>
		<button
			className = {btnColor104} 
			onClick = {() => setBtnColor104((btnColor104) => (btnColor104 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn104
