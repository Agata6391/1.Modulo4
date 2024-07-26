import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
const Contact = ()=>{
    return(
        <Container>
            <Box my={5}>
                <Typography variant="h4" gutterBottom>Contacto</Typography>
                <form noValidate autoComplete="off">
                    <TextField fullWidth label="Nombre" margin="normal"></TextField>
                    <TextField fullWidth label="Email" margin="normal"></TextField>
                    <TextField fullWidth label="Mensaje" margin="normal" multiline rows={4}/>
                    <Button variant="contained" color="primary" style={{marginTop: "20px"}}>Enviar</Button>
                </form>
            </Box>
        </Container>
    );
};
export default Contact;