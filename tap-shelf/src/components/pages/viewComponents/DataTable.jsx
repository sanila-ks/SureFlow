import { Box, Button, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import DialogBox from "./DialogBox";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import NotificationBox from "./NotificationBox";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../store/productsSlice";

export default function DataTable() {
    const dataSet = useSelector(state => state)
    let dispatch = useDispatch()
    // const [dataSet, setDataSet] = useState([
    //     { productId: "p001", productName: "Maggi", price: "430", quantity: 43, threshold: 12, expiry: "11/12/22", availability: "In-stock" },
    //     { productId: "p002", productName: "Bru", price: "257", quantity: 22, threshold: 12, expiry: "21/12/22", availability: "Out of stock" },
    //     { productId: "p003", productName: "Red Bull", price: "405", quantity: 36, threshold: 9, expiry: "5/12/22", availability: "In-stock" },
    //     { productId: "p004", productName: "Ariel", price: "508", quantity: 10, threshold: 5, expiry: "20/12/22", availability: "In-stock" },
    //     { productId: "p005", productName: "Maggi", price: "430", quantity: 43, threshold: 12, expiry: "11/12/22", availability: "In-stock" },
    //     { productId: "p006", productName: "Bru", price: "257", quantity: 22, threshold: 12, expiry: "21/12/22", availability: "Out of stock" },
    //     { productId: "p007", productName: "Maggi", price: "430", quantity: 43, threshold: 12, expiry: "11/12/22", availability: "In-stock" },
    //     { productId: "p008", productName: "Bru", price: "257", quantity: 22, threshold: 12, expiry: "21/12/22", availability: "Out of stock" },
    //     { productId: "p009", productName: "Maggi", price: "430", quantity: 43, threshold: 12, expiry: "11/12/22", availability: "In-stock" },
    //     { productId: "p009", productName: "Maggi", price: "430", quantity: 43, threshold: 12, expiry: "11/12/22", availability: "In-stock" },
    // ])

    const [dialogOpen, setDialogOpen] = useState(false)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [deleteItem, setDeleteItem] = useState(null)

    const handleButtonClick = () => {
        setDialogOpen(true)
    }

    const handleSubmit = (args) => {
        let has_error = false
        let data = { ...args, availability: "In-stock" }
        console.log(Object.values(data))
        Object.values(data).map(item => {
            if (item == "" || item === null) {
                has_error = true
            }
        })
        if (has_error === false) {
            dispatch(addProduct(data))
            // dataSet.push(data)
            setDialogOpen(false)
        } else alert("All fields are mandatory")
    }

    const handleDelete = item => {
        setDeleteItem(item)
        setDeleteDialogOpen(true)
    }

    const deletehandler = () => {
        dispatch(deleteProduct(deleteItem))
        // let index = dataSet.findIndex(data => data.productId === deleteItem.productId)
        // dataSet.splice(index, 1)
        setDeleteDialogOpen(false)
        setDeleteItem(null)
    }

    const [page, setPage] = useState(1);
    const totalPages = 10;

    const handlePrevClick = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextClick = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <>
            {dialogOpen && <DialogBox
                open={dialogOpen}
                onSumbit={(args) => handleSubmit(args)}
                onClose={() => setDialogOpen(false)}
            />}
            {deleteDialogOpen && <NotificationBox
                open={deleteDialogOpen}
                onDelete={deletehandler}
                onClose={() => setDeleteDialogOpen(false)}
            />}
            <TableContainer sx={{ height: "60.5vh" }}>
                <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography marginBottom={1} fontSize={"15px"} fontWeight={"bolder"}>Products</Typography>
                    <Box >
                        <Button variant="contained" size="small"
                            sx={{ marginRight: 1, fontSize: "10px", textTransform: 'none' }}
                            onClick={() => handleButtonClick()}
                        >Add Product</Button>
                        <Button variant="outlined" size="small"
                            sx={{ marginRight: 1, fontSize: "10px", textTransform: 'none' }}>
                            <FilterListOutlinedIcon sx={{ fontSize: "10px" }} />Filters
                        </Button>
                        <Button variant="outlined" size="small" sx={{ fontSize: "10px", textTransform: 'none' }}>Download All</Button>
                    </Box>
                </Stack>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: '12px', paddingTop: 0.8, paddingBottom: 0.5 }}>Products</TableCell>
                            <TableCell sx={{ fontSize: '12px', paddingTop: 0.8, paddingBottom: 0.5 }}>Buying Price</TableCell>
                            <TableCell sx={{ fontSize: '12px', paddingTop: 0.8, paddingBottom: 0.5 }}>Quantity</TableCell>
                            <TableCell sx={{ fontSize: '12px', paddingTop: 0.8, paddingBottom: 0.5 }}>Threshold Value</TableCell>
                            <TableCell sx={{ fontSize: '12px', paddingTop: 0.8, paddingBottom: 0.5 }}>Expiry Date</TableCell>
                            <TableCell sx={{ fontSize: '12px', paddingTop: 0.8, paddingBottom: 0.5 }}>Availability</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataSet.map(item => {
                            return (
                                <TableRow>
                                    <TableCell sx={{ fontSize: '10px', paddingTop: 0.5, paddingBottom: 0.5 }}>{item.productName}</TableCell>
                                    <TableCell sx={{ fontSize: '10px', paddingTop: 0.5, paddingBottom: 0.5 }}>₹{item.price}</TableCell>
                                    <TableCell sx={{ fontSize: '10px', paddingTop: 0.5, paddingBottom: 0.5 }}>{item.quantity} Packets</TableCell>
                                    <TableCell sx={{ fontSize: '10px', paddingTop: 0.5, paddingBottom: 0.5 }}>{item.threshold} Packets</TableCell>
                                    <TableCell sx={{ fontSize: '10px', paddingTop: 0.5, paddingBottom: 0.5 }}>{item.expiry}</TableCell>
                                    <TableCell sx={{
                                        fontSize: '10px', paddingTop: 0.5, paddingBottom: 0.5,
                                        color: item.availability === "In-stock" ? 'green' : 'red'
                                    }}>{item.availability}</TableCell>
                                    <TableCell sx={{ paddingTop: 0.5, paddingBottom: 0.5, cursor: "pointer" }}
                                        onClick={() => handleDelete(item)}><DeleteOutlineIcon sx={{ fontSize: '14px' }} /></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Stack direction="row" alignItems="center" justifyContent={'space-between'}
                spacing={2} marginTop={1}>
                <Button variant="outlined" size="small" sx={{ fontSize: "10px", textTransform: 'none' }} onClick={handlePrevClick} disabled={page === 1}>
                    Previous
                </Button>
                <Typography variant="body1" sx={{ fontSize: "10px" }}>
                    Page {page} of {totalPages}
                </Typography>
                <Button variant="outlined" size="small" sx={{ fontSize: "10px", textTransform: 'none' }} onClick={handleNextClick} disabled={page === totalPages}>
                    Next
                </Button>
            </Stack>
        </>
    )
}