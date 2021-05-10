import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import CardDisplay from '../layout/about/cardDisplay/CardDisplay';

const About = () => {

    // eslint-disable-next-line no-unused-vars
    const dataAbout = [
        {
        titulo: 'React JS',
        descripcion:'Utilizado para manejo de Ui en Front End',
        image: require('../layout/about/img/react.png')
        },
        {
            titulo: 'Redux',
            descripcion:'Utilizado para manejo de estados en Front End',
            image:require('../layout/about/img/redux.png')
            },
            {
                titulo: 'Formik',
                descripcion:'Utilizado para formulararios en Front End',
                image:require('../layout/about/img/formik.png')
                },
        {
            titulo: 'Mirage JS',
            descripcion:'Utilizado para simular servidor en Front End',
            image:require('../layout/about/img/mirage.png')
            },
            {
                titulo: 'Net Core',
                descripcion:'Utilizado para interaccion con Back End',
                image:require('../layout/about/img/netcore.png')
                },
                {
                    titulo: 'SQL Serve',
                    descripcion:'Utilizado para almacenar los datos de la solucion',
                    image:require('../layout/about/img/sql.gif')
                    },
                    {
                        titulo: 'GitHUB',
                        descripcion:'Utilizado para control de versiones',
                        image: require('../layout/about/img/github.jpg')
                        },
                        {
                            titulo: 'Material UI',
                            descripcion:'Utilizado para componentes visuales Front End',
                            image:require('../layout/about/img/material.png')
                            }
]

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    About This App
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    A continuacion hacemos un detalle de los distintos componente y tecnologias que utilizamos para desarrollar esta solucion.
                </Typography>
            </Grid>
            {dataAbout.map((elem,index) => 
                <Grid key={index} item xs={3}>
                    <CardDisplay titulo={elem.titulo} descripcion={elem.descripcion} image={elem.image} />
                </Grid>
                )}
        </Grid>
    )
} 

export default About;