import { Drawer, Typography } from "@material-ui/core";
import Link from "@mui/material/Link";
import { useRecoilState } from "recoil";
import { DrawerOpen } from "../../recoil/DrawerOpen";

interface MyDrawerProps {
  open: boolean;
  handleClick: () => void;
}

const MyDrawer: React.FC<MyDrawerProps> = () => {
  const [open, setOpen] = useRecoilState(DrawerOpen);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.id);
    event.defaultPrevented;
    setOpen(false);
  };
  return open ? (
    <Drawer
      open={open}
      style={{
        backgroundColor: "#fff",
        width: 0,
        transition: "width 10s",
      }}
      onClick={handleClick}
      id="close"
    >
      <Link href="/Fashion" underline="none" sx={{ color: "black" }}>
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          패션
        </Typography>
      </Link>
      <Link href="/Accesory" underline="none" sx={{ color: "black" }}>
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          액세서리
        </Typography>
      </Link>
      <Link href="/Digital" underline="none" sx={{ color: "black" }}>
        <Typography variant="h6" style={{ padding: "20px", width: "100%" }}>
          디지털
        </Typography>
      </Link>
    </Drawer>
  ) : null;
};

export default MyDrawer;

/* <div style={{ width: "320px", marginTop: "40px" }}>ㅁㄴㅇㄻㄴㅇㄹ</div>
<Button id="drawer">패션</Button>
<br />
<Button id="drawer">액세서리</Button>
<br />
<Button id="drawer">디지털</Button> */
