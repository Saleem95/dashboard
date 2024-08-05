import {React,useState, useEffect} from 'react';
import Card from './Card';
import Chart from './BarChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import { FaClipboardList, FaTruck, FaBan, FaDollarSign } from 'react-icons/fa';
import DoughnutChart from './DoughnutChart';
import Menu from './Menu';
import Loading from './Loading';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="p-1 md:p-4">
      <h2 className="text-3xl mb-4 md:mb-10 text-white">Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Total Orders" value="75" icon={<FaClipboardList />} />
          <Card title="Total Delivered" value="70" icon={<FaTruck />} />
          <Card title="Total Cancelled" value="05" icon={<FaBan />} />
          <Card title="Total Revenue" value="$12k" icon={<FaDollarSign />} />
        </div>
        <div className="lg:col-span-1">
          <DoughnutChart />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 shadow rounded-lg bg-gray-800 text-white">
          <Chart />
        </div>
        <div className="lg:col-span-1 shadow rounded-lg bg-gray-800 text-white">
          <Menu />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <div className="lg:col-span-1">
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
