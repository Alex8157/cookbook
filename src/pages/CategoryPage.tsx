import React from 'react';
import { useParams } from 'react-router-dom';
import { PostService } from '../API/PostService';
import { NavLink } from 'react-router-dom';
import Recipe from '../components/Recipe';
import styles from '../styles/categoryPage.module.css'

interface Recipe {
    idMeal: number;
    strMeal: string;
    strMealThumb: string;
}

const CategoryPage = () => {
    const {category} = useParams();
    const [recipes, setRecipes] = React.useState<Recipe[]>([]);

    React.useEffect(()=>{
        if (category) {
            (async()=>{
                const data = await PostService.getCategory(category);
                setRecipes(data.meals);
            })();
        }
    },[])

    if (!category) {
        return null; 
    }

    return (
        <div className={styles.category}>
            {recipes.map((recipe)=>{
                return (
                    <NavLink key={recipe.idMeal} to={`recipe/${recipe.idMeal}`}>
                        <Recipe recipe={recipe}/>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default CategoryPage;