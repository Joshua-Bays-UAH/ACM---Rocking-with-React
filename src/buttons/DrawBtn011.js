import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn011(){
	const[btnColor011, setBtnColor011] = useState(localStorage.getItem("savedBtnColor011"));
	useEffect(() => { localStorage.setItem("savedBtnColor011", btnColor011);}, [btnColor011]);
	return(
		<div>
		<button
			className = {btnColor011} 
			onClick = {() => setBtnColor011((btnColor011) => (btnColor011 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn011
