import { green } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import { Stack, Button } from '@mui/material';
import {useNavigate} from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="relative" color='transparent' sx={{boxShadow: 0}}>
                
                    <Stack direction={'row'} justifyContent={'flex-end'} alignContent={'flex-end'} py={4} px={20} color={green[900]}>
                        <Button variant="body1" mx={4} onClick={() => navigate('/', {replace: true})} noWrap>
                            Home
                        </Button>
                        <Button variant="body1" mx={4} onClick={() => navigate('/about', {replace: true})} noWrap>
                            About me
                        </Button>
                        <Button  variant="body1" mx={4} noWrap>
                            Contact
                        </Button>
                    </Stack>
            </AppBar>
  );
}

export default NavBar;
