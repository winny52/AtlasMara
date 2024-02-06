import React from 'react';
import CardList from './Views';
import ServiceCardList from './ServicesCard';

const Home = () => {
  return (
    <div
  className="min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: 'url("")',
    backgroundSize: 'cover',
  }}
>
    <div className=" min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Atlas Mara</h1>
        <p className="text-gray-600 mb-8">Your Caring Logistics Partner</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Explore More
        </button>
        <CardList/>
        <ServiceCardList/>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from 'react';

// const Home = () => {
//   const videoUrl = 'https://v.ftcdn.net/03/01/36/79/700_F_301367907_QO7WvFvTu5GrqODTV79k7TyYiNBDODIe_ST.mp4'; // Replace 'your_video_url.mp4' with the actual URL of your video

//   return (
//     <div className=" bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${videoUrl})` }}>
//       <div className="text-center text-white">
//         <h1 className="text-4xl font-bold mb-4">Atlas Mara</h1>
//         <p className="text-gray-600 mb-8">Your Caring Logistics Partner</p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
