import React from 'react'
import { FaChartPie, FaClipboardList } from 'react-icons/fa';
import { IoIosArrowDropright } from "react-icons/io";
import { BsMenuButtonWideFill } from "react-icons/bs";


export default function Menu() {
  return (
    <div className='p-2 menu'>
      <ul>
        <li className="mb-6 text-start">
          <i><FaClipboardList className="shadow rounded-lg" /></i>
          <span>Goal</span>
          <i className='sicon'><IoIosArrowDropright /></i>
        </li>
        <li className="mb-6 text-start">
          <i><FaChartPie className="shadow rounded-lg" /></i>
          Popular Dishes
          <i className='sicon'><IoIosArrowDropright /></i>
        </li>
        <li className="mb-6 text-start">
          <i><BsMenuButtonWideFill className="shadow rounded-lg" /></i>
          Menus
          <i className='sicon'><IoIosArrowDropright /></i>
        </li>

      </ul>

    </div>
  )
}
