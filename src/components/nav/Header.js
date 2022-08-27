// import { Anchor, Badge, Menu } from "antd";
// import {
//   AppstoreOutlined,
//   LogoutOutlined,
//   SettingOutlined,
//   ShoppingCartOutlined,
//   ShoppingOutlined,
//   UserAddOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Button, Drawer } from 'antd';
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import LeftMenu from "./LeftMenu"
// import { Link } from "react-router-dom";
// import RightMenu from './RightMenu'
// import Search from "../forms/Search";
// import firebase from "firebase";
// import { useHistory } from "react-router-dom";

// const { SubMenu, Item } = Menu;
// //const { Link } = Anchor;
// const Header = () => {
//   // state = {
//   //   current: 'mail',
//   //   visible: false
//   // }

//   const [state, setState] = useState(false);
//   const showDrawer2 = () => {
//     setState({
//       visible: true,
//     });
//   };
//   const onClose2 = () => {
//     setState({
//       visible: false,
//     });
//   };

//   const [visible, setVisible] = useState(false);

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };


//   const [current, setCurrent] = useState("home");

//   let dispatch = useDispatch();
//   let { user, cart } = useSelector((state) => ({ ...state }));

//   let history = useHistory();

//   const handleClick = (e) => {
//     // console.log(e.key);
//     setCurrent(e.key);
//   };

//   const logout = () => {
//     firebase.auth().signOut();
//     dispatch({
//       type: "LOGOUT",
//       payload: null,
//     });
//     history.push("/login");
//   };

//   return (
//     // <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
//     //   <Item key="home" icon={<AppstoreOutlined />}>
//     //     <Link to="/">Home</Link>
//     //   </Item>

//     //   <Item key="shop" icon={<ShoppingOutlined />}>
//     //     <Link to="/shop">Shop</Link>
//     //   </Item>

//     //   <Item key="cart" icon={<ShoppingCartOutlined />}>
//     //     <Link to="/cart">
//     //       <Badge count={cart.length} offset={[9, 0]}>
//     //         Cart
//     //       </Badge>
//     //     </Link>
//     //   </Item>

//     //   {!user && (
//     //     <Item key="register" icon={<UserAddOutlined />} className="float-right">
//     //       <Link to="/register">Register</Link>
//     //     </Item>
//     //   )}

//     //   {!user && (
//     //     <Item key="login" icon={<UserOutlined />} className="float-right">
//     //       <Link to="/login">Login</Link>
//     //     </Item>
//     //   )}

//     //   {user && (
//     //     <SubMenu
//     //       icon={<SettingOutlined />}
//     //       title={user.email && user.email.split("@")[0]}
//     //       className="float-right"
//     //     >
//     //       {user && user.role === "subscriber" && (
//     //         <Item>
//     //           <Link to="/user/history">Dashboard</Link>
//     //         </Item>
//     //       )}

//     //       {user && user.role === "admin" && (
//     //         <Item>
//     //           <Link to="/admin/dashboard">Dashboard</Link>
//     //         </Item>
//     //       )}

//     //       <Item icon={<LogoutOutlined />} onClick={logout}>
//     //         Logout
//     //       </Item>
//     //     </SubMenu>
//     //   )}

//     //   <span className="float-right p-1">
//     //     <Search />
//     //   </span>
//     // </Menu>


//     <nav className="menuBar ">
//       <div className="logo">
//         <Link to="/">LOGO</Link>
//       </div>
//       <div className="menuCon">
//         <div className="leftMenu">
//           <LeftMenu />
//         </div>
//         <div className="rightMenu">
//           <RightMenu />
//         </div>
//         <Button className="barsMenu" type="primary" onClick={showDrawer2}>
//           <span className="barsBtn"></span>
//         </Button>
//         <Drawer
//           title="Basic Drawer"
//           placement="right"
//           closable={false}
//           onClose={onClose2}
//           visible={state.visible}
//         >
//           {/* <Menu mode="horizontal">
//         <Menu.Item key="mail">
//           <a href="">Signin</a>
//         </Menu.Item>
//         <Menu.Item key="app">
//           <a href="">Signup</a>
//         </Menu.Item>
//       </Menu> */}


