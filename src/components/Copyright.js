import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '../components/Link';
import blueGrey from '@mui/material/colors';
import YoutubeIcon from '@mui/icons-material/Youtube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const social = [
	{ icon: YoutubeIcon },
	{ icon: TwitterIcon },
	{ icon: FacebookIcon },
];

export default function Copyright() {
	return (
		<Container>
			<Typography
				variant='body2'
				color='text.secondary'
				align='center'
				sx={{ mt: 4 }}>
				{'Copyright © '}
				<div color='inherit'>Charles Cantin - photographe</div>{' '}
				{new Date().getFullYear()}
				{'.'}
				<Typography />
				<Typography
					sx={{ mt: 2 }}
					direction='row'
					justifyContent='center'
					variant='body2'
					color='text.secondary'
				/>
				{social.map((network) => (
					<Link>
						<network.icon sx={{ mr: 1 }} color='secondary' />
					</Link>
				))}
			</Typography>
		</Container>
	);
}
