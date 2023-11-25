import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn242(){
	const[btnColor242, setBtnColor242] = useState(localStorage.getItem("savedBtnColor242"));
	useEffect(() => { localStorage.setItem("savedBtnColor242", btnColor242);}, [btnColor242]);
	return(
		<div>
		<button
			className = {btnColor242} 
			onClick = {() => setBtnColor242((btnColor242) => (btnColor242 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn242
