import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Stage : Assistant technicien informatique et s??curit??
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Office National de la M??t??orologie, Nouakchott-Mauritanie.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            D??veloppeur Laravel
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            AMSA, Dakar- S??n??gal.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <h3>
              Conception et r??alisation d???un site de e-commerce pour fournitures
              scolaires avec Laravel :
            </h3>
            <b>T??ches effectu??es :</b>
            <ul>
              <li>
                Mod??lisation UML : diagramme de classe, diagramme de cas
                d???utilisation
              </li>
              <li>
                Conception de la base de donn??es MySQL et mise en ??uvre des
                mod??les avec l???ORM Eloquent
              </li>
              <li>Mise en place du routage et conception des templates</li>
              <li>Utilisation de Bootstrap pour le design du site</li>
              <li>Mise en ??uvre du pattern MVC pour la r??alisation</li>
              <a href="http://www.amsafourniture.com/">
                http://www.amsafourniture.com/
              </a>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Op??rateur Fibre optique
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            CAMUSAT, Dakar-S??n??gal.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            D??veloppeur JQueryMobile & Formateur Math-Info
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            AEMST, Dakar-S??n??gal.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Soutien et coaching scolaire aux ??tudiants de la licence 1 en
                math et informatique
              </li>
              <li>
                D??veloppement d???une application de la gestion de l???archive de
                l???ucad avec JQueryMobile
              </li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Op??rateur de saisie
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Ivalis France.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            des missions partout en Ile-de-France
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Contr??le et enregistrement informatique des articles r??ceptionn??s
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Amazon ORY4, Br??tigny-sur-Orge France.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
