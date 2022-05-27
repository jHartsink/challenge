import React, { useContext } from 'react';
import { NavContext } from '../../Context/NavContext';

const NavigationLink = ({ navLinkId, scrollToId , className }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
console.log(NavigationLink)

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? className : ''}
			onClick={handleClick}
			
		>
			{navLinkId}
		</span>
	);
};

export default NavigationLink;