import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn043(){
	const[btnColor043, setBtnColor043] = useState(localStorage.getItem("savedBtnColor043"));
	useEffect(() => { localStorage.setItem("savedBtnColor043", btnColor043);}, [btnColor043]);
	return(
		<div>
		<button
			className = {btnColor043} 
			onClick = {() => setBtnColor043((btnColor043) => (btnColor043 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn043
