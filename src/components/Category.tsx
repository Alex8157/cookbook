import styles from '../styles/card.module.css'

interface CategoryProps {
    idCategory: number;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

const Category: React.FC<{ category: CategoryProps }> = ({ category }) => {
    return (
        <div className={styles.card}>
            <img src={category.strCategoryThumb}/>
            <h2>{category.strCategory}</h2>
            <p>{category.strCategoryDescription}</p>
        </div>
    )
}

export default Category;
