// Higher Order Component (HOC) - A component that renders another component

// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>Private</p> }
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuth ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>Auth Required</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="yoyoyoyo" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="yoyoyoyo" />, document.getElementById('app'));