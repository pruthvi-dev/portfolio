import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import shadows from '@mui/material/styles/shadows';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown, grey } from '@mui/material/colors';
import devBoy from './Assets/dev-boy.png';
import { cards } from './Constants/home';
import {useNavigate, useLocation} from "react-router-dom";
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
    const location = useLocation();
    const data = location?.state?.data;
    console.log("Propss", data)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <main>
                        <Container style={{ display: 'flex', marginTop: 100 }}>
                            {/* <MyImageCard /> */}
                            <Box>
                                <Typography
                                    component="h2"
                                    variant="h3"
                                    align="left"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    {data?.name}
                                </Typography>
                                
                                <Typography variant="h6" align="left" color="text.secondary" paragraph>
                                    {data?.description}
                                </Typography>
                            </Box>
                            <Box >
                                <img src={devBoy} alt="Image" width={300} />
                            </Box>
                        </Container>
            </main>
        </ThemeProvider>
    );
}