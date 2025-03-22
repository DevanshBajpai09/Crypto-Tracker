import React from "react";
import { motion } from "framer-motion";
import DashboardNavbar from "./DashboardNavbar";

const Dashboard = () => {
  const cardVariants = {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <>
      <DashboardNavbar />
      <div className="p-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="flex items-center justify-center h-24 rounded-lg bg-white shadow-lg border border-gray-200"
            >
              <p className="text-2xl text-gray-600">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16M4 12h16"
                  />
                </svg>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Large Box */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="flex items-center justify-center h-48 mb-6 rounded-lg bg-white shadow-lg border border-gray-200"
        >
          <p className="text-2xl text-gray-600">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16M4 12h16"
              />
            </svg>
          </p>
        </motion.div>

        {/* Two Smaller Boxes */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {[...Array(2)].map((_, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="flex items-center justify-center h-28 rounded-lg bg-white shadow-lg border border-gray-200"
            >
              <p className="text-2xl text-gray-600">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16M4 12h16"
                  />
                </svg>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Another Large Box */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="flex items-center justify-center h-48 mb-6 rounded-lg bg-white shadow-lg border border-gray-200"
        >
          <p className="text-2xl text-gray-600">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16M4 12h16"
              />
            </svg>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Dashboard;
