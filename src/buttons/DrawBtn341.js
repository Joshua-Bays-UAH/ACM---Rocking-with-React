import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn341(){
	const[btnColor341, setBtnColor341] = useState(localStorage.getItem("savedBtnColor341"));
	useEffect(() => { localStorage.setItem("savedBtnColor341", btnColor341);}, [btnColor341]);
	return(
		<div>
		<button
			className = {btnColor341} 
			onClick = {() => setBtnColor341((btnColor341) => (btnColor341 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn341
