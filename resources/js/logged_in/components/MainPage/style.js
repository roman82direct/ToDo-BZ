const styles = (theme) => ({
    main: {
      marginLeft: theme.spacing(37),
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
});

export default styles;