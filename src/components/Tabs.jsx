"use client";

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const PetTabs = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 my-12 font-sans">
            <Tabs defaultIndex={0} className="w-full">
                <TabList className="flex items-center gap-2 border-b border-slate-800 pb-px mb-8">
                    <Tab className="px-6 py-3 text-sm font-medium text-slate-300  border-b-2 border-transparent outline-none hover:text-slate-200 aria-selected:text-[#FF9505] aria-selected:border-[#FF9505]">
                        Top Pets
                    </Tab>
                    <Tab className="px-6 py-3 text-sm font-medium text-slate-300  border-b-2 border-transparent outline-none hover:text-slate-200 aria-selected:text-[#FF9505] aria-selected:border-[#FF9505]">
                        Browse All
                    </Tab>
                </TabList>

                <TabPanel className="outline-none focus:outline-none focus-visible:outline-none">
                    <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                        <div className="p-8 border border-slate-800/60 bg-gradient-to-br from-[#1e293b]/40 to-[#0f172a] rounded-2xl shadow-xl">
                            <h2 className="text-xl font-bold text-white mb-2">Top Featured Pets</h2>
                            <p className="text-slate-400 text-sm">আমাদের সবচেয়ে কিউট এবং পপুলার পেটগুলো এখানে দেখতে পাবেন।</p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="outline-none focus:outline-none focus-visible:outline-none">
                    <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                        <div className="p-8 border border-slate-800/60 bg-gradient-to-br from-[#1e293b]/40 to-[#0f172a] rounded-2xl shadow-xl">
                            <h2 className="text-xl font-bold text-white mb-2">All Available Pets</h2>
                            <p className="text-slate-400 text-sm">এডপশনের জন্য রেডি থাকা আমাদের সবগুলো পোষা প্রাণী একসাথে ব্রাউজ করুন।</p>
                        </div>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default PetTabs;