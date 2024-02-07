import { Box, Grid, Stack } from "@mui/material";
import LeftNavArea from "./LeftNavArea";
import HeaderArea from "./HeaderArea";
import ContentArea from "./ContentArea";

export default function LayoutPage() {
    return (
        <Grid container bgcolor={"#e9e9e9"} sx={{ display: 'flex' }}>
            <Grid item>
                <LeftNavArea />
            </Grid>
            <Grid item width={'85vw'}>
                <Box flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
                    <HeaderArea />
                    <ContentArea />
                </Box>
            </Grid>
        </Grid>
    )
}