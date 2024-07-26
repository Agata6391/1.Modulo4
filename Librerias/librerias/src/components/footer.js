import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
const Footer = ()=>{
    return(
        <Box mt={5} py={3} bgcolor="primary.main" color="white">
            <Container>
                <Typography variant="body1" align="center">© 2024 DiseñoWebMosca. Todos los derechos reservados.</Typography>
            </Container>
            <Box mt={2} display="flex" justifyContent="center">
                <Link href="#" color="inherit" style={{margin: "0 10px"}}>Facebook</Link>
                <Link href="#" color="inherit" style={{margin: "0 10px"}}>X Twitter</Link>
                <Link href="#" color="inherit" style={{margin: "0 10px"}}>Instagram</Link>
            </Box>
        </Box>
    );
};
export default Footer;