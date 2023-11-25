import React, { createContext, useContext, useState } from 'react';

// Define the default user object
export const user = {
    email: '',
    password: '',
    isLoggedIn: false,
};

// Define the default logOut function
export const defaultLogOut = () => {
    user.isLoggedIn = false;
    // You can customize this function based on your application's needs
};

// Create the React context with default values
export const AppContext = createContext({
    user: user,
    logOut: defaultLogOut,
});
