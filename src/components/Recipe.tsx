import styles from '../styles/card.module.css'

interface RecipeProps {
    idMeal: number;
    strMeal: string;
    strMealThumb: string;
}

const Recipe: React.FC<{ recipe: RecipeProps }> = ({ recipe }) => {
    return (
        <div className={styles.card}>
            <img src={recipe.strMealThumb}/>
            <h2>{recipe.strMeal}</h2>
        </div>
    )
}

export default Recipe;
