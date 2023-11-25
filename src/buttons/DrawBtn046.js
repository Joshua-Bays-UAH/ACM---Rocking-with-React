import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn046(){
	const[btnColor046, setBtnColor046] = useState(localStorage.getItem("savedBtnColor046"));
	useEffect(() => { localStorage.setItem("savedBtnColor046", btnColor046);}, [btnColor046]);
	return(
		<div>
		<button
			className = {btnColor046} 
			onClick = {() => setBtnColor046((btnColor046) => (btnColor046 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn046
