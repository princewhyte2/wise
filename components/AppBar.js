import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { Button, Container } from "@mui/material"
import WiseLogo from "./svg/WiseLogo"

const pages = ["About Us", "Connect", "Participate", "Contact Us"]

export default function DenseAppBar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
      }}
      position="sticky"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WiseLogo />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button key={page} sx={{ mx: 2, color: "#000066", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { md: "flex", xs: "none" } }}>
            <Button color="secondary" variant="outlined" sx={{ mx: 1, color: "#000066", display: "block" }}>
              Sign In
            </Button>
            <Button variant="contained" color="primary" sx={{ mx: 1, display: "block" }}>
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
