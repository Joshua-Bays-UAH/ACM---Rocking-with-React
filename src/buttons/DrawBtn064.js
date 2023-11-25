import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn064(){
	const[btnColor064, setBtnColor064] = useState(localStorage.getItem("savedBtnColor064"));
	useEffect(() => { localStorage.setItem("savedBtnColor064", btnColor064);}, [btnColor064]);
	return(
		<div>
		<button
			className = {btnColor064} 
			onClick = {() => setBtnColor064((btnColor064) => (btnColor064 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn064
