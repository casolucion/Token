import React, { useState } from "react";

const Hooks = (props) => {
	const [count, setCount] = useState(10);

	return (
		<div>
			<p>{props.chain}</p>
			<h3>{props.subtittle}</h3>
			<p>Open the door Im ready {count}</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};

export default Hooks;
