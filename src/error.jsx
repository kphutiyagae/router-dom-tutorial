import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<div>
			<h1>Take it easy cowboy!</h1>
			<p>You seems an error has occured. Please try refreshing the page.</p>
		</div>
	);
}

export default ErrorPage;
