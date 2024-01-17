import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';
import { useLocation } from "react-router-dom";
import NavBar from './Components/NavBar';
import SlidingImageDisplay from './Components/SlidingImageDisplay';
import { List, ListItem, Grid } from '@mui/material';
import { TECH_STACK, AWARDS } from './Constants/profileConstants';


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

export default function Profile() {
    const location = useLocation();
    const data = location?.state?.data;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <main style={{paddingBottom: 30}}>
                <Box px={10}>
            <Box  marginY={10} display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} alignItems={"center"} justifyContent={"space-between"} >
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
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Typography variant="h6" align="left" color="text.secondary" marginRight={4}>
                        Link:
                    </Typography>
                    <Link href={data?.github} target='_blank' mt={0.5}>
                        {data?.github}
                    </Link>
                </Box>
                <Box sx={{ mt: 6 }}>
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
                </Box>
                <Box  sx={{ mt: 6, display: !AWARDS[data?.projectCode].length && "none" }}>
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
                </Box>
                </Box>
            </main>
        </ThemeProvider>
    );
}