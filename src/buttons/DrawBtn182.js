import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn182(){
	const[btnColor182, setBtnColor182] = useState(localStorage.getItem("savedBtnColor182"));
	useEffect(() => { localStorage.setItem("savedBtnColor182", btnColor182);}, [btnColor182]);
	return(
		<div>
		<button
			className = {btnColor182} 
			onClick = {() => setBtnColor182((btnColor182) => (btnColor182 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn182
