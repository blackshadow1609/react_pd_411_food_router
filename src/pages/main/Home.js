import './Home.css';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api';
import CategoryList from '../../components/categoryList/CategoryList';
import Preloader from '../../components/Preloader';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getAllCategories()
            .then((data) => {
                setCatalog(data.categories);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка загрузки категорий:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div className='wrap'>
            <CategoryList catalog={catalog} />
        </div>
    );
}

export default Home;