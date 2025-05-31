import React from 'react';
import { useRouteLoaderData } from 'react-router';
import CoffeeCard from './coffeeCard';

const Home = () => {

    const coffees = useRouteLoaderData('homeData');
    console.log(coffees);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            {
                coffees.map(coffee => <CoffeeCard
                    key={coffee._id}
                    coffees={coffees}
                    coffee={coffee}></CoffeeCard>)
            }        </div>
    );
};

export default Home;