// import React from 'react';
// import leftImage1 from '../assets/warehouse1.jpg';
// import rightImage2 from '../assets/warehouse2.jpg';
// import leftImage2 from '../assets/warehouse3.jpg';
// // import rightImage3 from '../assets/warehouse4.jpg';

// const Warehousing = () => {
//     return (
//         <div className="container mx-auto py-8 px-4 md:px-0">
//             <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
//                 <div className="md:w-1/2">
//                     <img src={leftImage1} alt="Left 1" className="w-full rounded-lg shadow-lg mb-4 md:mb-0" />
//                 </div>
//                 <div className="md:w-1/2 md:pl-8">
//                     <h2 className="text-center md:text-left text-3xl font-semibold mb-4">Warehousing</h2>
//                     <p className="text-center md:text-left text-gray-700 leading-relaxed mb-8">AtlasMara Logistics provides tailored warehousing solutions to boost your business’s productivity and efficiency. With strategically located facilities and advanced methodologies, we ensure quality, operational excellence, and ongoing innovation.</p>
//                 </div>
//             </div>
//             <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-8">
//                 <div className="md:w-1/2">
//                     <h2 className="text-center md:text-right text-3xl font-semibold mb-4">We Can Offer</h2>
//                     <p className="text-center md:text-right text-gray-700 leading-relaxed">Streamlined freight and carrier management, dedicated point of contact, total transparency and control over cargo, efficient rate negotiations, effective claims management, and consolidated freight payment coordination.</p>
//                 </div>
//                 <div className="md:w-1/2 md:order-last">
//                     <img src={rightImage2} alt="Right 2" className="w-full rounded-lg shadow-lg mb-4 md:mb-0" />
//                 </div>
//             </div>
//             <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-8">
//                 <div className="md:w-1/2">
//                     <img src={leftImage2} alt="Left 1" className="w-full rounded-lg shadow-lg mb-4 md:mb-0" />
//                 </div>
//                 <div className="md:w-1/2 md:pl-8">
//                     <h2 className="text-center md:text-left text-3xl font-semibold mb-4">Our Key Features</h2>
//                     <p className="text-center md:text-left text-gray-700 leading-relaxed">Inventory management software, state-of-the-art security system, space for parking on container-based vehicles, cross-docking, and strategic location.</p>
//                 </div>
//             </div>
//             <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-8">
//                 <div className="md:w-1/2">
//                     <h2 className="text-center md:text-right text-3xl font-semibold mb-4">Value Added Services</h2>
//                     <p className="text-center md:text-right text-gray-700 leading-relaxed">On-site loading and discharging, secure leased closed warehousing facility, spacious leased open area for bulk storage, efficient pick and pack services, streamlined cross-docking operations, comprehensive services, expert packing solutions, and effective lashing and securing services.</p>
//                 </div>
//                 <div className="md:w-1/2 md:order-last">
//                     <img src={rightImage2} alt="Right 2" className="w-full rounded-lg shadow-lg mb-4 md:mb-0" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Warehousing;







import React from 'react';
import leftImage2 from '../assets/warehouse3.jpg';
import Footer from '../components/Footer';
 const Warehousing = () => {
    return (
        <div>

<div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-8">
<div className="md:w-1/2">
    <img src={leftImage2} alt="Left 1" className="w-full rounded-lg shadow-lg mb-4 md:mb-0" />
</div>
<div className="md:w-1/2 md:pl-8">
                  <h2 className="text-center md:text-left text-3xl font-semibold mb-4">Warehousing</h2>                    <p className="text-center md:text-left text-gray-700 leading-relaxed mb-8">AtlasMara Logistics provides tailored warehousing solutions to boost your business’s productivity and efficiency. With strategically located facilities and advanced methodologies, we ensure quality, operational excellence, and ongoing innovation.</p>
                  <h2 className="text-center md:text-right text-3xl font-semibold mb-4">We Can Offer</h2>
  <p className="text-center md:text-right text-gray-700 leading-relaxed">Streamlined freight and carrier management, dedicated point of contact, total transparency and control over cargo, efficient rate negotiations, effective claims management, and consolidated freight payment coordination.</p><h2 className="text-center md:text-left text-3xl font-semibold mb-4">Our Key Features</h2>
    <p className="text-center md:text-left text-gray-700 leading-relaxed">Inventory management software, state-of-the-art security system, space for parking on container-based vehicles, cross-docking, and strategic location.</p>
    <h2 className="text-center md:text-right text-3xl font-semibold mb-4">Value Added Services</h2>
               <p className="text-center md:text-right text-gray-700 leading-relaxed">On-site loading and discharging, secure leased closed warehousing facility, spacious leased open area for bulk storage, efficient pick and pack services, streamlined cross-docking operations, comprehensive services, expert packing solutions, and effective lashing and securing services.</p>
</div>

</div>
<Footer/>
</div>
  );
   };
export default Warehousing;
