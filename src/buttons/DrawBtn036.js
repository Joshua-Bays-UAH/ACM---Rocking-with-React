import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn036(){
	const[btnColor036, setBtnColor036] = useState(localStorage.getItem("savedBtnColor036"));
	useEffect(() => { localStorage.setItem("savedBtnColor036", btnColor036);}, [btnColor036]);
	return(
		<div>
		<button
			className = {btnColor036} 
			onClick = {() => setBtnColor036((btnColor036) => (btnColor036 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn036
