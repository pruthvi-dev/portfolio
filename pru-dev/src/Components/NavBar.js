import { green } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import { Stack, Button } from '@mui/material';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import ContactModal from './ContactModal';

function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const contactPreview = () => {
        return(
            <ContactModal 
            open = {open}
            handleClose = {handleClose}
            />
        )
    }
  return (
    <AppBar position="relative" color='transparent' sx={{boxShadow: 0}}>
                
                    <Stack direction={'row'} justifyContent={'flex-end'} alignContent={'flex-end'} py={4} px={20} color={green[900]}>
                        <Button variant="body1" mx={4} onClick={() => navigate('/', {replace: true})} noWrap>
                            Home
                        </Button>
                        <Button variant="body1" mx={4} onClick={() => navigate('/about', {replace: true})} noWrap>
                            About me
                        </Button>
                        <Button  variant="body1" onClick={handleOpen} mx={4} noWrap>
                            Contact
                        </Button>
                    </Stack>
                    {contactPreview()}
            </AppBar>
  );
}

export default NavBar;
