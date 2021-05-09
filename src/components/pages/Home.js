import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Card, Paper, Avatar, CardContent,Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import styles from './styles';

const Home = () => {
    const classes = styles();

    return (
        <Grid className={classes.Home} container direction="row" justify="center" alignItems="center" >
            <Card>
                <CardContent>
                    <Paper className={classes.paper}>
                        <Grid container direction="row" justify="center" alignItems="center" style={{ margin: '15px' }}>
                            <Grid container item xs={12} md={12} className={classes.gridRow} justify="center" alignItems="center"  >
                                <Typography  gutterBottom variant="h2">
                                    Bienvenido Gestion Tareas <MenuBookIcon></MenuBookIcon>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Home;