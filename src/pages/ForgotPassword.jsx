import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <main className="max-w-4/5 m-auto">
            <section className="mt-20 mb-12 text-center">
                <svg className="p-3.5 w-16 bg-slate-300 rounded-full m-auto" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#032558"></path></g></svg>
                <h1 className="mt-4 text-2xl font-bold text-slate-800">Reset your password</h1>
                <p className="mt-2 text-slate-500">Enter the email associated with your account and we'll send you a link to reset your password.</p>
            </section>
            <section>
                <div className="max-w-1/2 m-auto bg-white shadow-md border rounded-2xl border-slate-300 transition hover:shadow-xl hover:border-slate-400">

                    <form action="" className="p-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-slate-700 font-medium">Email</label>
                            <input type="email" id="email" placeholder="officer@polisitypo.co" className="px-2.5 py-2 outline outline-slate-500/50 rounded-xl placeholder:text-slate-500/60 placeholder:text-sm" />
                        </div>
                    </form>

                    <div className="m-6">
                        <button className="w-full px-4 py-2 rounded-xl bg-primary text-white cursor-pointer transition hover:bg-sky-900">Send Reset Link</button>
                    </div>
                </div>

                <p className="text-center my-8 text-slate-500">Remembered your password? <Link to="/login" className="text-primary hover:underline">Back to Login</Link></p>

            </section>
        </main>
    )
}

export default ForgotPassword;