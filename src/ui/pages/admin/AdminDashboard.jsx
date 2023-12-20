import React from "react";

const AdminDashboard = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <div className="card w-25 bg-primary text-white shadow mb-3">
            {/* Updated classes */}
            <div className="card-body">
              <h2 className="card-title">Products</h2>
              <h3 className="card-subtitle mb-2">100</h3>
            </div>
          </div>
          <div className="card w-25 bg-primary text-white shadow mb-3">
            {/* Updated classes */}
            <div className="card-body">
              <h2 className="card-title">Products</h2>
              <h3 className="card-subtitle mb-2">100</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
