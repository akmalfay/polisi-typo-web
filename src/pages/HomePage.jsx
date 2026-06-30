import { useState } from "react";

function HomePage() {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const activities = [
        {
            id: 1,
            suspect: "Egi",
            reporter: "Username",
            typo: "Teh quick brown fox",
            realTerm: "The quick brown fox",
            description: "Blablabla",
            status: "Verified",
        },
        {
            id: 2,
            suspect: "Egi",
            reporter: "Username",
            typo: "Teh quick brown fox",
            realTerm: "The quick brown fox",
            description: "Blablabla",
            status: "Pending",
        },
        {
            id: 3,
            suspect: "Egi",
            reporter: "Username",
            typo: "Teh quick brown fox",
            realTerm: "The quick brown fox",
            description: "Blablabla",
            status: "Verified",
        },
    ];

    return (
        <main className='max-w-4/5 m-auto'>
            <section className='my-20 text-center'>
                <h1 className='text-6xl font-bold text-slate-800'>Catch <span className='text-sky-700'>Typos</span>.
                    <br />
                    Keep the Group Clean.
                </h1>
                <p className='max-w-3/5 mt-8 mx-auto text-slate-500'>
                    Polisi Typo is the global registry for group PHP typographical errors. Report mistakes, earn points, and climb the leaderboard.
                </p>
                <input
                    type="search"
                    name="typo"
                    id="typo-search"
                    placeholder='Search reports by keyword'
                    className='w-xl p-4 mt-8 bg-white rounded-full shadow-md'
                />
            </section>
            <section>
                <h2 className='text-2xl font-bold'>Recent Reports</h2>
                <div className='grid grid-cols-3 gap-4 mt-6'>

                    {/* Cards */}
                    {activities.map((activity) => (
                        <div className='bg-white p-6 rounded-2xl shadow-md border border-slate-300 transition hover:shadow-xl hover:border-slate-400'>
                            <div className='flex justify-between items-start gap-8'>
                                <div>
                                    <p className='text-lg font-medium'>Suspect: {activity.suspect}</p>
                                    <p className='text-sm text-slate-500 mt-1'>@Username • 2 hours ago</p>
                                </div>
                                <p className='bg-green-200 text-green-800 px-3 py-1 rounded-2xl text-sm'>{activity.status}</p>
                            </div>

                            <div className='mt-4 space-y-4'>
                                <div>
                                    <p className='text-xs text-slate-500 font-semibold'>ORIGINAL</p>
                                    <p className='text-slate-600 line-through decoration-rose-500/50 decoration-2 de font-light'>{activity.typo}</p>
                                </div>
                                <div>
                                    <p className='text-xs text-slate-500 font-semibold'>CORRECTION</p>
                                    <p>{activity.realTerm}</p>
                                </div>
                            </div>

                            <div className='pt-4 border-t border-slate-200 mt-4 text-center'>
                                <p className='p-2 text-slate-600 font-medium rounded-2xl cursor-pointer transition hover:bg-slate-200 hover:text-slate-900'>View Details</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default HomePage;