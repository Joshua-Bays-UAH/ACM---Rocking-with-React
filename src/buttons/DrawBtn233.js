import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn233(){
	const[btnColor233, setBtnColor233] = useState(localStorage.getItem("savedBtnColor233"));
	useEffect(() => { localStorage.setItem("savedBtnColor233", btnColor233);}, [btnColor233]);
	return(
		<div>
		<button
			className = {btnColor233} 
			onClick = {() => setBtnColor233((btnColor233) => (btnColor233 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn233
