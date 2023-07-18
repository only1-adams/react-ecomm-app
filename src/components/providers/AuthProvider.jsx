import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

const initialState = {
	isLoggedIn: false,
	accesToken: null,
};

const reducer = (state, action) => {
	if (action.type === "userLoggedIn") {
		return { ...state, accesToken: action.token, isLoggedIn: true };
	}
};

export default function AuthProvider(props) {
	const [authStatus, dispatch] = useReducer(reducer, initialState);
	return (
		<AuthContext.Provider value={{ authStatus, dispatch }}>
			{props.children}
		</AuthContext.Provider>
	);
}
