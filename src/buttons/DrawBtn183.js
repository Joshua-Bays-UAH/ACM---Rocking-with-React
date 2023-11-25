import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn183(){
	const[btnColor183, setBtnColor183] = useState(localStorage.getItem("savedBtnColor183"));
	useEffect(() => { localStorage.setItem("savedBtnColor183", btnColor183);}, [btnColor183]);
	return(
		<div>
		<button
			className = {btnColor183} 
			onClick = {() => setBtnColor183((btnColor183) => (btnColor183 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn183
