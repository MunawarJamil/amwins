import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const resources = [
  {
    date: 'FEB 3, 2025',
    title: 'For Professional Services Firms, Landmines Lurk in D&O Polices',
  },
  {
    date: 'JAN 21, 2025',
    title: 'Semaglutides and GLP-1s: Their Impact on the Insurance Market',
  },
  {
    date: 'JAN 21, 2025',
    title: 'The Evolution of Excess/Side A DIC Insurance: Why Non-Profit and Private Companies Should Consider This Essential Coverage',
  },
  {
    date: 'JAN 21, 2025',
    title: 'Why Phase I Environmental Site Assessments Aren’t Enough',
  },
];

export default function InsuranceResources() {
  return (
    <div className=" md:w-[80%] my-10 md:my-20 mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore specialty insurance resources + insights</h2>
        <p className="  text-gray-500 mb-4">Stay up-to-date on emerging industry trends and topics</p>
        <a href="#" className="text-blue-500   font-semibold">VIEW ALL RESOURCES</a>

        <div className="mt-6 space-y-4">
          {resources.map((resource, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col">
                <span className="text-blue-500 text-sm pt-2 font-semibold">{resource.date}</span>
                <h3 className="text-md font-semibold text-gray-800 mt-1 hover:text-blue-500 cursor-pointer">
                  {resource.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="hidden  lg:flex ">
        <Image 
          src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg" 
          alt="Business professionals walking" 
          
          className="rounded-lg shadow-md "
          width={1000}
          height={800}
        />
      </div>
    </div>
  );
}
