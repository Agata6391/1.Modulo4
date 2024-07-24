import React from "react";
import { Container, Typography, Box} from "@mui/material";

const AboutUs=()=>{
    return(
        <Container>
            <Box my={5}>
                <Typography variant="h4" gutterBottom>
                    Sobre Nosotros
                </Typography>
                Somos especialistas en creacion de paginas web de su empresa
            </Box>

        </Container> 
    );
};

export default AboutUs;