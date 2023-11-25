import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn114(){
	const[btnColor114, setBtnColor114] = useState(localStorage.getItem("savedBtnColor114"));
	useEffect(() => { localStorage.setItem("savedBtnColor114", btnColor114);}, [btnColor114]);
	return(
		<div>
		<button
			className = {btnColor114} 
			onClick = {() => setBtnColor114((btnColor114) => (btnColor114 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn114
