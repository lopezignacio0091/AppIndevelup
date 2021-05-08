import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask,setEditTask} from '../../../actions/TaskActions';
import MUIDataTable from "mui-datatables";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const TareaTable = () => {

  const {tasks} = useSelector(state => state.TaskReducer);
  const dispatch = useDispatch();




  const columns = ["Id", "Codigo", "Descripcion", "Duracion Planificada", "Usuario Asignado",
    {
      name: "Delete",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {
              dispatch(deleteTask(tableMeta.rowData[0]))
            }}>
              <DeleteIcon />
            </IconButton>
          );
        }
      }
    },
    {
      name: "Edit",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => dispatch(setEditTask({ 'id': tableMeta.rowData[0], 'codigo': tableMeta.rowData[1], 'descripcion': tableMeta.rowData[2], 'duracionPlanificada': tableMeta.rowData[3], 'usuario': tableMeta.rowData[4]}))}>
              <EditIcon />
            </IconButton>
          );
        }
      }
    }];
  const options = {
    filter: true,
    filterType: "dropdown",
    selectableRows: false,
  };

  return (
    <div style={{ width: '100%', margin: '4%' }}>

      <MUIDataTable
        title={"Listado Tarea"}
        data={tasks.map(e => {
          return [
            e.id,
            e.codigo,
            e.descripcion,
            e.duracionPlanificada,
            (e.usuario != null) ? e.usuario.nombre : ""
          ]
        })}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default TareaTable;