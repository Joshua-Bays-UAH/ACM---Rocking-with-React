import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn205(){
	const[btnColor205, setBtnColor205] = useState(localStorage.getItem("savedBtnColor205"));
	useEffect(() => { localStorage.setItem("savedBtnColor205", btnColor205);}, [btnColor205]);
	return(
		<div>
		<button
			className = {btnColor205} 
			onClick = {() => setBtnColor205((btnColor205) => (btnColor205 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn205
