function Leaderboard() {
    return (
        <main className="max-w-4/5 m-auto">
            <section className="my-20 text-center">
                <h1 className="text-6xl font-bold text-slate-800">Leaderboards</h1>
                <p className="mt-8 text-slate-500">The heroes keeping the group clean, once at a time.</p>
            </section>
            <section>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {/* Cards */}
                    <div className="bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                        <div className="p-4 bg-slate-200 rounded-t-2xl flex items-center gap-2">
                            <svg fill="#032558" className="w-8" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22.994 28.996h-14.060c-0.553 0-1 0.448-1 1s0.447 1 1 1h14.060c0.552 0 1-0.448 1-1s-0.447-1-1-1zM31.791 3.801c-0.095-0.465-0.505-0.799-0.979-0.799h-4.895v-0.998c0-0.552-0.448-1-1-1h-17.985c-0.553 0-1 0.448-1 1v0.998h-4.743c-0.474 0-0.885 0.334-0.98 0.799-0.029 0.144-0.7 3.648 1.247 6.036 1.12 1.373 2.831 2.091 5.078 2.155 1.281 3.786 4.502 6.59 8.381 7.008v6.966h-2.993c-0.553 0-1 0.448-1 1s0.447 1 1 1h8.084c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.091v-6.965c3.886-0.41 7.114-3.213 8.398-7.003 2.323-0.034 4.085-0.758 5.231-2.162 1.947-2.388 1.276-5.891 1.247-6.036zM3.013 8.58c-0.885-1.078-0.975-2.669-0.929-3.578h3.849v3.376c0 0.54 0.050 1.068 0.123 1.587-1.365-0.127-2.389-0.588-3.042-1.385zM23.917 8.378c0 4.784-3.585 8.677-7.991 8.677-4.408 0-7.994-3.893-7.994-8.677v-5.374h15.986v5.374h-0zM28.988 8.58c-0.677 0.826-1.751 1.296-3.196 1.402 0.075-0.524 0.125-1.057 0.125-1.604v-3.376h4c0.045 0.91-0.044 2.5-0.93 3.578z"></path> </g></svg>
                            <p className="text-xl font-medium">Top Typo Police</p>
                        </div>
                        <div className="p-8 divide-y divide-slate-500/30">
                            {/* Datas */}
                            <div className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-semibold">#1</span>
                                    <div>
                                        <p className="font-medium">@Username</p>
                                        <p className="text-xs text-slate-500 mt-1">1205 verified reports</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-primary">15,420 <span className="text-sm text-slate-500">pts</span></p>
                                </div>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-semibold">#1</span>
                                    <div>
                                        <p className="font-medium">@Username</p>
                                        <p className="text-xs text-slate-500 mt-1">1205 verified reports</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-primary">15,420 <span className="text-sm text-slate-500">pts</span></p>
                                </div>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-semibold">#1</span>
                                    <div>
                                        <p className="font-medium">@Username</p>
                                        <p className="text-xs text-slate-500 mt-1">1205 verified reports</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-primary">15,420 <span className="text-sm text-slate-500">pts</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                        <div className="p-4 bg-slate-200 rounded-t-2xl flex items-center gap-2">
                            <svg fill="#032558" className="w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM12,4.5A7.5,7.5,0,1,0,19.5,12,7.508,7.508,0,0,0,12,4.5Zm0,13A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path></g></svg>
                            <p className="text-xl font-medium">Typo Kings (Most Reported)</p>
                        </div>
                        <div className="p-8 divide-y divide-slate-500/30">
                            {/* Datas */}
                            <div className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-semibold">#1</span>
                                    <div>
                                        <p className="font-medium">Suspect</p>
                                        <p className="text-xs text-slate-500 mt-1">Last: 18 June 2026</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-primary">320 <span className="text-sm text-slate-500">typos</span></p>
                                </div>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-semibold">#1</span>
                                    <div>
                                        <p className="font-medium">Suspect</p>
                                        <p className="text-xs text-slate-500 mt-1">Last: 18 June 2026</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-primary">320 <span className="text-sm text-slate-500">typos</span></p>
                                </div>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-semibold">#1</span>
                                    <div>
                                        <p className="font-medium">Suspect</p>
                                        <p className="text-xs text-slate-500 mt-1">Last: 18 June 2026</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-primary">320 <span className="text-sm text-slate-500">typos</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Leaderboard;