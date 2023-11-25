import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn008(){
	const[btnColor008, setBtnColor008] = useState(localStorage.getItem("savedBtnColor008"));
	useEffect(() => { localStorage.setItem("savedBtnColor008", btnColor008);}, [btnColor008]);
	return(
		<div>
		<button
			className = {btnColor008} 
			onClick = {() => setBtnColor008((btnColor008) => (btnColor008 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn008
