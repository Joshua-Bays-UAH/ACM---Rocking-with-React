import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn244(){
	const[btnColor244, setBtnColor244] = useState(localStorage.getItem("savedBtnColor244"));
	useEffect(() => { localStorage.setItem("savedBtnColor244", btnColor244);}, [btnColor244]);
	return(
		<div>
		<button
			className = {btnColor244} 
			onClick = {() => setBtnColor244((btnColor244) => (btnColor244 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn244
