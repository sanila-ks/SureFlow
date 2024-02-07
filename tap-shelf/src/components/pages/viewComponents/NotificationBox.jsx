import CloseIcon from '@mui/icons-material/Close';

export default function NotificationBox(props) {
    return (
        <div className="outer-box">
            <div className='notifiaction-box'>
                <div className='d-flex justify-content-between ms-1'>
                    <h6>Confirmation</h6>
                    <CloseIcon onClick={props.onClose} sx={{ fontSize: "16px", cursor: "pointer" }} />
                </div>
                <div className="content-area p-2 text-left">
                    <span className="w-100 ms-1 fw-bold" style={{ color: "#222", fontSize: 16 }}>
                        <div className='mb-1' style={{ borderBottom: '1px solid #d9d9d9', }} dangerouslySetInnerHTML={{ __html: props.type }}>
                        </div>
                        <span className='d-flex fw-normal' style={{ fontSize: 14 }}>
                            Are you sure? You want to delete the selected product?
                        </span>
                        <div className='d-flex justify-content-end mt-3'>
                            <button className="btn btn-sm btn-danger me-2" onClick={props.onDelete} >Yes</button>
                            <button className="btn btn-sm btn-outline-secondary" onClick={props.onClose} >No </button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

// import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// export default function NotificationBox(props) {
//     return (
//         <Dialog onClose={props.onClose} open={props.open}>
//             <DialogTitle fontSize={"16px"}>Confirmation</DialogTitle>
//             <DialogContent sx={{ fontSize: "14px" }}>
//                 Are you sure? You want to delete the selected product?
//             </DialogContent>
//             <DialogActions>
//                 <Button size="small" sx={{ fontSize: "12px" }} onClick={props.onDelete} variant="contained">Yes</Button>
//                 <Button size="small" sx={{ fontSize: "12px" }} onClick={props.onClose} variant="outlined" >No </Button>
//             </DialogActions>
//         </Dialog>
//     )
// }