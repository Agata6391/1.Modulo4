import React from "react";
import { Container,Typography, Grid,Paper,Box } from "@mui/material";
import { Description } from "@mui/icons-material";

const services = [
    {title:"Dise/o Web", description:"Creacion de sitios web Modernos"},
    {title:"Desarollo de Aplicaciones", description:"Soluciones a medida para tu negocio"},
    {title:"SEO" ,description:"Mejoramos la visibilidad de tu sitio web con los motores de busqueda" },
];

const Services =()=>{
    return(
        <Container>
            <Box my={5}>
                <Typography variant="h4" gutterBottom>
                    Servicios
                </Typography>
                <Grid container spacing={3}>
                    {services.map((services, index)=>
                    <Grid item xs={12} md={4} key={index}>
                        <Paper elevation={3} style={{padding:'20px'}}>
                            <Typography variant="h6">{services.title}</Typography>
                            <Typography variant="body1">{services.description}</Typography>
                        </Paper>
                    </Grid>
                    )}
                </Grid>
            </Box>
        </Container>
    );
};
 export default Services;