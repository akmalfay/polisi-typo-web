import { useState } from "react";
import { Link } from "react-router-dom";

function ProfileActivity() {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const activities = [
        {
            id: 1,
            title: "Report on Egi from Username",
            when: "2 days ago",
            points: "+10",
            badge: "green",
            status: "Verified",
            details: "Your report on Egi was verified and awarded 10 points for accurate typo identification.",
        },
        {
            id: 2,
            title: "Report on Adi from Username",
            when: "2 days ago",
            points: "0",
            badge: "slate",
            status: "Pending review",
            details: "This report is still under review. No points were awarded yet.",
        },
        {
            id: 3,
            title: "Report on Egi from Username",
            when: "2 days ago",
            points: "+10",
            badge: "green",
            status: "Verified",
            details: "A second verified report on Egi completed successfully with no issues.",
        },
    ];

    return (
        <main className="max-w-3/5 m-auto">
            <section className="mt-20 mb-12 flex items-center space-x-4">
                <Link to="/profile">
                    <svg className="w-10 p-2 rounded-xl transition hover:bg-slate-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#000000"></path></g></svg>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">All Activity</h1>
                    <p className="mt-2 text-slate-500">Your full history of submitted reports and verified typos.</p>
                </div>
            </section>
            <section>
                <div className="bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                    <div className="p-8 space-y-4">
                        {activities.map((activity) => (
                            <button
                                key={activity.id}
                                type="button"
                                onClick={() => setSelectedActivity(activity)}
                                aria-label={`View details for ${activity.title}`}
                                className="relative w-full text-left pl-5 rounded-3xl transition hover:bg-slate-50"
                            >
                                <div className={`absolute p-1 top-1.5 left-0.5 rounded-xl border-2 ${activity.badge === "green" ? "bg-green-500 border-green-300" : "bg-slate-500 border-slate-300"}`} />
                                <div className="pl-3 flex justify-between items-start gap-4">
                                    <div>
                                        <p className="font-medium hover:font-semibold">{activity.title}</p>
                                        <p className="text-sm text-slate-500">{activity.when}</p>
                                    </div>
                                    <p className={`px-2 rounded-xl text-sm ${activity.badge === "green" ? "bg-green-200 text-green-800" : "bg-slate-200 text-slate-800"}`}>
                                        {activity.points}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {selectedActivity && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
                    <div className="w-full max-w-2xl rounded-3xl border border-slate-300 bg-white shadow-2xl">
                        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                            <div>
                                <p className="text-slate-500 text-sm">Activity detail</p>
                                <h2 className="text-xl font-semibold text-slate-900">{selectedActivity.title}</h2>
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
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{selectedActivity.when}</span>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Points: {selectedActivity.points}</span>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{selectedActivity.status}</span>
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

export default ProfileActivity;