import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn234(){
	const[btnColor234, setBtnColor234] = useState(localStorage.getItem("savedBtnColor234"));
	useEffect(() => { localStorage.setItem("savedBtnColor234", btnColor234);}, [btnColor234]);
	return(
		<div>
		<button
			className = {btnColor234} 
			onClick = {() => setBtnColor234((btnColor234) => (btnColor234 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn234
