import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn202(){
	const[btnColor202, setBtnColor202] = useState(localStorage.getItem("savedBtnColor202"));
	useEffect(() => { localStorage.setItem("savedBtnColor202", btnColor202);}, [btnColor202]);
	return(
		<div>
		<button
			className = {btnColor202} 
			onClick = {() => setBtnColor202((btnColor202) => (btnColor202 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn202
