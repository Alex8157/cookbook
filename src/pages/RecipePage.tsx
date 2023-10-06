import React from 'react';
import { useParams } from 'react-router-dom';
import { PostService } from '../API/PostService';
import styles from '../styles/recipePage.module.css'

interface RecipeDetails {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: string | null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strMeasure16: string;
    strMeasure17: string;
    strMeasure18: string;
    strMeasure19: string;
    strMeasure20: string;
    strSource: string;
    strImageSource: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;
}

interface Ingredient {
    ingredient: string;
    measure: string;
}

const RecipePage = () => {
    const {recipe} = useParams();
    const [recipeDetails, setRecipeDetails] = React.useState<RecipeDetails | null>(null);
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

    React.useEffect(()=>{
        if (recipe) {
            const id = parseInt(recipe);
            if (!isNaN(id)) {
                (async()=>{
                    const data = await PostService.getRecipe(id);
                    setRecipeDetails(data.meals[0]);

                    let updatedIngredients:Ingredient[] = [];
                    for (let i = 1; i <= 20; i++) {
                        const ingredient = data.meals[0][`strIngredient${i}`];
                        const measure = data.meals[0][`strMeasure${i}`];
                        
                        if (ingredient && measure) {
                            updatedIngredients = [...updatedIngredients, { ingredient, measure }];
                        }
                    }
                    setIngredients(updatedIngredients);
                })();
            }
        }
    },[recipe]);

    return (
        <article className={styles.recipe}>
            {recipeDetails && <>
                <img src={recipeDetails.strMealThumb}/>
                <div className={styles.details}>
                    <h1>{recipeDetails.strMeal}</h1>
                    <h3>Ingredients:</h3>
                    <ul className={styles.ingredients}>
                        {ingredients.map((item, index) => (
                            <li key={index}>{`${item.ingredient}: ${item.measure}`}</li>
                        ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>
                        {recipeDetails.strInstructions}
                    </p>
                </div>
            </>}
        </article>
    )
}

export default RecipePage;