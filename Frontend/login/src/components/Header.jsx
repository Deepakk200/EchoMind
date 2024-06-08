import Logo from "./shared/Logo";

import  AppBar  from '@mui/material/AppBar';
import  Toolbar  from '@mui/material/Toolbar';
const Header = () => {
  return (
  <AppBar sx ={{bgcolor : "transparent" , position : "static " , boxshadow: "none "}}
  >
<Toolbar sx = {{display : "flex"}}></Toolbar>
   <Logo/>
  </AppBar>
  );
};

export default Header;