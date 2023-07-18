import { useState } from "react";

export default function AuthDropdown() {
	const [isShowing, setIsShowing] = useState(false);

	function toggleDropdown() {
		setIsShowing(!isShowing);
	}

	return (
		<li className="nav-item dropdown position-relative">
			<span onClick={toggleDropdown} className="nav-link dropdown-toggle">
				<img src="/img/avatar.png" style={{ height: "30px" }} alt="" />
				<span>Hi! Tomiwa</span>
			</span>
			{isShowing && <DropdownContent />}
		</li>
	);
}

function DropdownContent() {
	return (
		<ul
			className="position-absolute bg-light rounded shadow py-5"
			style={{
				top: "100%",
				zIndex: 99999,
				width: "200px",
			}}>
			<li className="list-unstyled">
				<a href="/profile.html">Profile</a>
			</li>
			<li className="list-unstyled">
				<a href="#">Logout</a>
			</li>
		</ul>
	);
}
