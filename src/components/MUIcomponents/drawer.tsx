import { Drawer, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
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
      <Link to="/Clothing" style={{ textDecoration: "none", color: "black" }}>
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          의류
        </Typography>
      </Link>
      <Link to="/Jewelery" style={{ textDecoration: "none", color: "black" }}>
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          주얼리
        </Typography>
      </Link>
      <Link
        to="/Electronics"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          컴퓨터 주변기기
        </Typography>
      </Link>
    </Drawer>
  ) : null;
};

export default MyDrawer;
