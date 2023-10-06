import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';
import styles from '../styles/layout.module.css';

const Layout = () => {
    const {category} = useParams();
    const {recipe} = useParams();

    return (
        <>
            <header className={styles.header}>
                <div className={styles.navigation}>
                    {category && <NavLink to="/">{'<<'} Main</NavLink>}
                    {recipe && <NavLink to={`/category/${category}`}>{'<<'} {category}</NavLink>}
                </div>
                <div className={styles.title}>
                    <h1>
                        {!category && !recipe && 'Main' }
                        {category && !recipe && category }
                    </h1>
                </div>
            </header>

            <main className={styles.main}>
                <Outlet />
                <ScrollToTopButton />
            </main>
        </>
    )
}

export default Layout