import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


// const PrivateRoute = ({ children, ...rest }) => {
//    //  const {children, ...rest} = props;
//     const { loginUser } = useAuth()
//     return (
//         <Route
//             {...rest}
//             render={({ location }) => loginUser ?
//                 children :
//                 <Redirect
//                     to={{
//                         pathname: '/login',
//                         state: { from: location }
//                     }}
//                 ></Redirect>}
//         >

//         </Route>
//     );
// };



   const PrivateRoute = ({ children, ...rest }) => {
   const { loginUser } = useAuth()
   return (
      <Route
         {...rest}
         render={({ location }) => loginUser ?
               children :
               <Redirect
                  to={{
                     pathname: '/login',
                     state: { from: location }
                  }}
               ></Redirect>}
      >

      </Route>
    );
};

export default PrivateRoute;