import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn150(){
	const[btnColor150, setBtnColor150] = useState(localStorage.getItem("savedBtnColor150"));
	useEffect(() => { localStorage.setItem("savedBtnColor150", btnColor150);}, [btnColor150]);
	return(
		<div>
		<button
			className = {btnColor150} 
			onClick = {() => setBtnColor150((btnColor150) => (btnColor150 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn150
