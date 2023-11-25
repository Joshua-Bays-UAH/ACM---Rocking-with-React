import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn360(){
	const[btnColor360, setBtnColor360] = useState(localStorage.getItem("savedBtnColor360"));
	useEffect(() => { localStorage.setItem("savedBtnColor360", btnColor360);}, [btnColor360]);
	return(
		<div>
		<button
			className = {btnColor360} 
			onClick = {() => setBtnColor360((btnColor360) => (btnColor360 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn360
