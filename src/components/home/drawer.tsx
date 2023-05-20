import { Button, Drawer, Typography } from "@material-ui/core";

interface MyDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MyDrawer: React.FC<MyDrawerProps> = ({ open, onClose }) => {
  console.log(open);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("id:", e.currentTarget.id);
    if (e.currentTarget.id.startsWith("drawer")) {
      console.log("카테고리 이동");
    } else {
      console.log("닫기");
      // onClose();
    }
  };

  return open ? (
    <Drawer
      anchor="left"
      open={open}
      style={{ backgroundColor: "#fff" }}
      // onClick={handleClick}
    >
      <div style={{ width: "320px", marginTop: "40px" }}></div>
      <Button
        href="/"
        target="_blank"
        // align="left"
        // style={{ margin: "20px 0 0 20px", width: "320px" }}
        id="drawer 1"
      >
        패션
      </Button>
      <br />
      <Button id="drawer 2">액세서리</Button>
      <br />
      <Button id="drawer 3">디지털</Button>
    </Drawer>
  ) : null;
};

export default MyDrawer;
