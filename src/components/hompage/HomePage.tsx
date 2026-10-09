import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/hero_img.jpg";

const HomePage = () => {
    return (
        <section className="container mx-auto py-12 px-4 md:px-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center bg-[#B3B3B3] p-8 rounded-lg shadow-lg">
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-[#131313]">
                        Books to freshen up <br /> your bookshelf
                    </h1>
                    <button className="bg-[#23BE0A] text-white py-2 px-4 rounded-lg hover:bg-[#1da800]">
                        View The List
                    </button>
                </div>
                <div>
                    <Image src={bannerImage} alt="Book Illustration" />
                </div>

            </div>
        </section>
    );
};

export default HomePage;
