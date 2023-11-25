import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn281(){
	const[btnColor281, setBtnColor281] = useState(localStorage.getItem("savedBtnColor281"));
	useEffect(() => { localStorage.setItem("savedBtnColor281", btnColor281);}, [btnColor281]);
	return(
		<div>
		<button
			className = {btnColor281} 
			onClick = {() => setBtnColor281((btnColor281) => (btnColor281 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn281
