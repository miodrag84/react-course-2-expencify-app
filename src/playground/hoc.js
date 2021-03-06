

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
<div>
 <h1> info </h1>
 <p>the info is: {props.info}</p>

</div>
);

const withAdminWarning = (WrappedComponent) => {
 return (props) => (
  <div>
      {props.isAdmin &&<p>this is private info do not share</p>}
      <WrappedComponent {...props}/>
  </div>
 );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
     <div>
         {props.isAuthenticated ? (
         <WrappedComponent {...props} /> ) : (
        <p>Please log in to view</p>
         )}
     </div>
    );
   };

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are details" />, document.getElementById('app'));