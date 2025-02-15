import { useState } from "react";

const Project = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 max-w-lg">
                    <h4 className="text-primary font-semibold">Our Projects</h4>
                    <h1 className="text-3xl font-bold">Visit Our Latest Projects And Our Innovative Works</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/3 p-4">
                        <div className="flex flex-col space-y-4">
                            <button 
                                className={`w-full text-left p-4 border rounded-md font-bold ${activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
                                onClick={() => setActiveTab("tab1")}
                            >
                                01. Modern Complex
                            </button>
                            <button 
                                className={`w-full text-left p-4 border rounded-md font-bold ${activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
                                onClick={() => setActiveTab("tab2")}
                            >
                                02. Royal Hotel
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 p-4">
                        {activeTab === "tab1" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="h-80 relative">
                                    <img src="img/project-1.jpg" className="absolute w-full h-full object-cover rounded-lg" alt="Modern Complex" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold mb-3">25 Years Of Experience In Architecture Industry</h1>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit...</p>
                                    <ul className="mb-4">
                                        <li className="text-primary">✔ Design Approach</li>
                                        <li className="text-primary">✔ Innovative Solutions</li>
                                        <li className="text-primary">✔ Project Management</li>
                                    </ul>
                                    <a href="#" className="btn btn-primary py-2 px-4 bg-blue-500 text-white rounded-md">Read More</a>
                                </div>
                            </div>
                        )}
                        {activeTab === "tab2" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="h-80 relative">
                                    <img src="img/project-2.jpg" className="absolute w-full h-full object-cover rounded-lg" alt="Royal Hotel" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold mb-3">25 Years Of Experience In Architecture Industry</h1>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit...</p>
                                    <ul className="mb-4">
                                        <li className="text-primary">✔ Design Approach</li>
                                        <li className="text-primary">✔ Innovative Solutions</li>
                                        <li className="text-primary">✔ Project Management</li>
                                    </ul>
                                    <a href="#" className="btn btn-primary py-2 px-4 bg-blue-500 text-white rounded-md">Read More</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
