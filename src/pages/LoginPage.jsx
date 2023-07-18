import { useState, useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import localStorageHelper from "../helpers/localstorage";

export default function LoginPage() {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);
	const [loginDetails, setLoginDetails] = useState({
		username: "",
		password: "",
	});

	function setDetail(value, property) {
		if (property === "username") {
			setLoginDetails((prevState) => ({ ...prevState, username: value }));
		} else {
			setLoginDetails((prevState) => ({ ...prevState, password: value }));
		}
	}

	async function logUserIn() {
		const response = await fetch("http://127.0.0.1:8000/auth/jwt/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginDetails),
		});
		const data = await response.json();
		dispatch({ type: "userLoggedIn", token: data.access });
		localStorageHelper.saveToLocalStorage("token", data.access);
		navigate("/");
	}

	return (
		<>
			<div className="container-fluid">
				<div className="row banner">
					<div className="col-12">
						<p>
							<a href="/index.html">Home </a>
							<span>/ Log in</span>
						</p>
					</div>
				</div>
			</div>
			<div className="container mt-5 mb-5">
				<h1 className="title">Login Here</h1>
				<div className="row mt-5">
					<div className="col-12 fsign">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								logUserIn();
							}}>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label">
									Username
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									onInput={(event) => setDetail(event.target.value, "username")}
									placeholder=""
								/>
							</div>
							<div className="mb-3 pass">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control input"
									id="exampleFormControlInput1"
									onInput={(event) => setDetail(event.target.value, "password")}
									placeholder=""
								/>
								<div className="see">
									<i className="bi bi-eye"></i>
									<i className="bi bi-eye-slash"></i>
								</div>
							</div>
							<div className="mb-3">
								<button className="btn">Login</button>
							</div>
							<p>
								{"Don't have an account"}
								<span>
									<a href="/signup.html">Register here</a>
								</span>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
