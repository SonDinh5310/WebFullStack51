import React, { useState, useContext } from "react";

import { data } from "../data/data.js";

//b1. Khoi tao context api
const PersonContext = React.createContext();

const ContextApi = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        //handle
        setPeople((people) => {
            return people.filter((p) => p.id !== id);
        });
    };

    return (
        // b2. Khoi tao component cha
        <PersonContext.Provider value={{ removePerson, people }}>
            <h3>Learning Context API</h3>
            <UserList />
        </PersonContext.Provider>
    );
};

const UserList = () => {
    // b3. Lay du lieu tu context Provider de su dung
    const peopleData = useContext(PersonContext);
    console.log(peopleData);
    return (
        <div>
            {peopleData.people.map((people) => {
                return (
                    <SinglePerson key={people.id} {...people}></SinglePerson>
                );
            })}
        </div>
    );
};

const SinglePerson = ({ name, id }) => {
    const { removePerson } = useContext(PersonContext);
    return (
        <div className="Person">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    );
};

export default ContextApi;