//           {/* <LeftMenu />
//         <RightMenu /> */}



//           {/* <Link href="#hero" title="Home" />
//               <Link href="#about" title="About" />
//               <Link href="#feature" title="Features" />
//               <Link href="#works" title="How it works" />
//               <Link href="#faq" title="FAQ" />
//               <Link href="#pricing" title="Pricing" />
//               <Link href="#contact" title="Contact" /> */}
//           {/* <LeftMenu />
//         <RightMenu /> */}


//           {/* 
//         <Link href="/" title="Home"/>
     

//         <Link href="shop" title="Shop"/>
     
//         <Link href="cart" title="Cart"/>

//         {!user && (
      
//           <Link href="/register" title="Register"/>
      
//       )}

//       {!user && (
   
//           <Link href="/login" title="Login"/>
       
//       )}


//      {user && user.role === "subscriber" && (
            
//               <Link href="/user/history"   title="Dashboard"/>
           
//           )}

//           {user && user.role === "admin" && (
          
//               <Link href="/admin/dashboard"  title="Dashboard"/>
          
//           )}
//           {user &&  <Link onClick={logout} title="Logout"/>} */}


//           {/* <Link href="cart"
//           <Badge count={cart.length} offset={[9, 0]}>
//             Cart
//           </Badge>
//         </Link> */}



//           <ul>

//             <li>
//               <Link to="/">Home</Link>
//             </li>

//             <li>
//               <Link to="/shop">Shop</Link>
//             </li>

//             <li>
//               <Link to="/cart">
//                 <Badge count={cart.length} offset={[9, 0]}>
//                   Cart
//                 </Badge>
//               </Link>
//             </li>
//             {!user && <li>
//               {!user && (

//                 <Link to="/register">Register</Link>

//               )}
//             </li>}


//             {!user && <li>
//               {!user && (

//                 <Link to="/login">Login</Link>

//               )}
//             </li>}


//             {user && user.role === "subscriber" && <li>
//               {user && user.role === "subscriber" && (

//                 <Link to="/user/history">Dashboard</Link>

//               )}
//             </li>}


//             {user && user.role === "admin" && <li>
//               {user && user.role === "admin" && (

//                 <Link to="/admin/dashboard">Dashboard</Link>

//               )}
//             </li>}


//             {user && <li> {user && <Link onClick={logout}>Logout</Link>}</li>}



//           </ul>






//         </Drawer>
//       </div>
//     </nav>



//     /* <div className="container-fluid">
//     <div className="header">
//       <div className="logo">
//         <i className="fas fa-bolt"></i>
//         <a href="http://google.com">Tech</a>
//       </div>
//       <div className="mobileHidden">
//         <Anchor targetOffset="65">
//           <Link href="#hero" title="Home" />
//           <Link href="#about" title="About" />
//           <Link href="#feature" title="Features" />
//           <Link href="#works" title="How it works" />
//           <Link href="#faq" title="FAQ" />
//           <Link href="#pricing" title="Pricing" />
//           <Link href="#contact" title="Contact" />
//         </Anchor>
//       </div>
//       <div className="mobileVisible">
//         <Button type="primary" onClick={showDrawer}>
//           <i className="fas fa-bars"></i>
//         </Button>
//         <Drawer
//           placement="right"
//           closable={false}
//           onClose={onClose}
//           visible={visible}
//         >
//           <Anchor targetOffset="65">
//             <Link href="#hero" title="Home" />
//             <Link href="#about" title="About" />
//             <Link href="#feature" title="Features" />
//             <Link href="#works" title="How it works" />
//             <Link href="#faq" title="FAQ" />
//             <Link href="#pricing" title="Pricing" />
//             <Link href="#contact" title="Contact" />
//           </Anchor>
//         </Drawer>
//       </div>
//     </div>
//     </div> */
//   );
// };

