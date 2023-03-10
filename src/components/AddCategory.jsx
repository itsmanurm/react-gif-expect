import React from 'react';
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }


    const onSubmit = () => 
        event.preventDefault(); //evita el refrezco de la pagina
        if( inputValue.trim().length <= 1 )return;
        //setCategories((categories) => [inputValue,...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (

    <form onSubmit={onSubmit}>  
     {/* para que se refresque cuando preciona enter */}
    <input
        type='text'
        placeholder='Buscar gif'
        value= { inputValue }
        onChange={onInputChange}
    />
    </form>
  )
}
