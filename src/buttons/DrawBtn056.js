import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn056(){
	const[btnColor056, setBtnColor056] = useState(localStorage.getItem("savedBtnColor056"));
	useEffect(() => { localStorage.setItem("savedBtnColor056", btnColor056);}, [btnColor056]);
	return(
		<div>
		<button
			className = {btnColor056} 
			onClick = {() => setBtnColor056((btnColor056) => (btnColor056 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn056
