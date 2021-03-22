/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import map from "../images/HTML USE IMAGE/map.png"
import Input from "@material-ui/core/Input"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Header from "./header"
import "./layout.css"
import { SettingsSystemDaydreamRounded } from "@material-ui/icons"
import { white } from "@material-ui/core/colors"
import { Button } from "@material-ui/core"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import socialMedia  from "../images/social-media.png";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: 0,
    padding: 0,
    "& .MuiInput-underline": {
      borderBottom: "1px solid white",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid pink",
    },
    display: "flex",
    flexDirection: "column",
  },
  type: {
    marginLeft: "1em",
  },
})
const Layout = ({ children }) => {
  const classes = useStyles()
  const [name, setName] = useState("")
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function handleSignUp() {
    alert(" Thank you for contacting us! We will get back to you shortly")
  }
// wrapper component starts here
  return (
    <Container maxWidth="xl">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        class="scroller"
        onClick={() =>
          document.getElementById("home__")
            ? document.getElementById("home__").scrollIntoView({
                behavior: "smooth",
              })
            : document.getElementById("pageshome")
            ? document.getElementById("pageshome").scrollIntoView({
                behavior: "smooth",
              })
            : document.getElementById("videodemo").scrollIntoView({
                behavior: "smooth",
              })
        }
        style={{ zIndex: 10 }}
      >
        <FontAwesomeIcon
          icon={faChevronUp}
          size="2x"
          style={{ cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faChevronUp}
          size="2x"
          style={{ cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faChevronUp}
          size="2x"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <main>{children}</main>
        <center
          style={{
            top: "10em",
            position: "relative",
            height: "fit-content",
            overflowY: "hidden",
          }}
          id="footercenter"
        >
          <footer style={{ height: "70em", overflowY: "hidden" }}>
            <center>
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "2em",
                  fontFamily: "twcenmt",
                  height: "fit-content",
                }}
              >
                How to Contact Us
              </h5>
            </center>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
              id="footer"
            >
              <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <img src={map} id="map" />
                <center>
                  <img src={socialMedia} style={{ width: "10em" }} />
                </center>
              </div>
              <div style={{ marginLeft: "3%" }}>
                <p style={{ textAlign: "center", marginBottom: 0 }}>
                  Leave your contact details with us. We will contact you
                </p>
                <p style={{ textAlign: "center" }}>
                  within an hour for a detailed consultation.
                </p>
                <form
                  id="registration-form"
                  onSubmit={handleSignUp}
                  className={classes.root}
                >
                  <Input
                    defaultValue="Name"
                    inputProps={{ "aria-label": "description" }}
                    style={{ color: "white" }}
                  />
                  <Input
                    defaultValue="Email"
                    inputProps={{ "aria-label": "description" }}
                    style={{ color: "white" }}
                  />
                  <Input
                    defaultValue="Message"
                    inputProps={{ "aria-label": "description" }}
                    style={{ color: "white", marginBottom: "1em" }}
                  />
                  <Button type="submit" variant="contained">
                    Leave Message
                  </Button>
                </form>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <div>
                    <p style={{ textAlign: "left", marginTop: "1em" }}>
                      Phone : +91-945-5568-341{" "}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Address: DLF Promenade 62 Street, New Delhi India 160087
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Open hours : Daily, 8:00am - 9:00 pm
                    </p>
                  </div>
                  <div>
                    <div style={{ marginTop: "1em" }}>
                      <form
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          flexDirection: "column",
                          justifyContent: "space-around",
                        }}
                        className={classes.root}
                      >
                        <Input
                          defaultValue="Email"
                          inputProps={{ "aria-label": "description" }}
                          style={{ color: "white", marginBottom: "1em" }}
                        />
                        <Button variant="contained">
                          Subscribe to Updates
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </center>
      </div>
    </Container>
  )
}

// wrapper component ends here

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
