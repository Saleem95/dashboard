import React from 'react';

const RecentOrders = () => {
  const orders = [
    { id: 1, customer: 'Saleem', date: '2024-07-30', total: '$120.00', profilePhoto: 'images/pic1.jpg', status: 'Delivered' },
    { id: 2, customer: 'Sanju', date: '2024-07-29', total: '$85.00', profilePhoto: 'images/pic2.jpg', status: 'Pending' },
    { id: 3, customer: 'Akhil', date: '2024-07-28', total: '$90.00', profilePhoto: 'images/pic1.jpg', status: 'Cancelled' },
    { id: 4, customer: 'Shivu', date: '2024-07-27', total: '$110.00', profilePhoto: 'images/pic2.jpg', status: 'Delivered' },
  ];

  return (
    <div className="orders-menu bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-lg md:text-xl font-medium mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b py-2"></th>
              <th className="border-b py-2">Customer</th>
              <th className="border-b py-2">Date</th>
              <th className="border-b py-2">Total</th>
              <th className="border-b py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="border-b py-2"><img
                  src={order.profilePhoto}
                  alt={order.customer}
                  className="w-12 h-12 rounded-full mr-3"
                /></td>
                <td className="border-b py-2">{order.customer}</td>
                <td className="border-b py-2">{order.date}</td>
                <td className="border-b py-2">{order.total}</td>
                <td className="border-b py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;

