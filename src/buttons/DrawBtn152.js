import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn152(){
	const[btnColor152, setBtnColor152] = useState(localStorage.getItem("savedBtnColor152"));
	useEffect(() => { localStorage.setItem("savedBtnColor152", btnColor152);}, [btnColor152]);
	return(
		<div>
		<button
			className = {btnColor152} 
			onClick = {() => setBtnColor152((btnColor152) => (btnColor152 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn152
