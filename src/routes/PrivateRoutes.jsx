import React, { useContext } from 'react'
import { userContext } from '../Components/ContextProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(userContext);
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' replace={true}></Navigate>
    }

}

export default PrivateRoutes