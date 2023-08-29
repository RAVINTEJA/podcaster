import React from "react";


function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-4">
                        <h4 className="text-lg font-bold">Podcaster</h4>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex gap-32  flex-wrap ">
                    <div className=" mb-4">
                        <h4 className="text-lg font-bold">Company</h4>
                        <ul className="mt-2">
                            <li>About Us</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className=" mb-4">
                        <h4 className="text-lg font-bold">Community</h4>
                        <ul className="mt-2">
                            <li>For Podcasters</li>
                            <li>Advertising</li>
                            <li>Vendors</li>
                            <li>Community Board</li>
                        </ul>
                    </div>
                    <div className=" mb-4">
                        <h4 className="text-lg font-bold">Help</h4>
                        <ul className="mt-2">
                            <li>Support</li>
                            <li>Mobile App</li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
