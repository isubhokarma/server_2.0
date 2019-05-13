import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div className="container">
			<div className="mt-3 text-capitalize">
				<label htmlFor="name">{label}</label>
			</div>
			<div>
				<input className="form-control" id="name" {...input} />
			</div>
			<div className="mt-1 text-danger font-italic badge badge-pill badge-light text-wrap">
				{touched && error}
			</div>
		</div>
	);
};
