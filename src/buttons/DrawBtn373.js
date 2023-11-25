import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn373(){
	const[btnColor373, setBtnColor373] = useState(localStorage.getItem("savedBtnColor373"));
	useEffect(() => { localStorage.setItem("savedBtnColor373", btnColor373);}, [btnColor373]);
	return(
		<div>
		<button
			className = {btnColor373} 
			onClick = {() => setBtnColor373((btnColor373) => (btnColor373 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn373
