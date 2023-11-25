import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn385(){
	const[btnColor385, setBtnColor385] = useState(localStorage.getItem("savedBtnColor385"));
	useEffect(() => { localStorage.setItem("savedBtnColor385", btnColor385);}, [btnColor385]);
	return(
		<div>
		<button
			className = {btnColor385} 
			onClick = {() => setBtnColor385((btnColor385) => (btnColor385 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn385
