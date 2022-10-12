/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import axios from "axios";
import "./navbar.css";

function NavBar() {
	const login = localStorage.getItem("isLoggedIn");
	const id = localStorage.getItem("id");

	console.log("id", id);

	const logout = async () => {
		console.log("logout");
		localStorage.clear();
		console.log("logout");
		window.location.reload();
		await axios
			.post("api/login/logout", {
				headers: {
					authentication: localStorage.getItem("authentication"),
				},
			})
			.then((res) => {
				localStorage.clear();
			});
	};

	return (
		<div className="bg-main-blue">
			<nav>
				<a class="active" href="/">
					Home
				</a>
				<a href="/about">About</a>
				<a href="#">Contact Us</a>
				<a href="#">Services</a>
				{login ? (
					<a href="/login" onClick={logout}>
						Logout
					</a>
				) : (
					<a href="/patient/register">Register</a>
				)}

				{login ? (
					<a href="/">Profile</a>
				) : (
					<a href="/login" id="login">
						Login
					</a>
				)}

				<a href="/" class="LogoName">
					Care For You Laboratories
				</a>
				<div class="animation start-home"></div>
			</nav>
		</div>
	);
}

export default NavBar;
