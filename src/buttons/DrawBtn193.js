import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn193(){
	const[btnColor193, setBtnColor193] = useState(localStorage.getItem("savedBtnColor193"));
	useEffect(() => { localStorage.setItem("savedBtnColor193", btnColor193);}, [btnColor193]);
	return(
		<div>
		<button
			className = {btnColor193} 
			onClick = {() => setBtnColor193((btnColor193) => (btnColor193 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn193
