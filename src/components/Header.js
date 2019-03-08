import React from 'react';

export const Header = () => {

  return (
    <div className="d-flex justify-content-between col-12 pt-3 pb-2">
        <h1>ChatHub</h1>
        <a href="#" className="btn btn-dark my-auto text-white">Logout</a>
    </div>
  );
};