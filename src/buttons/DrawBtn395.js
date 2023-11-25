import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn395(){
	const[btnColor395, setBtnColor395] = useState(localStorage.getItem("savedBtnColor395"));
	useEffect(() => { localStorage.setItem("savedBtnColor395", btnColor395);}, [btnColor395]);
	return(
		<div>
		<button
			className = {btnColor395} 
			onClick = {() => setBtnColor395((btnColor395) => (btnColor395 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn395
