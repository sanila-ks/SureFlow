import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import moment from "moment";

export default function DialogBox(props) {
    const [formData, setFormData] = useState({
        productName: '',
        productId: '',
        category: '',
        price: '',
        quantity: '',
        unit: '',
        expiry: null,
        threshold: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const renderInput = (label, name, value, type) => {
        return (<Grid container spacing={2} marginBottom={1}>
            <Grid item sm={4} alignItems={'center'}>
                <InputLabel htmlFor={name}
                    sx={{
                        fontSize: "12px",
                        fontWeight: "bolder",
                        color: "black",
                    }}
                >{label}</InputLabel></Grid>
            <Grid item sm={8}>
                {type ?
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            disablePast
                            format="DD/MM/YYYY"
                            value={value}
                            onChange={(newValue) => {
                                console.log("newValue", newValue)
                                setFormData((prevData) => ({
                                    ...prevData,
                                    [name]: newValue && moment(new Date(newValue)).format("DD/MM/YY"),
                                }))
                            }}
                            // renderInput={(params) => <TextField {...params} />}
                            slotProps={{ textField: { variant: 'outlined' } }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '32px',
                                    width: '250px',
                                    fontSize: "12px"
                                },
                            }}
                        /></LocalizationProvider>
                    : <TextField
                        placeholder={`Enter ${label}`}
                        id={name}
                        variant="outlined"
                        name={name}
                        value={value}
                        onChange={handleChange}
                        size="small"
                        autoComplete="off"
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '32px',
                                width: '250px',
                                fontSize: "12px"
                            },
                        }}
                    />}
            </Grid>
        </Grid>)
    }

    return (
        <Dialog onClose={props.onClose} open={props.open}>
            <DialogTitle fontSize={"14px"}>New Product</DialogTitle>
            <DialogContent sx={{ width: { md: "32vw" } }}>
                <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginBottom={2}>
                    <Box border={"1px dashed grey"} borderRadius={'5px'} height={'60px'} width={'70px'} marginRight={2} />
                    <Typography sx={{ fontSize: "12px", textAlign: "center" }}>Drag image here<br /> or <br /><span style={{ cursor: "pointer", color: "rgb(0, 102, 204)" }}>Browse image</span></Typography>
                </Stack>
                {renderInput("Product Name", "productName", formData.productName)}
                {renderInput("Product ID", "productId", formData.productId)}
                {renderInput("Category", "category", formData.category)}
                {renderInput("Buying price", "price", formData.price)}
                {renderInput("Quantity", "quantity", formData.quantity)}
                {renderInput("Unit", "unit", formData.unit)}
                {renderInput("Expiry Date", "expiry", formData.expiry, "date")}
                {renderInput("Threshold Value", "threshold", formData.threshold)}
            </DialogContent>
            <DialogActions>
                <Button size="small" sx={{ fontSize: "12px", textTransform: 'none' }} onClick={props.onClose}>Discard</Button>
                <Button size="small" sx={{ fontSize: "12px", textTransform: 'none' }} onClick={() => props.onSumbit(formData)} autoFocus variant="contained">
                    Add Product
                </Button>
            </DialogActions>
        </Dialog>
    )
}