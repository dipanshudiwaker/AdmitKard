import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./Navbar";
const New = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Add
		</NavLink>
		<NavLink to="/Search" activeStyle>
			Search
		</NavLink>
		
		</NavMenu>
	</Nav>
	</>
);
};

export default New;
