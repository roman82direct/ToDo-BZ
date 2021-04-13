const styles = (theme) => ({
    numberInput: {
      width: 120,
      [theme.breakpoints.down("sm")]: {
        width: 80,
      },
      "@media (max-width: 350px)": {
        width: 65,
      },
    },
    numberInputInput: {
      padding: "9px 14.5px",
      "@media (max-width: 380px)": {
        padding: "9px 8.5px",
      },
      "@media (max-width: 350px)": {
        padding: "9px 6.5px",
      },
    },
    listItem: {
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(4),
      },
      paddingLeft: 100,
    },
    AccordionDetails: {
      paddingTop: theme.spacing(0),
      justifyContent: "flex-end",
    },
    dBlock: {
      display: "block",
    },
  });
 


export default styles;