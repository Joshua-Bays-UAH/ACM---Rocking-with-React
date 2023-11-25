import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn019(){
	const[btnColor019, setBtnColor019] = useState(localStorage.getItem("savedBtnColor019"));
	useEffect(() => { localStorage.setItem("savedBtnColor019", btnColor019);}, [btnColor019]);
	return(
		<div>
		<button
			className = {btnColor019} 
			onClick = {() => setBtnColor019((btnColor019) => (btnColor019 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn019
