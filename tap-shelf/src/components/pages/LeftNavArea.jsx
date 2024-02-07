import { Box, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StrollerOutlinedIcon from '@mui/icons-material/StrollerOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function LeftNavArea() {
    const menuList = [
        { id: 1, title: "Dashboard", icon: HomeOutlinedIcon },
        { id: 2, title: "Inventory", icon: StrollerOutlinedIcon },
        { id: 3, title: "Reports", icon: InsertChartOutlinedIcon },
        { id: 4, title: "Suppliers", icon: AccountCircleOutlinedIcon },
        { id: 5, title: "Orders", icon: ShoppingBagOutlinedIcon },
        { id: 6, title: "Manage Store", icon: ListAltOutlinedIcon },
    ]

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const renderNavItem = (item, index) => {
        let Icon = item.icon
        let ListIcon = <Icon sx={{ fontSize: '18px', color: index == 1 && "rgb(0, 102, 204)" }} />
        return (
            <>
                <ListItemIcon sx={{ justifyContent: 'center' }}>
                    {ListIcon}
                </ListItemIcon>
                <ListItemText sx={{ display: { xs: "none", md: "block" } }} primary={
                    <Typography variant="body1"
                        sx={{ fontSize: '12px', color: index == 1 && "rgb(0, 102, 204)" }}>{item.title}</Typography>
                } />
            </>
        )
    }

    return (
        <Box width={"15vw"} height={"100vh"} bgcolor={"white"}>
            <Stack direction="row" marginLeft={2} alignItems="center" height={'5vh'}>
                <Typography variant="subtitle2" color={"rgb(0, 102, 204)"} fontWeight={'bolder'}>
                    {isSmallScreen ? "TS" : "TapShelf"}
                </Typography>
            </Stack>
            <Stack flexDirection='column' justifyContent='space-between' height={'95vh'}>
                <Box>
                    <List>
                        {menuList.map((item, index) => {
                            return <ListItemButton>
                                {renderNavItem(item, index)}
                            </ListItemButton>
                        })}
                    </List>
                </Box>
                <Box>
                    <List>
                        <ListItemButton>
                            <ListItemIcon sx={{ justifyContent: 'center' }}><SettingsOutlinedIcon sx={{ fontSize: '18px' }} /></ListItemIcon>
                            <ListItemText
                                sx={{ display: { xs: "none", md: "block" } }}
                                primary={
                                    <Typography variant="body1" style={{ fontSize: '12px' }}>Settings</Typography>
                                } />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon sx={{ justifyContent: 'center' }}><LogoutOutlinedIcon sx={{ fontSize: '18px' }} /></ListItemIcon>
                            <ListItemText
                                sx={{ display: { xs: "none", md: "block" } }}
                                primary={
                                    <Typography variant="body1" style={{ fontSize: '12px' }}>Log Out</Typography>
                                } />
                        </ListItemButton>
                    </List>
                </Box>
            </Stack>
        </Box>
    )
}