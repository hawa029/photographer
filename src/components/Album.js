import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function Album() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: 'background.paper',
						pt: 8,
						pb: 6,
					}}>
					<Container maxWidth='sm'>
						<Typography
							component='h1'
							variant='h2'
							align='center'
							color='text.primary'
							gutterBottom>
							Gallerie de photos
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='text.secondary'
							paragraph>
							Something short and leading about the collection below—its
							contents, the creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it entirely.
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction='row'
							spacing={2}
							justifyContent='center'>
							<Button variant='outlined'>Secondary action</Button>
						</Stack>
					</Container>
				</Box>
				<Container sx={{ py: 5 }} maxWidth='lg'>
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: '100%',
										display: 'flex',
										flexDirection: 'column',
									}}>
									<CardMedia
										component='img'
										image='https://source.unsplash.com/random'
										alt='random'
									/>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}
