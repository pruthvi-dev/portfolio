import { green } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import { Stack, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';
import { pathTrackingStyle } from '../Styles/navBar';

function NavBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [home, setHome] = useState();
    const [about, setAbout] = useState();
    const [contact, setContact] = useState();

    const pathTracker = () => {
        let location = window.location.pathname;
        switch (location) {
            case '/':
                setHome(pathTrackingStyle);
                break;
            case '/about':
                setAbout(pathTrackingStyle);
                break;
            default: break;
        }
    }
    const handleOpen = () => { setOpen(true); setAbout(); setHome(); setContact(pathTrackingStyle); }
    const handleClose = () => { setOpen(false); setContact(); pathTracker(); }

    const contactPreview = () => {
        return (
            <ContactModal
                open={open}
                handleClose={handleClose}
            />
        )
    }

    useEffect(() => {
        pathTracker();
    }, []);
    return (
        <AppBar position="relative" color='transparent' sx={{ boxShadow: 0 }}>

            <Stack direction={'row'}  justifyContent={{ xs: 'center', md: 'flex-end' }} alignContent={'flex-end'} py={4} spacing={4} px={10} color={green[900]}>
                <Button sx={home} mx={4} onClick={() => navigate('/', { replace: true })} noWrap>
                    Home
                </Button>
                <Button sx={about} mx={4} onClick={() => navigate('/about', { replace: true })}>
                    About me
                </Button>
                <Button sx={contact} onClick={handleOpen} mx={4}>
                    Contact
                </Button>
            </Stack>
            {contactPreview()}
        </AppBar>
    );
}

export default NavBar;
