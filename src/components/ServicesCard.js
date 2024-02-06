import React from 'react';

const ServiceCard = ({ title, description }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white mb-4 ">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

const ServiceCardList = () => {
  const simpleCardsData = [
    { title: 'Warehousing', description: 'Description for Card 1' },
    { title: 'Global Transportation', description: 'Description for Card 2' },
    { title: 'Project Cargo', description: 'Description for Card 3' },
    { title: 'Sea Freight', description: 'Description for Card 4' },
    { title: 'Air Freight', description: 'Description for Card 5' },
    { title: 'Custom Brokerage', description: 'Description for Card 6' },
    { title: 'Hazardous Crago', description: 'Description for Card 7' },
    { title: 'Vessel Chartering', description: 'Description for Card 8' },
    { title: 'Reefer Cargo', description: 'Description for Card 9' },
  ];

  return (

   <div className="text-center"> 
    <h2 className="text-2xl font-bold mb-4">Our Services</h2>
   

    <div className="flex flex-wrap">
    {simpleCardsData.map((card, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <ServiceCard {...card} />
      </div>
    ))}
  </div>
  </div>
);
};

export default ServiceCardList;
