import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn027(){
	const[btnColor027, setBtnColor027] = useState(localStorage.getItem("savedBtnColor027"));
	useEffect(() => { localStorage.setItem("savedBtnColor027", btnColor027);}, [btnColor027]);
	return(
		<div>
		<button
			className = {btnColor027} 
			onClick = {() => setBtnColor027((btnColor027) => (btnColor027 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn027
