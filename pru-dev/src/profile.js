import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
//import Paper from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';
import { useLocation } from "react-router-dom";
import NavBar from './Components/NavBar';
import SlidingImageDisplay from './Components/SlidingImageDisplay';
import { List, ListItem, Grid, Paper } from '@mui/material';
import { TECH_STACK, AWARDS } from './Constants/profileConstants';
import { styled } from '@mui/material/styles';

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

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: '#fff',
    //     ...theme.typography.body1,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.primary.main,
    // }));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <main style={{paddingBottom: 30}}>
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
                    <Box mt={6}>
                        <SlidingImageDisplay projectCode={data?.projectCode} />
                    </Box>
                </Container>
                <Container style={{ display: 'flex' }}>
                    <Typography variant="h6" align="left" color="text.secondary" marginRight={4}>
                        Link:
                    </Typography>
                    <Link href={data?.github} target='_blank' mt={0.5}>
                        {data?.github}
                    </Link>
                </Container>
                <Container sx={{ mt: 6 }}>
                    <Typography
                        variant="h4"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        Tech Stack
                    </Typography>
                    <Grid container spacing={2} rowSpacing={4}>
                        {TECH_STACK[data?.projectCode]?.map((val) => {
                            return (
                                <Grid item xs={4}>
                                    <Typography variant="h6" >{val}</Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
                <Container  sx={{ mt: 6, display: !AWARDS[data?.projectCode].length && "none" }}>
                    <Typography
                        variant="h4"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        Awards/Recognition
                    </Typography>

                    <Typography variant="h6" align="left" color="text.secondary" paragraph>
                        <List
                        sx={{
                            listStyleType: 'disc',
                            pl: 2,
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            }}}
                            >
                            {AWARDS[data?.projectCode]?.map((val) => {
                                return (
                                    <ListItem>
                                        {val}
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Typography>
                </Container>
            </main>
        </ThemeProvider>
    );
}