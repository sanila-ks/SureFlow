import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import DataTable from "./viewComponents/DataTable";

export default function ContentArea() {

    const renderInput = (color, fontSize, marginBottom, value) => {
        return (<Typography
            variant="body2"
            color={color}
            sx={{ fontSize: fontSize, marginBottom: marginBottom }}
        >{value}</Typography>)
    }

    return (<>
        <Box bgcolor={'white'} borderRadius={'5px'} marginLeft={2} marginTop={1} marginRight={1} p={1}>
            <Typography marginBottom={1} fontSize={"15px"} fontWeight={"bolder"}>Overall Inventory</Typography>
            <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'start', md: 'center' } }}>
                <Stack width={'10vw'} marginLeft={3}>
                    {renderInput('rgb(0, 102, 204)', "12px", "5px", "Categories")}
                    {renderInput('', "12px", "5px", "14")}
                    {renderInput('', "10px", 0, "Last 7 Days")}
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Stack marginLeft={3} width={'18vw'}>
                    {renderInput('orange', "12px", "5px", "Total Products")}
                    <Grid container>
                        <Grid item sm={6}>
                            {renderInput('', "12px", "5px", "868")}
                            {renderInput('', "10px", 0, "Last 7 Days")}
                        </Grid>
                        <Grid item sm={6}>
                            {renderInput('', "12px", "5px", "₹25000")}
                            {renderInput('', "10px", 0, "Revenue")}
                        </Grid>
                    </Grid>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Stack marginLeft={3} width={'18vw'}>
                    {renderInput('#673ab7', "12px", "5px", "Top Selling")}
                    <Grid container>
                        <Grid item sm={6}>
                            {renderInput('', "12px", "5px", "5")}
                            {renderInput('', "10px", 0, "Last 7 Days")}
                        </Grid>
                        <Grid item sm={6}>
                            {renderInput('', "12px", "5px", "₹2500")}
                            {renderInput('', "10px", 0, "Cost")}
                        </Grid>
                    </Grid>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Stack marginLeft={3} width={'18vw'}>
                    {renderInput('red', "12px", "5px", "Low Stocks")}
                    <Grid container>
                        <Grid item sm={6}>
                            {renderInput('', "12px", "5px", "12")}
                            {renderInput('', "10px", 0, "Ordered")}
                        </Grid>
                        <Grid item sm={6}>
                            {renderInput('', "12px", "5px", "2")}
                            {renderInput('', "10px", 0, "Not in stock")}
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </Box>
        <Box bgcolor={'white'} borderRadius={'5px'} marginLeft={2} marginTop={1} marginRight={1} p={1} height={"68.5vh"}>
            <DataTable />
        </Box>
    </>
    )
}