// export default Header;
import { Anchor, Badge, Menu } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from 'antd';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LeftMenu from "./LeftMenu"
import { Link } from "react-router-dom";
import RightMenu from './RightMenu'
import Search from "../forms/Search";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
const { SubMenu, Item } = Menu;
//const { Link } = Anchor;
const Header = () => {
  // state = {
  //   current: 'mail',
  //   visible: false
  // }

  const [state, setState] = useState(false);
  const showDrawer2 = () => {
    setState({
      visible: true,
    });
  };
  const onClose2 = () => {
    setState({
      visible: false,
    });
  };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    // <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    //   <Item key="home" icon={<AppstoreOutlined />}>
    //     <Link to="/">Home</Link>
    //   </Item>

    //   <Item key="shop" icon={<ShoppingOutlined />}>
    //     <Link to="/shop">Shop</Link>
    //   </Item>

    //   <Item key="cart" icon={<ShoppingCartOutlined />}>
    //     <Link to="/cart">
          // <Badge count={cart.length} offset={[9, 0]}>
          //   Cart
          // </Badge>
    //     </Link>
    //   </Item>

    //   {!user && (
    //     <Item key="register" icon={<UserAddOutlined />} className="float-right">
    //       <Link to="/register">Register</Link>
    //     </Item>
    //   )}

    //   {!user && (
    //     <Item key="login" icon={<UserOutlined />} className="float-right">
    //       <Link to="/login">Login</Link>
    //     </Item>
    //   )}

    //   {user && (
    //     <SubMenu
    //       icon={<SettingOutlined />}
    //       title={user.email && user.email.split("@")[0]}
    //       className="float-right"
    //     >
    //       {user && user.role === "subscriber" && (
    //         <Item>
    //           <Link to="/user/history">Dashboard</Link>
    //         </Item>
    //       )}

    //       {user && user.role === "admin" && (
    //         <Item>
    //           <Link to="/admin/dashboard">Dashboard</Link>
    //         </Item>
    //       )}

    //       <Item icon={<LogoutOutlined />} onClick={logout}>
    //         Logout
    //       </Item>
    //     </SubMenu>
    //   )}

      // <span className="float-right p-1">
      //   <Search />
      // </span>
    // </Menu>

<nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
   <div>
  <Link class="navbar-brand" to="/">Logo</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </div>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active ml-2">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/shop">Shop</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/cart">      
        <Badge count={cart.length} offset={[9, 0]}>
            Cart
          </Badge></Link>
      </li>

      {!user &&   <li class="nav-item">
        <Link class="nav-link" to="/register">Register</Link>
      </li>}
      <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <Search/>
    </form>
      {!user &&   <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>}

      {user &&
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {user.email && user.email.split("@")[0]}
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {user && user.role  === 'subscriber' && 
            <Link class="dropdown-item" to="/user/history">Dashboard</Link>
          }
          {user && user.role === 'admin' && 
          <Link class="dropdown-item" to="/admin/dashboard">Dashboard</Link>
          }
          

        
          <Link class="dropdown-item" onClick={logout}>Logout</Link>
      

        </div>
      
      </li>
}

    </ul>
  </div>
</nav>
 



    /* <div className="container-fluid">
    <div className="header">
      <div className="logo">
        <i className="fas fa-bolt"></i>
        <a href="http://google.com">Tech</a>
      </div>
      <div className="mobileHidden">
        <Anchor targetOffset="65">
          <Link href="#hero" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#feature" title="Features" />
          <Link href="#works" title="How it works" />
          <Link href="#faq" title="FAQ" />
          <Link href="#pricing" title="Pricing" />
          <Link href="#contact" title="Contact" />
        </Anchor>
      </div>
      <div className="mobileVisible">
        <Button type="primary" onClick={showDrawer}>
          <i className="fas fa-bars"></i>
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </Drawer>
      </div>
    </div>
    </div> */
  );
};

export default Header;