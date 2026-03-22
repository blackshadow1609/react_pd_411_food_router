import Meal from './Meal';
import './MealList.css';


function MealList({ meals }) {
    return (
        <div className='list'>
            {
                meal => (<Meal key={meal.idMeal} {...meal} />
            }
        </div>
    )
}
export default MealList;