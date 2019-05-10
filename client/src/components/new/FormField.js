import React from "react";

export default ({ input, label }) => {
	return (
		<div className="form-row">
			<label htmlFor="name">{label}</label>
			<input className="form-control" id="name" {...input} />
		</div>
	);
};
