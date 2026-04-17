import { NavLink } from 'react-router-dom';

export default function Sidebar ({ items}) {
	return (
		<aside style={{ 
			width: 220, 
			background:'#f4f4f8', 
			padding: '16px', 
			display:'flex', 
			flexDirection: 'column', 
			gap: 8}}
		>
			{items.map((item) => (
				<NavLink 
					key={item.to} 
					to={item.to} 
					style={({ isActive}) => ({
						padding: '8px 12px',
						borderRadius: 6,
						textDecoration: 'none',
						color: isActive ? '#fff' : '#333',
						background: isActive ? '#5c5ff3' : 'transparent',
						fontWeight: isActive ? 600 : 400,
					})}
				>
					{item.label}					
				</NavLink>
			))}
		</aside>
	);
}