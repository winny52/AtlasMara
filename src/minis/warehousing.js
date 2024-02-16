import React from 'react';
import leftImage1 from '../assets/warehouse1.jpg';
import rightImage2 from '../assets/warehouse2.jpg';


const Warehousing = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img src={leftImage1} alt="Left  1" className="w-full" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-center md:text-left">Warehousing</h2>
                <p className="text-center md:text-left">AtlasMara  Logistics provides tailored warehousing solutions to boost your business’s productivity and efficiency. With a strategically located 62,000 sq. ft. ambient-controlled warehouse at Port Qasim and two 25,000 sq. ft. warehouses in the Korangi industrial area, we cater to the needs of both large and small enterprises.

Our methodology, built on collaboration, performance measurement tools, and advanced analysis, ensures quality, operational excellence, and ongoing innovation. This leads to reduced inefficiencies, increased consumer value, improved cash flow, and enhanced profitability for your business. Our warehouse facilities are well-equipped to meet your specific needs.

We offer a comprehensive and cost-effective one-stop logistics solution, complete with value-added services such as repackaging, barcoding, product labeling, tagging, and customized promotional packaging for retail sales periods. </p>
            </div>
            <div className="md:w-1/2 order-last md:order-first">
                <h2 className="text-center md:text-right">We can Offer</h2>
                <p className="text-center md:text-right">Streamlined freight and carrier management.
A dedicated point of contact for all your shipments.
Total transparency and control over your cargo.
Efficient rate and carrier negotiations for time and cost savings.
Effective claims management for issue resolution.
Consolidated freight payment coordination, saving time and administration costs.
We offer our clients the benefits of our discounted shipping rates.</p>
            </div>
            <div className="md:w-1/2">
                <img src={rightImage2} alt="Right 2" className="w-full" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-center md:text-left">Our Key features</h2>
                <p className="text-center md:text-left">Inventory management software.
State-of-the-art security system
Space for parking on 10 Container-based vehicles.
Cross Docking
Located in a highly developed industrial area.</p>
            </div>
            <div className="md:w-1/2 order-last md:order-first">
                <h2 className="text-center md:text-right">Value Added Services</h2>
                <p className="text-center md:text-right">On-site loading and discharging
Secure leased closed warehousing facility
Spacious leased open area for bulk storage
Efficient pick and pack services
Streamlined cross-docking operations
Comprehensive services, including unloading, loading, storage, pick-pack, shrink wrapping, labeling, palletization, and detailed inventory reporting
Expert packing solutions
Effective lashing and securing services</p>
            </div>
            
        </div>
    );
};

export default Warehousing;
