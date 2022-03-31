
export default function Info() {
    return (
        <>
            <div className="bg-black text-white p-10 mb-10">
                <div className="grid lg:grid-cols-4 gap-3 font-bold border-b-2 pb-5">
                    <h1 className="text-2xl ml-6">About</h1>
                    <div className="text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h1>Location</h1>
                        <h2 className="text-xs font-light">Suite level (Level 4)</h2>
                        <button className="bg-yellow text-black rounded mt-4 p-1 text-xs"> View Arena Map</button>
                    </div>
                    <div className="text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h1>Capacity</h1>
                        <h2 className="text-xs font-light">Accommodates 18-32 people</h2>
                    </div>
                    <div className="text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h1>Event Availability</h1>
                        <h2 className="text-xs font-light"> Utah Jazz Games (including playoffs) concerts and select concerts and select special events</h2>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 font-bold flex flex-wrap p-5 border-b-2">
                    <h1>Benefits & Amenities</h1>
                    <div>
                        <ul className="text-xs font-light">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Private Suite</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                420-490 square feet depending on the location</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                Lounge seating area for four with coffee table at the back of suite</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                High-top counter in middle, and drink rails at back of the fixed-seating area</li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Dedicated suite attendant for each game and arena event</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-xs font-light">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Flat screen TV in each suite</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                WIFI access</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                18-32 tickets in a luxary suite (varies by location)</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                VIP parking passes</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-yellow mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Private Suite</li>
                        </ul>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-5 border-b-2 p-5">
                    <h1>Parking and Check-In</h1>
                    <div className="text-xs font-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                        <h2>VIP parking in the Park Place lot located right next to Vivent Smart-Home Arena</h2>
                        <button className="bg-yellow text-black rounded p-1 mt-2">View Parking Map</button>
                    </div>
                    <div className="text-xs font-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        <h2>Easy check-in: Talk to the host at any suite level (level 4) entrance to check-in</h2>
                        <button className="bg-yellow text-black rounded p-1 mt-2">View Check-in Locations</button>

                    </div>

                </div>
                <div>
                    <h1 className="text-xl font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow inline mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Possible Uses</h1>
                    <div className="grid lg:grid-cols-5 gap-5 p-3 items-center">
                        <div>
                            <h2 className="border-b-2 break-words">Business Development</h2>
                            <p className="text-xs font-light p-4 mb-2">
                                Business Development
                                Client Entertainment
                                Relationship Development
                                Generate Referrals by Inviting Clients to Bring Colleagues & Friends
                            </p>
                        </div>
                        <div>
                            <h2 className="border-b-2 break-words">Client Retention</h2>
                            <p className="text-xs font-light p-4 mb-2">
                                Renew Accounts
                                Reduce Attrition
                                Relationship Development
                                Current Customer Upsell
                                New Product/Service Launch
                            </p>
                        </div>
                        <div>
                            <h2 className="border-b-2 break-words">Employee Usage</h2>

                            <p className="text-xs font-light p-2">Employee Recruitment & Retention
                                Employee Benefit Programs
                                Employee Incentives
                                Internal Contests
                                Team Building
                                Employee Families
                                Holiday Events/Parties
                                Conferences</p>

                        </div>
                        <div>
                            <h2 className="border-b-2 break-words">Executive Utilization</h2>
                            <p className="text-xs font-light p-4 mb-2">
                                Executive Team Building
                                Quarterly Meetings
                                Investors & Shareholders
                                Personal Entertainment
                            </p>
                        </div>
                        <div>
                            <h2 className="border-b-2 font-light break-words">Community Relations</h2>
                            <p className="text-xs font-light p-6 mb-2">
                                Complement Current Charitable Programs
                                Donate for Auctions or Raffles
                                Host 501(c)(3) Organizations
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
