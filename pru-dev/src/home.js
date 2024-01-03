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
import {useNavigate} from "react-router-dom";
import NavBar from './Components/NavBar';

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
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <main style={{paddingBottom: 30}}>
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                    alignSelf={"flex-end"}
                >
                    <Box marginY={10}>
                        <Container style={{ display: 'flex' }}>
                            {/* <MyImageCard /> */}
                            <Box >
                                <img src={devBoy} alt="homeImg" width={300} />
                            </Box>
                            <Box>
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    align="right"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    Pruthvi
                                </Typography>
                                <Typography
                                    variant="h3"
                                    align="right"
                                    color={green[900]}>
                                    Frontend Developer
                                </Typography>
                                <Typography variant="h5" align="right" color="text.secondary" paragraph>
                                    Welcome to my portfolio! I use this platform to showcase my work in development and UI/UX design.
                                </Typography>
                            </Box>

                        </Container>
                    </Box>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Projects</Button>
                    </Stack>

                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card?.key} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                                    
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                            height: 50
                                        }}
                                        image={card?.image}
                                    />
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card?.name}
                                        </Typography>
                                        
                                    </CardContent>
                                    <CardActions sx={{justifyContent: "space-evenly"}}>
                                        <Button size="small" onClick={() => navigate('/profile', {
                                            state: {
                                                data: card
                                            }
                                        })}>View</Button>
                                        <Button 
                                        size="small" 
                                        target='_blank' 
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
            {/* Footer */}
            {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box> */}
            {/* End footer */}
        </ThemeProvider>
    );
}