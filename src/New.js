import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./New.css"
import styled from "styled-components";

export const Nav = styled.div`
display: flex;
justify-content: center;
height: 3vmax;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
height: 100%;
cursor: pointer;
`;

export default function New() {
return (
	<Nav>
		<div className="Nav-Buttons">
			<div className="Button"><NavLink to="/" activeStyle>Add</NavLink></div>
			<div className="Button"><NavLink to="/Search" activeStyle>Search</NavLink></div>
		</div>
	</Nav>
);
}
