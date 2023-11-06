/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Divider, Typography, MenuItem, Avatar, Popover } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// mocks_
// import { RemoveStorage } from '../../../utils/localstorage';
// import account from '../../../_mock/account';
// ----------------------------------------------------------------------
const account = {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: 'src/assets/avatar_default.jpg',
};
const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: 'eva:home-fill',
    },
    {
        label: 'Profile',
        icon: 'eva:person-fill',
    },
    {
        label: 'Settings',
        icon: 'eva:settings-2-fill',
    },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
    const [open, setOpen] = useState(null);
    const navigate = useNavigate();
    const handleOpen = (event: any) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
        navigate('/')
        // RemoveStorage('token')
    };

    return (
        <>
            <MenuItem disableRipple disableTouchRipple onClick={handleOpen} style={{ display: 'flex', gap: '6px', fontSize: '15px', paddingLeft: '2px', paddingRight: '2px' }}>
                <Avatar src={account.photoURL} alt="photoURL" />
                {account.displayName} <KeyboardArrowDownIcon fontSize='small' />
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
                        width: 180,
                        '& .MuiMenuItem-root': {
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        {account.displayName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {account.email}
                    </Typography>
                </Box>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <MenuItem onClick={handleClose} sx={{ m: 1 }}>
                    Logout
                </MenuItem>
            </Popover>
        </>
    );
}
