import React from "react";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";

const proyects = [
{title:"Proyecto1", image:"https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/d/de/EldraziConcept4.jpg/revision/latest/scale-to-width-down/1000?cb=20230706064209.png"},
{title:"Proyecto2", image:"https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/0/01/EldraziConcept.jpg/revision/latest/scale-to-width-down/1000?cb=20230706020829"},
];

const Portafolio=()=>{
    return(
        <Container>
        <Box my={5}>
            <Typography variant="h4" gutterBottom>
                Proyectos
            </Typography>
            <Grid container spacing={3}>
                {proyects.map((proyects, index)=>(
                    <Grid item xs={12} md={6} key={index}>
                        <Paper elevation={3}
                         style={{
                            backgroundImage:'url($(proyect.image))',
                            backgroundSize:"cover",
                            height:'200px',
                            display:'flex',
                            alignItems:'flex-end',
                            padding:'20px'
                        }}>
                            <Typography variant="h6"style={{color:'#fff'}}>
                                {proyects.title}
                            </Typography>
                            
                        </Paper>
                    </Grid>

                ))}
            </Grid>
        </Box>    
    </Container>
    );
};
export default Portafolio;