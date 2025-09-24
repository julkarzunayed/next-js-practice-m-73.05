
import React from 'react'
import MealSearchInput from './components/MealSearchInput';

export const metadata = {
  title: "All Meals",
  description: "Meals Loaded from all mealDB.",
};


export default async function MealsPage({ searchParams }) {

    const { search } = await searchParams;

    //data fetching function
    const fetchMeals = async () => {
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            );
            const data = await res.json();
            // setMeals(data?.meals || [])
            return data?.meals || [];
        } catch (error) {
            console.log(error)
            // setMeals([])
            return [];
        }
    }

    const meals = await fetchMeals()

    return (
        <div>
            {/* <div className="p-5">
                <input 
                // value={search}
                className='border' 
                onChange={(e) => setSearch(e.target.value)} 
                type="text" />
            </div> */}

            <MealSearchInput />


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto p-5">
                {meals?.map(meal =>
                    <div key={meal?.idMeal} className="p-2">
                        <img src={meal?.strMealThumb} alt="" />
                        {meal?.strMeal}
                    </div>
                )}
            </div>
        </div>
    )
}
