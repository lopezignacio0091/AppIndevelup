import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {  Select  } from 'formik-material-ui';
import { useField, Field } from 'formik';

const SelectItems = ({ listItems,title, atribute, ...props }) => {
    const [field] = useField(props);

    return (
        <FormControl >
            <InputLabel htmlFor={title}>{title}</InputLabel>
            <Field
                component={Select}
                {...props}
                {...field}
            >
                {listItems.length > 0 && listItems.map((item, index) => (
                    <MenuItem  value={index} key={index}>{item[atribute]}</MenuItem>
                    ))
                }
            </Field>
        </FormControl>
    );
}

export default SelectItems;
