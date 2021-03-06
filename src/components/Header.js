import makeStyles from '@mui/Styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';

const headersData = [
	{
		label: 'Accueil',
		href: '/',
	},
	{
		label: 'Galleries',
		href: '/galleries',
	},
	{
		label: 'Tarifs et prestations',
		href: '/tarifs',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: '#400CCC',
		paddingRight: '79px',
		paddingLeft: '118px',
		'@media (max-width: 900px)': {
			paddingLeft: 0,
		},
	},
	logo: {
		fontFamily: 'Work Sans, sans-serif',
		fontWeight: 600,
		color: '#FFFEFE',
		textAlign: 'left',
	},
	menuButton: {
		fontFamily: 'Open Sans, sans-serif',
		fontWeight: 700,
		size: '18px',
		marginLeft: '38px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	drawerContainer: {
		padding: '20px 30px',
	},
}));

export default function Header() {
	const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();

		window.addEventListener('resize', () => setResponsiveness());

		return () => {
			window.removeEventListener('resize', () => setResponsiveness());
		};
	}, []);

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{cantin}
				<div>{getMenuButtons()}</div>
			</Toolbar>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: 'start',
						color: 'inherit',
						'aria-label': 'menu',
						'aria-haspopup': 'true',
						onClick: handleDrawerOpen,
					}}>
					<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: 'left',
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>

				<div>{cantin}</div>
			</Toolbar>
		);
	};

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						component: Link,
						to: href,
						color: 'inherit',
						style: { textDecoration: 'none' },
						key: label,
					}}
					underline='hover'>
					<MenuItem>{label}</MenuItem>
				</Link>
			);
		});
	};

	const cantin = (
		<Typography variant='h6' component='h1' className={logo}>
			Charles Cantin - photographe
		</Typography>
	);

	const getMenuButtons = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						color: 'inherit',
						to: href,
						component: Link,
						className: menuButton,
					}}>
					{label}
				</Button>
			);
		});
	};

	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}
