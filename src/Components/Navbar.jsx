import React from 'react';

const Navbar = (props) => {

    const { name, rans } = props;

    return (
        <div className='bg-red-300 shadow-md'>
            <h1>Name: {name}</h1>
            <p>Rans: {rans} </p>
        </div>
    );
};

export default Navbar;