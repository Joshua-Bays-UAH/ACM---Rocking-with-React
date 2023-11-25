import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn044(){
	const[btnColor044, setBtnColor044] = useState(localStorage.getItem("savedBtnColor044"));
	useEffect(() => { localStorage.setItem("savedBtnColor044", btnColor044);}, [btnColor044]);
	return(
		<div>
		<button
			className = {btnColor044} 
			onClick = {() => setBtnColor044((btnColor044) => (btnColor044 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn044
