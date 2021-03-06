/* 20.2.1 컴포넌트 만들기 */
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Menu = () => {

//     return (
//         <ul>
//             <li>
//                 <Link to="/red">Red</Link>
//             </li>
//             <li>
//                 <Link to="/blue">Blue</Link>
//             </li>
//         </ul>
//     );
// };

// export default Menu;

/* 20.4.2 Users, UsersContainer 컴포넌트 준비하기 */
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <ul>
            <li>
                <Link to="/red">Red</Link>
            </li>
            <li>
                <Link to="/blue">Blue</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    );
};

export default Menu;