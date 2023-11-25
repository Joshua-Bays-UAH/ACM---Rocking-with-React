import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn295(){
	const[btnColor295, setBtnColor295] = useState(localStorage.getItem("savedBtnColor295"));
	useEffect(() => { localStorage.setItem("savedBtnColor295", btnColor295);}, [btnColor295]);
	return(
		<div>
		<button
			className = {btnColor295} 
			onClick = {() => setBtnColor295((btnColor295) => (btnColor295 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn295
