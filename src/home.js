import * as React from 'react';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';
import devBoy from './Assets/dev-boy.png';
import { cards } from './Constants/home';
import { useNavigate } from "react-router-dom";
import NavBar from './Components/NavBar';
import { useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: green[900],
        },
        secondary: {
            main: brown[500],
        },
    },
});

export default function Home() {
    const navigate = useNavigate();
    const projectRef = useRef(null);

    const navigateToProfile = () => {
        const element = projectRef.current;
        if (element) {
            element.scrollIntoView({
                behaviour: 'smooth'
            });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <main style={{ paddingBottom: 30 }}>
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                    alignSelf={"flex-end"}
                >

                    <Box px={{ xs: 2, md: 10 }} marginY={5} display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }} justifyContent="space-between">
                        <Box marginBottom={{ xs: 4, md: 0 }}>
                            <img src={devBoy} alt="homeImg" width={300} />
                        </Box>
                        <Box>
                            <Typography component="h1" variant="h2" textAlign={{ xs: 'center', md: 'right' }} color="text.primary" gutterBottom>
                                Pruthvi
                            </Typography>
                            <Typography variant="h3" textAlign={{ xs: 'center', md: 'right' }} color={green[900]}>
                                Software Developer | UI UX Designer
                            </Typography>
                            <Typography variant="h5" textAlign={{ xs: 'center', md: 'right' }} color="text.secondary" paragraph>
                                Welcome to my portfolio! I use this platform to showcase my work in development and UI/UX design.
                            </Typography>
                        </Box>
                    </Box>


                    <IconButton
                        // className={classes.bouncingArrow}
                        sx={{ mt: 2 }}
                        onClick={navigateToProfile}
                    >
                        <KeyboardArrowDownIcon />
                    </IconButton>

                </Box>
                <Stack
                    sx={{ pt: 6 }}
                    direction={"row"}
                    spacing={2}
                    justifyContent={"center"}
                    onClick={() => {
                        const element = projectRef.current;
                        if (element) {
                            element.scrollIntoView({
                                behaviour: 'smooth'
                            });
                        }
                    }}
                >
                    <Button variant="outlined" size='small'>
                        <Typography variant="h6">
                            Projects
                        </Typography>
                    </Button>


                </Stack>
                <Container sx={{ py: 8 }} maxWidth="md" >
                    <Grid container spacing={8} ref={projectRef}>
                        {cards.map((card) => (
                            <Grid item key={card?.key} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    // className={classes.cards}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            pt: '56.25%',
                                            height: 50
                                        }}
                                        image={card?.image}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card?.name}
                                        </Typography>

                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "space-evenly" }}>
                                        <Button size="small" onClick={() => navigate('/profile', {
                                            state: {
                                                data: card
                                            }
                                        })}>View</Button>
                                        <Button
                                            size="small"
                                            target='_blank'
                                            href={card?.github}
                                        >
                                            Link {<LaunchIcon />}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}