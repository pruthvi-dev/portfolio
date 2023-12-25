import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';
import {useLocation} from "react-router-dom";
import NavBar from './Components/NavBar';
import SlidingImageDisplay from './Components/SlidingImageDisplay';
import { List, ListItem } from '@mui/material';

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
                            <Box>
                                <SlidingImageDisplay projectCode={data?.projectCode}/>
                            </Box>
                        </Container>
                        <Container style={{display: 'flex'}}>
                                <Typography variant="h6" align="left" color="text.secondary" marginRight={4}>
                                   Github:
                                </Typography>
                                <Link href={data?.github} target='_blank' mt={0.5}>
                                {data?.github}
                                </Link>
                        </Container>
                        <Container sx={{mt: 6}}>
                                <Typography
                                    variant="h4"
                                    align="left"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    Tech Stack
                                </Typography>
                                
                                <Typography variant="h6" align="left" color="text.secondary" paragraph>
                                    {data?.description}
                                </Typography>
                        </Container>
                        <Container sx={{mt: 6}}>
                                <Typography
                                    variant="h4"
                                    align="left"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    Awards/Recognition
                                </Typography>
                                
                                <Typography variant="h6" align="left" color="text.secondary" paragraph>
                                    <List>
                                        <ListItem>
                                            Lorem Ipsum
                                        </ListItem>
                                        <ListItem>
                                            Lorem Ipsum
                                        </ListItem>
                                        <ListItem>
                                            Lorem Ipsum
                                        </ListItem>
                                    </List>
                                </Typography>
                        </Container>
            </main>
        </ThemeProvider>
    );
}