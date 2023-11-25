import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn161(){
	const[btnColor161, setBtnColor161] = useState(localStorage.getItem("savedBtnColor161"));
	useEffect(() => { localStorage.setItem("savedBtnColor161", btnColor161);}, [btnColor161]);
	return(
		<div>
		<button
			className = {btnColor161} 
			onClick = {() => setBtnColor161((btnColor161) => (btnColor161 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn161
