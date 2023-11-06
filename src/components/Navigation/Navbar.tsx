
import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, Stack, Chip, List, ListItem, ListItemButton, ListItemText, Container, Button, Toolbar, Typography } from '@mui/material';
import PolicyPopover from './PolicyPopover';
import MenuIcon from '@mui/icons-material/Menu';
import AccountPopover from './AccountPopover';
import SearchSection from '../SearchBar/SearchBar';
import SearchChip from '../SearchBar/chip';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', }} >
      <CssBaseline />
      <AppBar component="nav" >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid #efefef' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: 'flex', gap: '45px', alignItems: 'center' }}>
            <Typography
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Stories
            </Typography>
            <PolicyPopover />
          </div>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <AccountPopover />
          </Box>
        </Toolbar>
        <Container maxWidth={'lg'}>
          <SearchSection />
          <SearchChip />
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
        </Typography>
      </Box>
    </Box>
  );
}

