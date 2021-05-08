import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser,setEditUser } from '../../../../actions/UsuarioActions';
import {  useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import {  IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const UserTable = () => {

    const {users} = useSelector(state => state.UsuarioReducer);
    const dispatch = useDispatch();

    const columns = ["Id", "Name",
    {
        name: "Delete",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {
                    dispatch(deleteUser(tableMeta.rowData[0]))
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
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => dispatch(setEditUser({'id':tableMeta.rowData[0],'nombre':tableMeta.rowData[1]}))}>
                    <EditIcon />
                </IconButton>
            );
          }
        }
      }
];

    const options = {
        filter: true,
        selectableRows: false,
    };

    return (
        <div style={{    width: '100%', margin: '4%'}}>

            <MUIDataTable
                title={"Listado Usuarios"}
                data={users.map(e=>{
                    return [
                        e.id,
                        e.nombre,
                    ]
                })}
                columns={columns}
                options={options}
            />
        </div>
    );
}

export default UserTable;