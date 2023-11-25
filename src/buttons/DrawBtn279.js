import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn279(){
	const[btnColor279, setBtnColor279] = useState(localStorage.getItem("savedBtnColor279"));
	useEffect(() => { localStorage.setItem("savedBtnColor279", btnColor279);}, [btnColor279]);
	return(
		<div>
		<button
			className = {btnColor279} 
			onClick = {() => setBtnColor279((btnColor279) => (btnColor279 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn279
