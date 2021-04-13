import React, { Fragment, useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Tooltip,
  Box,
  withStyles,
  isWidthUp,
  withWidth,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ImageIcon from "@material-ui/icons/Image";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MenuIcon from "@material-ui/icons/Menu";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";



import NavigationDrawer from "@shared/components/NavigationDrawer";
import ListsPredefined from "@logged_in/components/ListsPredefined";
import ListsUser from "@logged_in/components/ListsUser";
import styles from "./style";


function NavBar(props) {
  const { selectedTab, messages, classes, width, openAddBalanceDialog } = props;
  // Will be use to make website more accessible by screen readers
  const links = useRef([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const openMobileDrawer = useCallback(() => {
    setIsMobileOpen(true);
  }, [setIsMobileOpen]);

  const closeMobileDrawer = useCallback(() => {
    setIsMobileOpen(false);
  }, [setIsMobileOpen]);

  const openDrawer = useCallback(() => {
    setIsSideDrawerOpen(true);
  }, [setIsSideDrawerOpen]);

  const closeDrawer = useCallback(() => {
    setIsSideDrawerOpen(false);
  }, [setIsSideDrawerOpen]);

  const menuItems = [
    // {
    //   link: "/c/dashboard",
    //   name: "Dashboard",
    //   onClick: closeMobileDrawer,
    //   icon: {
    //     desktop: (
    //       <DashboardIcon
    //         className={
    //           selectedTab === "Dashboard" ? classes.textPrimary : "text-white"
    //         }
    //         fontSize="small"
    //       />
    //     ),
    //     mobile: <DashboardIcon className="text-white" />,
    //   },
    // },
    // {
    //   link: "/c/posts",
    //   name: "Posts",
    //   onClick: closeMobileDrawer,
    //   icon: {
    //     desktop: (
    //       <ImageIcon
    //         className={
    //           selectedTab === "Posts" ? classes.textPrimary : "text-white"
    //         }
    //         fontSize="small"
    //       />
    //     ),
    //     mobile: <ImageIcon className="text-white" />,
    //   },
    // },
    // {
    //   link: "/c/subscription",
    //   name: "Subscription",
    //   onClick: closeMobileDrawer,
    //   icon: {
    //     desktop: (
    //       <AccountBalanceIcon
    //         className={
    //           selectedTab === "Subscription"
    //             ? classes.textPrimary
    //             : "text-white"
    //         }
    //         fontSize="small"
    //       />
    //     ),
    //     mobile: <AccountBalanceIcon className="text-white" />,
    //   },
    // },
    // {
    //   link: "/",
    //   name: "Logout",
    //   icon: {
    //     desktop: (
    //       <PowerSettingsNewIcon className="text-white" fontSize="small" />
    //     ),
    //     mobile: <PowerSettingsNewIcon className="text-white" />,
    //   },
    // },
  ];
  return (
    <Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.appBarToolbar}>
          <Box display="flex" alignItems="center">
            <Hidden smUp>
              <Box mr={1}>
                <IconButton
                  aria-label="Open Navigation"
                  onClick={openMobileDrawer}
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Hidden>
            <Hidden xsDown>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="primary"
              >
                do
              </Typography>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="secondary"
              >
                Plans
              </Typography>
            </Hidden>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
          >
            {isWidthUp("sm", width) && (
              <Box mr={3}>

              </Box>
            )}

            <ListItem
              disableGutters
              className={classNames(classes.iconListItem, classes.smBordered)}
            >
              <Avatar
                alt="profile picture"
                src={`${process.env.PUBLIC_URL}/images/logged_in/profilePicture.jpg`}
                className={classNames(classes.accountAvatar)}
              />
              {isWidthUp("sm", width) && (
                <ListItemText
                  className={classes.username}
                  primary={
                    <Typography color="textPrimary">Username</Typography>
                  }
                />
              )}
            </ListItem>
          </Box>

        </Toolbar>
      </AppBar>
      <Hidden xsDown>
        <Drawer //  both drawers can be combined into one for performance
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={false}
        >
          <List>
            {menuItems.map((element, index) => (
              <Link
                to={element.link}
                className={classes.menuLink}
                onClick={element.onClick}
                key={index}
                ref={(node) => {
                  links.current[index] = node;
                }}
              >
                <Tooltip
                  title={element.name}
                  placement="right"
                  key={element.name}
                >
                  <ListItem
                    selected={selectedTab === element.name}
                    button
                    divider={index !== menuItems.length - 1}
                    className={classes.permanentDrawerListItem}
                    onClick={() => {
                      links.current[index].click();
                    }}
                    aria-label={
                      element.name === "Logout"
                        ? "Logout"
                        : `Go to ${element.name}`
                    }
                  >
                    <ListItemIcon className={classes.justifyCenter}>
                      {element.icon.desktop}
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

              </Link>
            ))}

          </List>
          <ListsPredefined userId={props.userId} />
          <ListsUser userId={props.userId} />
        </Drawer>
      </Hidden>
      <NavigationDrawer
        menuItems={menuItems.map((element) => ({
          link: element.link,
          name: element.name,
          icon: element.icon.mobile,
          onClick: element.onClick,
        }))}
        anchor="left"
        open={isMobileOpen}
        selectedItem={selectedTab}
        onClose={closeMobileDrawer}
      />
    </Fragment>
  );
}

// NavBar.propTypes = {
//   messages: PropTypes.arrayOf(PropTypes.object).isRequired,
//   selectedTab: PropTypes.string.isRequired,
//   width: PropTypes.string.isRequired,
//   classes: PropTypes.object.isRequired,
//   openAddBalanceDialog: PropTypes.func.isRequired,
// };

export default withWidth()(withStyles(styles, { withTheme: true })(NavBar));
