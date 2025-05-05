import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Todolist = () => {
	const [lista, setLista] = useState(["aprender React", "aprender js", "cry"])
	const [tarea,setTarea] = useState("")

	function agregarTarea(e){
		//console.log(e.key)
		if(e.key=="Enter"){
			setLista([...lista,tarea])
			setTarea("")
		}
	}

	function eliminar(id){
		let aux = lista.filter((tarea,index)=>{
			if(index != id){
				return tarea
			}
		})
		setLista(aux)
	}

	return (
		<div className="container mt-5" style={{ maxWidth: '500px' }}>
			<div className="card shadow p-4">
				<h1 className="text-danger-emphasis mt-5 text-center" style={{ "--bs-text-opacity": 0.5 }}>Todos</h1>
				<input
					type="text"
					className="form-control mt-3"
					placeholder="Enter a task"
					value={tarea}
					onChange={(e)=> setTarea(e.target.value)}
					onKeyDown={(e)=>agregarTarea(e)}
				/>
			</div>
			<div className="list-group mt-3" >
				{lista.map((tarea, id) => (
					<a href="#"  key={id} className="list-group-item list-group-item-action " aria-current="true">
						{tarea}
						<button className="btn btn-danger float-end" onClick={()=> eliminar(id)}>Borrar</button>
					</a>
				))}


			</div>
		</div>
	);
};

export default Todolist;