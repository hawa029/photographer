import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Copyright from '../components/Copyright';
import Blog from '../components/Blog';
import FeaturedPost from '../components/FeaturedPost';
import DisplayImages from '../components/displayImages';

const mainFeaturedPost = {
	title: 'Charles CANTIN - Photographe',

	image: 'https://source.unsplash.com/random',
};
const featuredPosts = [
	{
		title: '',

		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
	},
	{
		title: 'Post title',

		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
	},
];

export default function Index() {
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<ResponsiveAppBar />
			<Blog post={mainFeaturedPost} />
			<Container>
				<Stack
					sx={{ pt: 4 }}
					direction='row'
					spacing={2}
					justifyContent='center'>
					<Typography
						variant='h5'
						align='center'
						color='text.secondary'
						component='p'
						sx={{ my: 4, mx: 1.5 }}>
						Je vous propose les prestations suivantes. Les thématiques
						ci-dessous ne sont pas exhaustives. Pour plus de renseignements,
						n'hésitez pas à me contacter. Nous verrons ensemble votre projet.
						<div>
							<Button variant='outlined' sx={{ my: 4, mx: 1.5 }}>
								Parcourir le site
							</Button>
						</div>
					</Typography>
				</Stack>
				<DisplayImages />
				<Grid container spacing={4}>
					{featuredPosts.map((post) => (
						<FeaturedPost key={post.title} post={post} />
					))}
				</Grid>
			</Container>

			<Copyright />
		</React.Fragment>
	);
}
