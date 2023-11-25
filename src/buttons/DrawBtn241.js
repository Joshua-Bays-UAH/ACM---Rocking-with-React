import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn241(){
	const[btnColor241, setBtnColor241] = useState(localStorage.getItem("savedBtnColor241"));
	useEffect(() => { localStorage.setItem("savedBtnColor241", btnColor241);}, [btnColor241]);
	return(
		<div>
		<button
			className = {btnColor241} 
			onClick = {() => setBtnColor241((btnColor241) => (btnColor241 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn241
