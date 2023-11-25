import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn103(){
	const[btnColor103, setBtnColor103] = useState(localStorage.getItem("savedBtnColor103"));
	useEffect(() => { localStorage.setItem("savedBtnColor103", btnColor103);}, [btnColor103]);
	return(
		<div>
		<button
			className = {btnColor103} 
			onClick = {() => setBtnColor103((btnColor103) => (btnColor103 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn103
