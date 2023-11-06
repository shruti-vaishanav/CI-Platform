/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Divider, Typography, MenuItem, Avatar, IconButton, Popover } from '@mui/material';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function PolicyPopover() {
    const [open, setOpen] = useState(null);
    // const navigate = useNavigate();
    const handleOpen = (event: any) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
        // navigate('/login')
        // RemoveStorage('token')
    };

    return (
        <>
            <MenuItem disableRipple disableTouchRipple onClick={handleOpen} style={{ display: 'flex', gap: '6px', fontSize: '16px', paddingLeft: '2px', paddingRight: '2px' }}>
                {'Policy'} <KeyboardArrowDownIcon fontSize='small' />
            </MenuItem>
            <Popover
                id="account-menu"
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 0,
                        mt: 1.5,
                        ml: 0.75,
                        width: 135,
                        '& .MuiMenuItem-root': {
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2 }}>
                    <MenuItem disableRipple >
                        Policy
                    </MenuItem>
                    <MenuItem disableRipple  >
                        Other
                    </MenuItem>
                </Box>
            </Popover>
        </>
    );
}
