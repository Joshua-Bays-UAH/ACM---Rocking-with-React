import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn153(){
	const[btnColor153, setBtnColor153] = useState(localStorage.getItem("savedBtnColor153"));
	useEffect(() => { localStorage.setItem("savedBtnColor153", btnColor153);}, [btnColor153]);
	return(
		<div>
		<button
			className = {btnColor153} 
			onClick = {() => setBtnColor153((btnColor153) => (btnColor153 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn153
