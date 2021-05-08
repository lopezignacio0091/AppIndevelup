import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, editUser } from '../../../../actions/FormularioActions';
import { abrirFormulario } from '../../../../actions/UsuarioActions';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MyTextField from './textField/MyTextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '2%',
    },
    botones: {
        marginLeft: '29%'
    }
}));

const FormularioUsuario = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { userEdit, editStatus } = useSelector(state => state.UsuarioReducer);

    const SignupSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/, "Invalid Name only letters").required('Required'),
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    name: (userEdit.nombre !== '') ? userEdit.nombre : '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        if (editStatus) {
                            dispatch(editUser(values, userEdit.id));
                        } else {
                            dispatch(createUser(values));
                        }
                        setSubmitting(false);
                        dispatch(abrirFormulario(false));
                        resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting }) => (
                    <Form>
                        <Grid container>

                            <Grid item xs={12} md={12} lg={12}>

                                <MyTextField className={classes.grid} name="name" type="text" label="Nombre" placeholder="Nombre" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }} />

                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>

                            <Grid container item xs={12} md={12} lg={12} className={classes.botones}>
                                <Grid item xs={6} md={6} lg={6}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                    >
                                        {editStatus ? 'Actualizar' : 'Guardar'}
                                    </Button>
                                </Grid>

                                <Grid item xs={6} md={6} lg={6}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        disabled={isSubmitting}
                                        onClick={() => { dispatch(abrirFormulario(false)); }}
                                    >
                                        Cancelar
                                    </Button>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </MuiPickersUtilsProvider>
    );
}

export default FormularioUsuario;