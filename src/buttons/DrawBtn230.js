import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn230(){
	const[btnColor230, setBtnColor230] = useState(localStorage.getItem("savedBtnColor230"));
	useEffect(() => { localStorage.setItem("savedBtnColor230", btnColor230);}, [btnColor230]);
	return(
		<div>
		<button
			className = {btnColor230} 
			onClick = {() => setBtnColor230((btnColor230) => (btnColor230 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn230
