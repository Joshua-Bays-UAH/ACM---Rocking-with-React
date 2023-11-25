import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn215(){
	const[btnColor215, setBtnColor215] = useState(localStorage.getItem("savedBtnColor215"));
	useEffect(() => { localStorage.setItem("savedBtnColor215", btnColor215);}, [btnColor215]);
	return(
		<div>
		<button
			className = {btnColor215} 
			onClick = {() => setBtnColor215((btnColor215) => (btnColor215 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn215
