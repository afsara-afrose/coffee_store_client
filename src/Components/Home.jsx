import React, { useState } from 'react';
import { useLoaderData} from 'react-router';
import CoffeeCard from './coffeeCard';

const Home = () => {
    const initialCoffees=useLoaderData();
    const[coffees,setcoffees]=useState(initialCoffees);

    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            {
                coffees.map(coffee => <CoffeeCard
                    key={coffee._id}
                    coffees={coffees}
                    coffee={coffee}>
                    setcoffees={setcoffees}
                    </CoffeeCard>)
            } 

            </div>       
    );
};

export default Home;