import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-gray-700 to-gray-900 flex items-center">
      <div className="bg-cover max-w-6xl mx-auto bg-center bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-6 flex justify-between flex-col w-full">
        <img
          className="w-16 ml-6 rounded-xl"
          src="https://www.citypng.com/public/uploads/preview/uber-app-logo-icon-png-701751694967462muny1ssawz.png"
        ></img>
        <div className="bg-white pb-7 pt-3 px-4">
          <h2 className="text-3xl pb-3 font-extrabold font-uberBold">
            Get Started with Uber
          </h2>
          <Link
            to="/login"
            className="flex w-full bg-gray-900 font-uberMedium text-white py-3 rounded mt-5 hover:bg-black active:bg-gray-700 transition"
          >
            <span className="text-center w-full">Continue</span> <i className="bi bi-arrow-right text-end mr-4"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
