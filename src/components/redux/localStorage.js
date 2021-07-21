export const LoadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return localStorage.setItem("state");
		}
		return JSON.parse(serializedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch (error) {
		console.log(error);
	}
};
