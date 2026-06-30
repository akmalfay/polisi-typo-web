import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const activities = [
        {
            id: 1,
            title: "Report on Egi from Username",
            when: "2 days ago",
            points: "+10",
            status: "Verified",
            details: "Your report on Egi was verified and awarded 10 points for accurate typo identification.",
        },
        {
            id: 2,
            title: "Report on Adi from Username",
            when: "2 days ago",
            points: "0",
            status: "Pending",
            details: "This report is still under review. No points were awarded yet.",
        },
        {
            id: 3,
            title: "Report on Egi from Username",
            when: "2 days ago",
            points: "+10",
            status: "Verified",
            details: "A second verified report on Egi completed successfully with no issues.",
        },
    ];

    return (
        <main className="max-w-4/5 m-auto">
            <section className="flex items-center justify-between bg-sky-900 text-white py-12 px-8 mt-20 mb-12 rounded-2xl">
                <div className="flex items-center">
                    <img src="" alt="Profile" />
                    <div>
                        <h1 className="text-2xl font-bold">Username123</h1>
                        <p className="text-sm">Police Officer • Joined 18 March 2026</p>
                    </div>
                </div>
                <Link to="/settings" className="flex items-center bg-slate-400/80 px-4 py-2 rounded-xl transition cursor-pointer hover:bg-slate-500/80">
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p className="text-sm">Settings</p>
                </Link>
            </section>

            <section className="grid grid-cols-3 gap-4">
                <div className="col-span-1 bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                    <p className="px-8 py-4 text-xl font-medium border-b border-slate-500/30">Statistics</p>

                    <div className="p-8 space-y-4">
                        <div className="flex items-center gap-4">
                            <svg fill="#032558" className="w-12 p-2.5 rounded-xl bg-slate-300" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22.994 28.996h-14.060c-0.553 0-1 0.448-1 1s0.447 1 1 1h14.060c0.552 0 1-0.448 1-1s-0.447-1-1-1zM31.791 3.801c-0.095-0.465-0.505-0.799-0.979-0.799h-4.895v-0.998c0-0.552-0.448-1-1-1h-17.985c-0.553 0-1 0.448-1 1v0.998h-4.743c-0.474 0-0.885 0.334-0.98 0.799-0.029 0.144-0.7 3.648 1.247 6.036 1.12 1.373 2.831 2.091 5.078 2.155 1.281 3.786 4.502 6.59 8.381 7.008v6.966h-2.993c-0.553 0-1 0.448-1 1s0.447 1 1 1h8.084c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.091v-6.965c3.886-0.41 7.114-3.213 8.398-7.003 2.323-0.034 4.085-0.758 5.231-2.162 1.947-2.388 1.276-5.891 1.247-6.036zM3.013 8.58c-0.885-1.078-0.975-2.669-0.929-3.578h3.849v3.376c0 0.54 0.050 1.068 0.123 1.587-1.365-0.127-2.389-0.588-3.042-1.385zM23.917 8.378c0 4.784-3.585 8.677-7.991 8.677-4.408 0-7.994-3.893-7.994-8.677v-5.374h15.986v5.374h-0zM28.988 8.58c-0.677 0.826-1.751 1.296-3.196 1.402 0.075-0.524 0.125-1.057 0.125-1.604v-3.376h4c0.045 0.91-0.044 2.5-0.93 3.578z"></path> </g></svg>
                            <div>
                                <p className="text-sm text-slate-500">Total Points</p>
                                <p className="text-2xl font-semibold">15,420</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <svg className="w-12 p-2.5 rounded-xl bg-slate-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6.41421 7H9V4.41421L6.41421 7ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z" fill="#475569"></path> </g></svg>
                            <div>
                                <p className="text-sm text-slate-500">Total Reports</p>
                                <p className="text-2xl font-semibold">1,350</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <svg fill="#16a34a" className="w-12 p-2.5 rounded-xl bg-green-200" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM22.386 10.146l-9.388 9.446-4.228-4.227c-0.39-0.39-1.024-0.39-1.415 0s-0.391 1.023 0 1.414l4.95 4.95c0.39 0.39 1.024 0.39 1.415 0 0.045-0.045 0.084-0.094 0.119-0.145l9.962-10.024c0.39-0.39 0.39-1.024 0-1.415s-1.024-0.39-1.415 0z"></path> </g></svg>
                            <div>
                                <p className="text-sm text-slate-500">Verified</p>
                                <p className="text-2xl font-semibold">1,205</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                    <div className="px-8 py-4 flex items-center justify-between border-b border-slate-500/30">
                        <p className="text-xl font-medium">Recent Activity</p>
                        <Link to="/profile/activity" className="p-3 py-1 text-sm text-slate-500 rounded-xl transition hover:bg-slate-200 hover:text-slate-800">View All</Link>
                    </div>

                    <div className="p-8 space-y-6">
                        {activities.map((activity) => (
                            <button
                                key={activity.id}
                                type="button"
                                onClick={() => setSelectedActivity(activity)}
                                aria-label={`View details for ${activity.title}`}
                                className="relative w-full text-left pl-5 rounded-3xl transition"
                            >
                                <div className={`absolute p-1 top-1.5 left-0.5 rounded-xl border-2 ${activity.status === "Verified" ? "bg-green-500 border-green-300" : "bg-slate-500 border-slate-300"}`} />
                                <div className="pl-3 flex justify-between items-start gap-4">
                                    <div>
                                        <p className="font-medium cursor-pointer hover:font-bold">{activity.title}</p>
                                        <p className="text-sm text-slate-500">{activity.when}</p>
                                    </div>
                                    <p className={`px-2 rounded-xl text-sm ${activity.status === "Verified" ? "bg-green-200 text-green-800" : "bg-slate-200 text-slate-800"}`}>
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

export default Profile;