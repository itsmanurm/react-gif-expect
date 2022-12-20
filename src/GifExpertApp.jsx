import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

// comando rafc
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {

        if ( categories.includes( newCategory )){
            return;
        }

        setCategories( cat => [newCategory,...categories]);
    }

  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategory 
        
        onNewCategory = { onAddCategory }
        currentCategories = { categories }
    />

        {
         categories.map( (category) => (
            <GifGrid key={ category } category={ category }/>
         ))
        }
        {/* <li>ABC</li> */}

    </>
  )
}
