import React from 'react';
import Category from '../components/Category';
import { PostService } from '../API/PostService';
import { NavLink } from 'react-router-dom';
import styles from '../styles/homepage.module.css'

interface Category {
    idCategory: number;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

const Homepage = () => {
    const [categories, setCategories] = React.useState<Category[]>([]);

    React.useEffect(()=>{
        (async()=>{
            const data = await PostService.getCategories();
            setCategories(data.categories);
        })()
    },[])

    return (
        <div className={styles.home}>
            {categories.map((category)=>{
                return (
                    <NavLink key={category.idCategory} to={`/category/${category.strCategory}`}>
                        <Category category={category}/>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Homepage;