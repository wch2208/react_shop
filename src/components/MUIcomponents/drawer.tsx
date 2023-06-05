import { Drawer, Typography } from "@material-ui/core";
import Link from "@mui/material/Link";
import { useRecoilState } from "recoil";
import { DrawerOpen } from "../../store/atoms/DrawerOpen";

interface MyDrawerProps {
  open: boolean;
  handleClick: () => void;
}

const MyDrawer: React.FC<MyDrawerProps> = () => {
  const [open, setOpen] = useRecoilState(DrawerOpen);
  const handleClick = () => {
    setOpen(false);
  };
  return open ? (
    <Drawer
      open={open}
      style={{
        backgroundColor: "#fff",
        width: 0,
      }}
      onClick={handleClick}
      id="close"
    >
      <Link href="/Clothing" underline="none" color={"black"}>
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          의류
        </Typography>
      </Link>
      <Link href="/Jewelery" underline="none" sx={{ color: "black" }}>
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          주얼리
        </Typography>
      </Link>
      <Link href="/Electronics" underline="none" sx={{ color: "black" }}>
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          컴퓨터 주변기기
        </Typography>
      </Link>
    </Drawer>
  ) : null;
};

export default MyDrawer;
