import React, { useState } from 'react';
import List from './List/List';
import { data } from './StaticData/Data';

function Home() {
    const [people, setPeople] = useState(data);

    const clearAll = () => {
        setPeople([]); // Clear the list
    };

    return (
        <main>
            <section className="container">
                <h3>Birthday today</h3>
                <List people={people} />
                <button onClick={clearAll}>Clear all</button>
            </section>
        </main>
    );
}

export default Home;
