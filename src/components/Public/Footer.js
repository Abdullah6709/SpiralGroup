import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Typography, Stack, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Autofooter from "../../assets/images/Autofooter.jpg";
import ftlogo from '../../assets/images/new logo.jpeg';

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "auto",
        backgroundImage: `url(${Autofooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Grid container sx={{ m: 2, p: "40px 20px", zIndex: 2 }}>
        {/* Logo & Social */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" color="white" fontWeight="bold" sx={{ mb: 3 }}>
            SPIRALE GROUP
          </Typography>
          <Typography  variant="subtitle2" color="white" sx={{ mb: 3 }} >
    We provide educational opportunities and scholarships to empower learners and build a brighter future.
          </Typography>

        
          <Stack direction="row" spacing={3} sx={{ mb: 5 }}>
            <FacebookIcon sx={{ color: "white" }} />
            <TwitterIcon sx={{ color: "white" }} />
            <YouTubeIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
          </Stack>

         <Box>
            <img
               src={ftlogo}
               alt="footerlogo"
               height="100px"
               width="150px"
            />
         </Box>
        

        </Grid>

        {/* Important Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textDecoration: "underline",
              mb: 2,
              textDecorationThickness: "2px",
              textUnderlineOffset: "5px",
            }}
          >
            <Typography variant="h4" color="white">
              Important Links
            </Typography>
          </Box>

          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
            { label: "Blog", to: "/blog" },
            { label: "Career", to: "/career" },
            { label: "Contact", to: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              component={RouterLink}
              to={link.to}
              underline="hover"
              color="white"
              variant="h5"
              sx={{ display: "block", mb: 2 }}
            >
              {link.label}
            </Link>
          ))}
        </Grid>

        {/* Another Section */}
       <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textDecoration: "underline",
              mb: 2,
              textDecorationThickness: "2px",
              textUnderlineOffset: "5px",
            }}
          >
            <Typography variant="h4" color="white">
              Another Section
            </Typography>
          </Box>

          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
            { label: "Blog", to: "/blog" },
            { label: "Career", to: "/career" },
            { label: "Contact", to: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              component={RouterLink}
              to={link.to}
              underline="hover"
              color="white"
              variant="h5"
              sx={{ display: "block", mb: 2 }}
            >
              {link.label}
            </Link>
          ))}
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textDecoration: "underline",
              mb: 2,
              textDecorationThickness: "2px",
              textUnderlineOffset: "5px",
            }}
          >
            <Typography variant="h4" color="white">
              Contact Us
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ mb: 2 }} color="white">
           3rd Floor, Bhavani Complex, Sector-27,
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }} color="white">
           Noida-201304.
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }} color="white">
            Phone: +123456789
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
