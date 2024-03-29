import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';
import NavBar from './Components/NavBar';
import aboutBoy from './Assets/workMan.gif';
import { List, ListItem } from '@mui/material';
import Grid from '@mui/material/Grid';

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

export default function About() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <main style={{ paddingBottom: 30 }}>
                <Box px={6}>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        marginY={10}
                        paddingX={2}
                    >
                        <Box marginBottom={{ xs: 4, md: 0 }} textAlign={{ xs: 'center', md: 'left' }}>
                            <Typography
                                component="h2"
                                variant="h3"
                                color="primary"
                                gutterBottom
                            >
                                Pruthvi H P
                            </Typography>
                            <Typography variant="h5" color="text.primary" fontWeight="medium" gutterBottom>
                                Software Developer
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                I am a software developer utilizing my IT experience to understand multiple stakeholder
                                perspectives to produce new-age viable solutions to real-world problems.
                            </Typography>
                            <Box style={{ display: 'flex' }} flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" marginTop={2}>
                                <Typography variant="h5" textAlign={{ xs: 'center', md: 'left' }} color="text.primary" marginRight={4}>
                                    LinkedIn:
                                </Typography>
                                <Link href="https://www.linkedin.com/in/pruthvi-p-shivappa/" target="_blank" mt={0.5}>
                                    https://www.linkedin.com/in/pruthvi-p-shivappa/
                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <img src={aboutBoy} alt="homeImg" width={300} />
                        </Box>
                    </Box>

                    <Box sx={{ mt: 6 }}>
                        <Typography
                            variant="h5"
                            textAlign={{ xs: 'center', md: 'left' }}
                            color="text.primary"
                            fontWeight={"medium"}
                            gutterBottom
                        >
                            Tech Stack
                        </Typography>
                        <Box>
                            <Grid container mt={1} mb={2} spacing={2} rowSpacing={4}>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Typography variant="h6">React JS</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Typography variant="h6">GraphQL</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Typography variant="h6">Elasticsearch</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Typography variant="h6">Kibana</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Typography variant="h6">MongoDB</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Typography variant="h6">NestJS</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Typography variant="h6">Python</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Typography variant="h6">HTML, CSS, Javascript</Typography>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Typography
                            variant="h5"
                            textAlign={{ xs: 'center', md: 'left' }}
                            color="text.primary"
                            fontWeight={"medium"}
                            gutterBottom
                            marginBottom={2}
                        >
                            Work Experience
                        </Typography>
                        <>
                            <Box style={{ display: 'flex' }} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={"space-between"}>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} fontWeight={"bold"}>
                                    Software Development Engineer
                                </Typography>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }}>
                                    September 2022 - Present
                                </Typography>
                            </Box>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color={green[900]}>
                                Unify Technologies Pvt. Ltd.
                            </Typography>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color="text.secondary" paragraph>
                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        pl: 2,
                                        '& .MuiListItem-root': {
                                            display: 'list-item',
                                        },
                                    }}>
                                    <ListItem>
                                        Implemented UI and test scripts for 5 key features using
                                        ReactJS and CucumberJS framework respectively.
                                    </ListItem>
                                    <ListItem>
                                        Developed and integrated GraphQL APIs to obtain
                                        audit logs and chat histories of users which reduced response latency by 15%.
                                    </ListItem>
                                    <ListItem>
                                        Used ELK stack to perform real-time analysis and search
                                        operations on user events. Decreased search query time
                                        by 28.5%.
                                    </ListItem>
                                    <ListItem>
                                        Worked on 3 POCs (n8n, Growthbook, and Kibana
                                        dashboard) and integrated them into the project.
                                    </ListItem>
                                </List>
                            </Typography>
                        </>
                        <>
                            <Box style={{ display: 'flex' }} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={"space-between"}>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} fontWeight={"bold"}>
                                    Data Engineer Intern
                                </Typography>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }}>
                                    January 2022 - June 2022
                                </Typography>
                            </Box>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color={green[900]}>
                                Amazon
                            </Typography>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color="text.secondary" paragraph>
                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        pl: 2,
                                        '& .MuiListItem-root': {
                                            display: 'list-item',
                                        },
                                    }}
                                >
                                    <ListItem>
                                        Worked on a Data Quality Validation project to
                                        understand customer needs and flag notifications upon
                                        finding discrepancies in datastores.
                                    </ListItem>
                                    <ListItem>
                                        Developed 4 constraint checking logics.
                                    </ListItem>
                                </List>
                            </Typography>
                        </>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Typography
                            variant="h5"
                            textAlign={{ xs: 'center', md: 'left' }}
                            color="text.primary"
                            fontWeight={"medium"}
                            gutterBottom
                            marginBottom={2}
                        >
                            Voluntary Work
                        </Typography>
                        <>
                            <Box style={{ display: 'flex' }} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={"space-between"}>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} fontWeight={"bold"}>
                                    Creative Lead
                                </Typography>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }}>
                                    Aug 2020 - Jun 2022
                                </Typography>
                            </Box>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color={green[900]}>
                                Google DSC JSSSTU
                            </Typography>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color="text.secondary" paragraph>
                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        pl: 2,
                                        '& .MuiListItem-root': {
                                            display: 'list-item',
                                        },
                                    }}>
                                    <ListItem>
                                        Led a creative team of UI designers and content writers.
                                    </ListItem>
                                    <ListItem>
                                        Increased the audience base by 50% in 10 months and attracted 7 new sponsors.
                                    </ListItem>
                                </List>
                            </Typography>
                        </>
                        <>
                            <Box style={{ display: 'flex' }} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={"space-between"}>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} fontWeight={"bold"}>
                                    <Link href="https://play.google.com/store/apps/details?id=com.humane.csafeapp">CoviSafe </Link> app published on Play Store
                                </Typography>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }}>
                                    Jul 2021
                                </Typography>
                            </Box>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color={green[900]}>
                                K-Tech JSS STU
                            </Typography>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color="text.secondary" paragraph>
                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        pl: 2,
                                        '& .MuiListItem-root': {
                                            display: 'list-item',
                                        },
                                    }}
                                >
                                    <ListItem>
                                        Designed an app that helps users to get medical help
                                        and supplies in times of need.
                                    </ListItem>
                                </List>
                            </Typography>
                        </>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Typography
                            variant="h5"
                            textAlign={{ xs: 'center', md: 'left' }}
                            color="text.primary"
                            fontWeight={"medium"}
                            gutterBottom
                            marginBottom={2}
                        >
                            Education
                        </Typography>
                        <>
                            <Box style={{ display: 'flex' }} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={"space-between"}>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} fontWeight={"bold"}>
                                    B.E - Computer Science & Engineering
                                </Typography>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }}>
                                    2018 - 2022
                                </Typography>
                            </Box>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color={green[900]}>
                                JSS S&T University
                            </Typography>
                        </>
                        <>
                            <Box style={{ display: 'flex' }} mt={4} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={"space-between"}>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} fontWeight={"bold"}>
                                    UI/UX Design Specialization-Coursera
                                </Typography>
                            </Box>
                            <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color={green[900]}>
                                California Institute of Arts
                            </Typography>
                        </>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Typography
                            variant="h5"
                            textAlign={{ xs: 'center', md: 'left' }}
                            color="text.primary"
                            fontWeight={"medium"}
                            gutterBottom
                            marginBottom={2}
                        >
                            Accomplishments
                        </Typography>
                        <>
                            <Box style={{ display: 'flex' }} justifyContent={"space-between"}>
                                <Typography variant="h6" textAlign={{ xs: 'center', md: 'left' }} color="text.secondary" paragraph>
                                    <List
                                        sx={{
                                            listStyleType: 'disc',
                                            pl: 2,
                                            '& .MuiListItem-root': {
                                                display: 'list-item',
                                            },
                                        }}>
                                        <ListItem>
                                            Best Project Award, Paper presentation at ICMNWC 2022 held
                                            by IEEE Bangalore Section for the project 'Alternet - Monetizing Computing
                                            Resources for an ad-free web experience'.
                                        </ListItem>
                                        <ListItem>
                                            Runner up at the State Level Hackathon held by Innovation Institution Council JSS STU
                                        </ListItem>
                                        <ListItem>
                                            Idea recognition and project funding (Funds upto 100,000).
                                        </ListItem>
                                        <ListItem>
                                            Master of Ceremony (10,000+ reach).
                                        </ListItem>
                                    </List>
                                </Typography>
                            </Box>
                        </>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Typography
                            variant="h5"
                            textAlign={{ xs: 'center', md: 'left' }}
                            color="text.primary"
                            fontWeight={"medium"}
                            gutterBottom
                        >
                            Interests
                        </Typography>
                        <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} mb={2}>
                            <Typography variant="h6" mr={{ md: 20 }}>
                                Poetry writing
                            </Typography>
                            <Typography variant="h6" mr={{ md: 20 }}>
                                Theatre
                            </Typography>
                            <Typography variant="h6" mr={{ md: 20 }}>
                                Travel
                            </Typography>
                            <Typography variant="h6" mr={{ md: 20 }}>
                                Fitness
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </main>
        </ThemeProvider>
    );
}