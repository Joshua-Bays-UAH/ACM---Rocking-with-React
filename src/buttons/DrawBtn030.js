import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn030(){
	const[btnColor030, setBtnColor030] = useState(localStorage.getItem("savedBtnColor030"));
	useEffect(() => { localStorage.setItem("savedBtnColor030", btnColor030);}, [btnColor030]);
	return(
		<div>
		<button
			className = {btnColor030} 
			onClick = {() => setBtnColor030((btnColor030) => (btnColor030 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn030
