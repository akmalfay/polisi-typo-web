function Settings() {
    return (
        <main className="max-w-4/5 m-auto">
            <section className="mt-20 mb-12 flex items-center space-x-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
                    <p className="mt-2 text-slate-500">Manage your account preferences and settings.</p>
                </div>
            </section>
            <section className="grid grid-cols-3 gap-8">
                <div className="col-span-1 space-y-2">
                    <div className="flex items-center gap-4 p-2 rounded-2xl cursor-pointer hover:bg-slate-200">
                        <svg className='p-1 w-8 rounded-full transition' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <p className="text-sm">Account</p>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-2xl cursor-pointer hover:bg-slate-200">
                        <svg className='p-1 w-8 rounded-full transition' fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M28.3 22.247c-1.167-1.419-2.765-3.429-2.765-5.48v-6.53c0-5.625-4.207-10.202-9.584-10.202-5.378 0-9.552 4.577-9.552 10.202v6.53c0 2.016-1.734 3.921-2.833 5.4-0.989 1.328-1.77 2.378-1.242 3.427 0.463 0.923 1.624 1.041 2.583 1.041h5.73c0.002 2.944 2.389 5.331 5.333 5.331s5.333-2.386 5.334-5.331h5.864c0.61 0 2.036 0 2.527-1.038 0.495-1.050-0.297-2.016-1.395-3.351zM15.969 29.871c-1.788 0-3.239-1.448-3.241-3.235h6.482c-0.003 1.787-1.452 3.235-3.241 3.235zM27.168 24.506h-22.262c-0.153 0-0.281-0.005-0.386-0.012 0.206-0.319 0.508-0.727 0.755-1.058 1.218-1.637 3.255-3.949 3.255-6.669v-6.53c0-4.452 3.22-8.073 7.423-8.073s7.455 3.622 7.455 8.073v6.53c0 2.813 1.878 5.164 3.249 6.832 0.231 0.281 0.507 0.617 0.722 0.905-0.064 0.002-0.134 0.003-0.209 0.003z"></path> </g></svg>
                        <p className="text-sm">Notifications</p>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-2xl cursor-pointer hover:bg-slate-200">
                        <svg className='p-1 w-8 rounded-full transition' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 6C20 6 19.1843 6 19.0001 6C16.2681 6 13.8871 4.93485 11.9999 3C10.1128 4.93478 7.73199 6 5.00009 6C4.81589 6 4.00009 6 4.00009 6C4.00009 6 4 8 4 9.16611C4 14.8596 7.3994 19.6436 12 21C16.6006 19.6436 20 14.8596 20 9.16611C20 8 20 6 20 6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <p className="text-sm">Security</p>
                    </div>
                </div>

                {/* Account */}
                <div className="col-span-2 bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                    <p className="p-6 text-xl font-medium border-b border-slate-500/30">Account Information</p>

                    <div className="flex items-center gap-4 p-6">
                        <svg className='w-20 rounded-full transition hover:bg-slate-300' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <div className="space-y-1">
                            <button className="px-3 py-2 text-sm text-slate-600 border-2 border-slate-300 rounded-xl font-medium cursor-pointer hover:bg-slate-100">Change Avatar</button>
                            <p className="text-sm font-light text-slate-500">JPG, GIF, or PNG. Max size of 1MB</p>
                        </div>
                    </div>

                    <form action="" className="p-6 space-y-10">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="username" className="text-slate-700 font-medium">Username</label>
                                <input type="text" id="username" placeholder="example: Egi" value="Egi" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email" className="text-slate-700 font-medium">Email Address</label>
                                <input type="email" id="email" placeholder="example: officer@polisitypo.co" value="egi.officer@polisitypo.co" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="bio" className="text-slate-700 font-medium">Bio</label>
                            <textarea type="text" id="bio" placeholder="example: Too much wine" value="Hunting down typos since 2023. Justice for PHP!" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                        </div>
                    </form>

                    <div className="mx-6 mb-6 pt-4 flex justify-end items-center gap-4 border-t border-slate-200">
                        <button className="px-4 py-2 rounded-xl bg-primary text-white cursor-pointer transition hover:bg-sky-900">Save Changes</button>
                    </div>
                </div>

                {/* Notifications */}
                <div className="col-span-2 bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                    <p className="p-6 text-xl font-medium border-b border-slate-500/30">Notification Preferences</p>

                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p>Report Updates</p>
                                    <p className="text-sm text-slate-500">Get notified when your reports are verified or rejected.</p>
                                </div>
                                <label class="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" value="" class="peer sr-only" />
                                    <div class="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-3 peer-focus:ring-sky-700"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p>Leaderboard Changes</p>
                                    <p className="text-sm text-slate-500">Weekly updates on your rank and top typists.</p>
                                </div>
                                <label class="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" value="" class="peer sr-only" />
                                    <div class="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-3 peer-focus:ring-sky-700"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p>Marketing Emails</p>
                                    <p className="text-sm text-slate-500">Receive emails about new features and updates.</p>
                                </div>
                                <label class="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" value="" class="peer sr-only" />
                                    <div class="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-3 peer-focus:ring-sky-700"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mx-6 mb-6 pt-4 flex justify-end items-center gap-4 border-t border-slate-200">
                        <button className="px-4 py-2 rounded-xl bg-primary text-white cursor-pointer transition hover:bg-sky-900">Save Preferences</button>
                    </div>
                </div>

                {/* Security */}
                <div className="col-span-2 space-y-8">
                    <div className="bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                        <p className="p-6 text-xl font-medium border-b border-slate-500/30">Change Password</p>

                        <form action="" className="p-6 space-y-10">
                            <div className="space-y-8">
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="current-password" className="text-slate-700 font-medium">Current Password</label>
                                    <input type="password" id="current-password" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="new-password" className="text-slate-700 font-medium">New Password</label>
                                    <input type="password" id="new-password" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="confirm-new-password" className="text-slate-700 font-medium">Confirm New Password</label>
                                    <input type="password" id="confirm-new-password" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                                </div>
                            </div>
                        </form>

                        <div className="mx-6 mb-6 pt-4 flex justify-end items-center gap-4 border-t border-slate-200">
                            <button className="px-4 py-2 rounded-xl bg-primary text-white cursor-pointer transition hover:bg-sky-900">Update Password</button>
                        </div>
                    </div>

                    <div className="bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">
                        <p className="p-6 text-xl font-medium border-b border-slate-500/30">Danger Zone</p>

                        <div className="mx-6 mb-6 pt-4 space-y-4">
                            <p className="text-sm text-slate-500">Once you delete your account, there is no going back. Please be certain.</p>
                            <button className="px-4 py-2 rounded-xl bg-rose-600 text-white cursor-pointer transition hover:bg-sky-900">Update Password</button>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default Settings;