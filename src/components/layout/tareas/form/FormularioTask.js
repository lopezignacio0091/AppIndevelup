import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, createTask } from '../../../../actions/FormularioActions';
import { abrirFormularioTask } from '../../../../actions/TaskActions';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Grid, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
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

const FormularioTask = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { taskEdit, editStatus } = useSelector(state => state.TaskReducer);
    const { users } = useSelector(state => state.UsuarioReducer);
    const SignupSchema = Yup.object().shape({
        codigo: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
        descripcion: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/, "Invalid SurName only letters").required('Required'),
        duracionPlanificada: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[0-9]+$/, "Invalid only numbers").required('Required'),
        //usuarioId:  Yup.required('Required'),
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    codigo: (taskEdit.codigo !== '') ? taskEdit.codigo : '',
                    descripcion: (taskEdit.descripcion !== '') ? taskEdit.descripcion : '',
                    duracionPlanificada: (taskEdit.duracionPlanificada !== '') ? taskEdit.duracionPlanificada : '',
                    usuarioId: (!taskEdit.usuarioId) ? '' : taskEdit.usuarioId,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        if (editStatus) {
                            dispatch(editTask(values, taskEdit.id));
                        } else {
                            dispatch(createTask(values));
                        }
                        setSubmitting(false);
                        dispatch(abrirFormularioTask(false));
                        resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting, setFieldValue, initialValues }) => (
                    <Form>
                        <Grid container>

                            <Grid item xs={12} md={12} lg={12}>

                                <MyTextField className={classes.grid} name="codigo" type="text" label="Codigo" placeholder="Codigo" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }} />

                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <MyTextField className={classes.grid} name="descripcion" type="text" label="Descripcion" placeholder="Descripcion" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }} />

                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <MyTextField className={classes.grid} name="duracionPlanificada" type="text" label="Duracion Planificada" placeholder="Duracion Planificada" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ContactMailRoundedIcon />
                                        </InputAdornment>
                                    ),
                                }} />

                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <FormControl className={classes.grid}>
                                    <InputLabel htmlFor="usuarioId">Usuario Asignado</InputLabel>
                                    <Field
                                        component={Select}
                                        name='usuarioId'
                                        inputProps={{
                                            id: 'usuarioId',
                                        }}
                                        defaultValue={initialValues.usuarioId}
                                        onChange={value => setFieldValue('usuarioId', value.target.value)}
                                    >
                                        {users.length > 0 && users.map((item, index) => (
                                            <MenuItem value={Number(item.id)} key={index}>{item.name}</MenuItem>
                                        ))
                                        }
                                    </Field>
                                </FormControl>

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
                                        onClick={() => { dispatch(abrirFormularioTask(false)); }}
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

export default FormularioTask;