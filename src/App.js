import React,{useEffect, useState} from 'react';
import Recipe from './components/Recipe';

const App = () => {

    const APP_ID = 'adf620f6';
    const APP_KEY = '3354b1dfea8e0ad67b92c8f52c240bf1';
    const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const [recipes, setRecipes] = useState([]);

    useEffect( async () => {
        getRecipes();
    }, [])

    const getRecipes = async () => {
        const response = await fetch(exampleRequest)
        const data = response.json();
        setRecipes(data.hits);
    }

    return(
        <div>
            <h1>Recipe App</h1>

            <form className="search-form" >
                <input className="search-bar" type="text"></input>
                <button className="search-button" type="submit">Search</button>
            </form>

            {recipes.map( recipe => (<Recipe />))}
        </div>
    )
}

export default App;