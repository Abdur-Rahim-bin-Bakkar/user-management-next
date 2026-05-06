import React from 'react';

const UsersPage = async () => {
    const res = await fetch('http://localhost:5000/user')
    const users = await res.json()
    console.log(users)
    return (
        <div>
            <h1>Total users: {users.length}</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>

                {
                    users.map(user =>
                        <div className='border-2 p-4 m-5 rou' key={user.id}>
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>
                        </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;