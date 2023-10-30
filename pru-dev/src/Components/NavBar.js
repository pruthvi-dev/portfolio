import { green, brown, grey } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import { Stack, Button } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="relative" color='transparent' sx={{boxShadow: 0}}>
                
                    <Stack direction={'row'} justifyContent={'flex-end'} alignContent={'flex-end'} py={4} px={20} color={green[900]}>
                        <Button variant="body1" mx={4} noWrap>
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
