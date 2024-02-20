import React, { useState } from "react";


//create your first component
const Home = () => {
	const [task, setTask] = useState('');
	const [tasksList, setTasksList] = useState([]);

	const handleTask = (e) => {
		if (e.key == "Enter") {
			setTasksList([...tasksList,
			{
				label: task,
				done: false,

			}])
		}

		setTask(e.target.value);
	}

	return (<>
		<h1 className="d-flex justify-content-center my-4">To do List {task}</h1>

		<div className="caja" style={{ width: "55%", margin: "auto" }}>

			<div className="" >
				<input className="border border-0 caja  py-3 px-3 " type="text" placeholder="Task"
					onKeyUp={(evt) => handleTask(evt)} />
			</div>

			{tasksList.map((item, index) => {
				return <div className="caja" key={index}>
					<div className="margen" >
						<p className="px-4 py-3 m-0 ">{item.label}</p>
					</div>
				</div>
			})}
			<div className="border-top px-4 py-3 m-0">
				<span className="">Item left</span>
			</div>
		</div>
	</>

	)
};

export default Home;
