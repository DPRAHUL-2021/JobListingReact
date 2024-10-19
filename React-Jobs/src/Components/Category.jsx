// import React from "react";
// import { Link } from "react-router-dom";
// import Card from "./Card";

// const Category = () => {
//   return (
//     <section class="py-4">
//       <div class="container-xl lg:container m-auto">
//         <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
//           <Card>
//           <h2 class="text-2xl font-bold">For Developers</h2>
//             <p class="mt-2 mb-4">
//               Browse our React jobs and start your career today
//             </p>
//             <Link
//               to="/jobs"
//               class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
//             >
//               Browse Jobs
//             </Link>
//           </Card>
//           <Card bg='bg-indigo-100'>
//           <h2 class="text-2xl font-bold">For Employers</h2>
//             <p class="mt-2 mb-4">
//               List your job to find the perfect developer for the role
//             </p>
//             <Link
//               to="/add-job"
//               class="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
//             >
//               Add Job
//             </Link>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;


import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Category = () => {
  return (
    <section className="py-9 bg-gray-50">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg">
          <Card>
            <h2 className="text-3xl font-bold text-gray-800">For Developers</h2>
            <p className="mt-4 mb-6 text-lg text-gray-600">
              Browse our React jobs and start your career today.
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-indigo-600 text-white font-medium rounded-lg px-6 py-3 hover:bg-indigo-500 transition duration-300 ease-in-out"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-3xl font-bold text-gray-800">For Employers</h2>
            <p className="mt-4 mb-6 text-lg text-gray-600">
              List your job to find the perfect developer for the role.
            </p>
            <Link
              to="/add-job"
              className="inline-block  bg-indigo-600 text-white font-medium rounded-lg px-6 py-3 hover:bg-indigo-500 transition duration-300 ease-in-out"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Category;
