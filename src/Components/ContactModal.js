import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 12,
    p: 4,
};

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


export default function ContactModal(props) {
    const { open, handleClose } = props;

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box style={{ display: 'flex' }} marginTop={2}>
                            <Box mt={0.6} mr={2}>
                                <EmailIcon color='success' />
                            </Box>
                            <Typography variant="h6" align="left" color="text.secondary" marginRight={4}>
                                Email ID:
                            </Typography>
                            <Link href="pruthvipshivappa@gmail.com" target='_blank'  mt={0.5}>
                               pruthvipshivappa@gmail.com
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex' }} marginTop={2}>
                            <Box mt={0.6} mr={2}>
                                <LinkedInIcon color='success' />
                            </Box>
                            <Typography  variant="h6" align="left" color="text.secondary" marginRight={4}>
                                LinkedIn:
                            </Typography>
                            <Link href="https://www.linkedin.com/in/pruthvi-p-shivappa/" target='_blank' mt={0.5}>
                                https://www.linkedin.com/in/pruthvi-p-shivappa/
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex' }} marginTop={2}>
                        <Box mt={0.6} mr={2}>
                                <CallIcon color='success' />
                            </Box>
                            <Typography variant="h6" align="left" color="text.secondary" marginRight={2}>
                                Phone No.:
                            </Typography>
                            <Typography variant="body1" mt={0.75} align="left" color={green[900]} marginRight={4}>
                                9591716584
                            </Typography>
                        </Box>
                    </Box>
                    
                </Modal>
            </div>
        </ThemeProvider>
    );
}