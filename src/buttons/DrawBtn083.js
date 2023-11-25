import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn083(){
	const[btnColor083, setBtnColor083] = useState(localStorage.getItem("savedBtnColor083"));
	useEffect(() => { localStorage.setItem("savedBtnColor083", btnColor083);}, [btnColor083]);
	return(
		<div>
		<button
			className = {btnColor083} 
			onClick = {() => setBtnColor083((btnColor083) => (btnColor083 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn083
