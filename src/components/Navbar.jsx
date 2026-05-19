import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiCartDownload } from 'react-icons/bi';
import { GiJumpingDog } from 'react-icons/gi';
import { GoDot } from 'react-icons/go';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Pet Adaptation', href: '/adaptation' },
        { name: 'Pet Care', href: '/petcare' },
        { name: 'Virtual Adoption', href: '/virtual-adoption' },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="navbar rounded-xl my-4 px-4 gap-4 text-slate-300">
                <div className="flex-1 lg:flex-none">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <h2 className="text-xl font-black flex items-center leading-none tracking-wide text-white">
                            <span>P</span>
                            <GoDot className="text-[10px] mx-0.5 translate-y-[2px] text-[#FF9505]" />
                            <span>A</span>
                            <GoDot className="text-[10px] mx-0.5 translate-y-[2px] text-[#FF9505]" />
                            <span>P</span>
                            <GiJumpingDog className="text-xl ml-1.5 text-[#FF9505] self-center" />
                        </h2>
                    </Link>
                </div>
                <div className="flex-1 hidden lg:flex justify-center">
                    <ul className="menu menu-horizontal px-1 gap-2 font-medium">
                        {navLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    href={link.href}
                                    className="hover:text-[#FF9505] hover:bg-slate-800 transition-all rounded-lg py-2 px-4"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-none flex items-center gap-2 md:gap-3">
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} role="button" className="btn btn-ghost btn-circle flex items-center justify-center hover:bg-slate-800">
                            <div className="indicator">
                                <BiCartDownload className="text-2xl text-slate-300" />
                                <span className="indicator-item animate-pulse bg-[#FF9505] text-black font-bold border-none w-4 h-4 flex items-center rounded-full justify-center text-[10px] p-0">
                                    8
                                </span>
                            </div>
                        </button>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-[#1e293b] z-[100] mt-4 w-56 shadow-2xl border border-slate-700"
                        >
                            <div className="card-body p-4">
                                <span className="text-base font-bold text-white">8 Items Selected</span>
                                <span className="text-sm text-slate-400">Subtotal: <span className="text-[#FF9505] font-semibold">$999</span></span>
                                <div className="card-actions mt-2">
                                    <button className="btn bg-[#FF9505] text-black hover:bg-[#ffb74d] border-none btn-block btn-sm min-h-[2.5rem] font-bold rounded-lg">
                                        View Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-slate-800 transition-colors">
                            <div className="w-9 h-9 rounded-full ring-2 ring-slate-700 ring-offset-2 ring-offset-[#1e293b] overflow-hidden">
                                <img
                                    alt="User profile"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#1e293b] text-slate-300 rounded-lg z-[100] mt-4 w-52 p-2 shadow-2xl border border-slate-700 font-medium"
                        >
                            <li>
                                <Link href="/profile" className="justify-between py-2.5 hover:bg-slate-800 hover:text-white rounded-md transition-colors">
                                    Profile
                                    <span className="bg-[#FF9505] text-black text-[10px] font-bold px-1.5 py-0.5 rounded scale-90">New</span>
                                </Link>
                            </li>
                            <li><Link href="/dashboard" className="py-2.5 hover:bg-slate-800 hover:text-white rounded-md transition-colors">Dashboard</Link></li>
                            <div className="divider my-1 border-slate-700/50 before:bg-slate-700/50 after:bg-slate-700/50"></div>
                            <li><button className="py-2.5 text-rose-400 hover:bg-rose-500/10 rounded-md transition-colors w-full text-left">Logout</button></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end lg:hidden">
                        <button tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-slate-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#1e293b] text-slate-300 rounded-lg z-[100] mt-4 w-52 p-2 shadow-2xl border border-slate-700 font-medium">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="py-2.5 hover:bg-slate-800 hover:text-[#FF9505] rounded-md transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;