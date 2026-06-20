function Report() {
    return (
        <main className="max-w-4/5 m-auto">
            <section className="my-20 text-center">
                <h1 className="text-6xl font-bold text-slate-800">Report a Typo</h1>
                <p className="mt-8 text-slate-500">Found a typo in the wild? Log it here to earn points.</p>
            </section>
            <section>
                <div className="max-w-4/5 m-auto bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                    <p className="p-6 text-xl font-medium border-b border-slate-500/30">Typo Details</p>

                    <form action="" className="p-6 space-y-10">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="suspect" className="text-slate-700 font-medium">Suspect</label>
                            <input type="text" id="suspect" placeholder="example: Egi" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="original-text" className="text-slate-700 font-medium">Original Text (with typo)</label>
                                <input type="text" id="original-text" placeholder="example: Teh quick brown fox" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="corrected-text" className="text-slate-700 font-medium">Suggested Correction</label>
                                <input type="text" id="corrected-text" placeholder="example: The quick brown fox" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="context" className="text-slate-700 font-medium">Additional Context (Opsional)</label>
                            <textarea type="text" id="context" placeholder="example: Too much wine" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                        </div>
                    </form>

                    <div className="p-4 m-6 bg-slate-100 rounded-2xl flex items-center gap-4">
                        <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#032558" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <p className="text-sm text-slate-500">Your report will be reviewed by the community. You will earn +10 points if verified.</p>
                    </div>

                    <div className="p-4 m-6 flex justify-end items-center gap-4">
                        <button className="px-4 py-2 rounded-xl text-slate-600 cursor-pointer transition hover:bg-slate-200 hover:text-slate-900">Cancel</button>
                        <button className="px-4 py-2 rounded-xl bg-primary text-white cursor-pointer transition hover:bg-sky-900">Submit Report</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Report;