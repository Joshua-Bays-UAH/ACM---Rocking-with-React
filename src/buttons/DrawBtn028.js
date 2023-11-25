import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn028(){
	const[btnColor028, setBtnColor028] = useState(localStorage.getItem("savedBtnColor028"));
	useEffect(() => { localStorage.setItem("savedBtnColor028", btnColor028);}, [btnColor028]);
	return(
		<div>
		<button
			className = {btnColor028} 
			onClick = {() => setBtnColor028((btnColor028) => (btnColor028 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn028
