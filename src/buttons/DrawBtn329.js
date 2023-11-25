import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn329(){
	const[btnColor329, setBtnColor329] = useState(localStorage.getItem("savedBtnColor329"));
	useEffect(() => { localStorage.setItem("savedBtnColor329", btnColor329);}, [btnColor329]);
	return(
		<div>
		<button
			className = {btnColor329} 
			onClick = {() => setBtnColor329((btnColor329) => (btnColor329 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn329
