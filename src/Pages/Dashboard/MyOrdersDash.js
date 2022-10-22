import React from 'react';

const MyOrdersDash = () => {
  return (
    <div className="overflow-x-auto">
      <h1 className='text-2xl text-center py-2'>My Orders History</h1>
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default MyOrdersDash;