import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn207(){
	const[btnColor207, setBtnColor207] = useState(localStorage.getItem("savedBtnColor207"));
	useEffect(() => { localStorage.setItem("savedBtnColor207", btnColor207);}, [btnColor207]);
	return(
		<div>
		<button
			className = {btnColor207} 
			onClick = {() => setBtnColor207((btnColor207) => (btnColor207 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn207
