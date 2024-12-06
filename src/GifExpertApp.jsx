import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory) => {
    setCategories([ newCategory, ...categories])
    }


    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}

            <AddCategory
                // setCategories= {setCategories}
                onNewCategory={ (value) => onAddCategory(value)}// Porque esta emitiendo algo
            />

            {/* listado de gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* gif item */}

        </>
    )
}

// export const CounterApp = ({ value }) => {

//     const [counter, setCounter] = useState(value);

//     // Cuando se cambia el estado el componente se vuelve a renderizar

//     const handleAdd = () => { setCounter( counter + 1 );}
//     const handleSubstract = () => { setCounter( counter - 1 );}
//     const handleReset = () => { setCounter( value );}

//     return (
//         <>
//             <div>CounterApp</div>
//             <h2> {counter} </h2>

//             <button onClick={handleAdd}> +1 </button>
//             <button onClick={handleSubstract}> -1 </button>
//             <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
//         </>
//     );
// }
