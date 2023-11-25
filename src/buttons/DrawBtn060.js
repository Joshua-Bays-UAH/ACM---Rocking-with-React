import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn060(){
	const[btnColor060, setBtnColor060] = useState(localStorage.getItem("savedBtnColor060"));
	useEffect(() => { localStorage.setItem("savedBtnColor060", btnColor060);}, [btnColor060]);
	return(
		<div>
		<button
			className = {btnColor060} 
			onClick = {() => setBtnColor060((btnColor060) => (btnColor060 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn060
