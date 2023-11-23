import React, { useContext } from 'react';
import { AuthContext } from '../../SheardItem/AuthProvider/AuthProvider';

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1 className="text-3xl font-bold mb-1">Hi! Welcome</h1>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;