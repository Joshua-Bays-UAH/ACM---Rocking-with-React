import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn195(){
	const[btnColor195, setBtnColor195] = useState(localStorage.getItem("savedBtnColor195"));
	useEffect(() => { localStorage.setItem("savedBtnColor195", btnColor195);}, [btnColor195]);
	return(
		<div>
		<button
			className = {btnColor195} 
			onClick = {() => setBtnColor195((btnColor195) => (btnColor195 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn195
