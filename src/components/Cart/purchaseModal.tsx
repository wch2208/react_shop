import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useUpdateCart } from "../../store/utils/useUpdateCart";

export default function PurchaseModal() {
  const [open, setOpen] = React.useState(false);

  const { allDeleteCart } = useUpdateCart();

  const handleClick = () => {
    allDeleteCart();
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{
          maxWidth: "100px",
          minWidth: "100px",
          minHeight: "30px",
        }}
        onClick={handleClickOpen}
      >
        구매하기
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"정말로 구매하시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            장바구니의 모든 상품들이 삭제됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            아니오
          </Button>
          <Button onClick={handleClick} autoFocus>
            예
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
