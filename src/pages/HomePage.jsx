import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime);

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
            status: "verified",
            details: "Your report on Egi was verified and awarded 10 points for accurate typo identification.",
            createdAt: "2026-07-01T21:00:00",
        },
        {
            id: 2,
            suspect: "Egi",
            reporter: "Username",
            typo: "Teh quick brown fox",
            realTerm: "The quick brown fox",
            description: "Blablabla",
            status: "pending",
            details: "Your report on Egi was verified and awarded 10 points for accurate typo identification.",
            createdAt: "2026-07-01T10:00:00",
        },
        {
            id: 3,
            suspect: "Egi",
            reporter: "Username",
            typo: "Teh quick brown fox",
            realTerm: "The quick brown fox",
            description: "Blablabla",
            status: "verified",
            details: "Your report on Egi was verified and awarded 10 points for accurate typo identification.",
            createdAt: "2026-07-01T10:00:00",
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
                        <div className='flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md border border-slate-300 transition hover:shadow-xl hover:border-slate-400' key={activity.id}>
                            <div>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <p className='text-lg font-medium'>Suspect: {activity.suspect}</p>
                                        <p className='text-sm text-slate-500 mt-1'>@Username • {dayjs().to(dayjs(activity.createdAt))}</p>
                                    </div>
                                    <p className={activity.status == 'verified' ? 'bg-green-200 text-green-800 px-3 py-1 rounded-2xl text-sm capitalize' : 'bg-slate-200 text-slate-800 px-3 py-1 rounded-2xl text-sm capitalize'}>{activity.status}</p>
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
                            </div>

                            <div className='pt-4 border-t border-slate-200 mt-4 text-center'>
                                <p className='p-2 text-slate-600 font-medium rounded-2xl cursor-pointer transition hover:bg-slate-200 hover:text-slate-900' onClick={() => setSelectedActivity(activity)}>View Details</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {selectedActivity && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
                    <div className="w-full max-w-2xl rounded-3xl border border-slate-300 bg-white shadow-2xl">
                        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                            <div>
                                <p className="text-slate-500 text-sm">Activity detail</p>
                                <h2 className="text-xl font-semibold text-slate-900">Report on {selectedActivity.suspect} from {selectedActivity.reporter}</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedActivity(null)}
                                className="rounded-full px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                                Close
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex flex-wrap gap-3 text-sm">
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{selectedActivity.createdAt}</span>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Points: {selectedActivity.status === 'verified' ? 10 : 0}</span>
                                <span className={selectedActivity.status === 'verified' ? "rounded-full bg-green-100 px-3 py-1 text-green-700 capitalize" : "rounded-full bg-slate-100 px-3 py-1 text-slate-700 capitalize"}>{selectedActivity.status}</span>
                            </div>
                            <p className="text-slate-600">{selectedActivity.details}</p>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setSelectedActivity(null)}
                                    className="rounded-2xl bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                                >
                                    Got it
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default HomePage;