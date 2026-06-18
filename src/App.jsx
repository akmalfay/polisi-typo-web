import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="bg-slate-100 min-h-screen font-inter">
      <header className='sticky top-0 bg-white shadow-sm px-4'>
        <div className='max-w-4/5 m-auto flex justify-between items-center'>
          <img src={logo} alt="Logo Polisi Typo" className='w-32' />
          <div>
            <ul className='flex gap-4 font-medium'>
              <li className='cursor-pointer hover:font-bold'>Leaderboard</li>
              <li className='cursor-pointer hover:font-bold'>Report Typo</li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            <img src="" alt="Theme Toggle" />
            <span>|</span>
            <Link>Login</Link>
            <Link>
              <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </Link>
          </div>
        </div>
      </header>
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
            <div className='bg-white p-6 rounded-2xl shadow-md border border-slate-300 transition hover:shadow-xl hover:border-slate-400'>
              <div className='flex justify-between items-start gap-8'>
                <div>
                  <p className='text-lg'>Suspect: John Doe</p>
                  <p className='text-sm text-slate-500 mt-1'>@Username • 2 hours ago</p>
                </div>
                <p className='bg-green-200 text-green-800 px-3 py-1 rounded-2xl text-sm'>Verified</p>
              </div>

              <div className='mt-4 space-y-4'>
                <div>
                  <p className='text-xs text-slate-500 font-semibold'>ORIGINAL</p>
                  <p className='text-slate-600 line-through decoration-rose-500 decoration-2 font-light'>Teh quick brown fox</p>
                </div>
                <div>
                  <p className='text-xs text-slate-500 font-semibold'>CORRECTION</p>
                  <p>The</p>
                </div>
              </div>

              <div className='pt-4 border-t border-slate-200 mt-4 text-center'>
                <p className='p-2 text-slate-600 font-medium rounded-2xl cursor-pointer transition hover:bg-slate-200 hover:text-slate-900'>View Details</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='text-center p-8 mt-20 border-t border-slate-300'>
        <p className='text-slate-500'>© 2026 Polisi Typo. Keep the group typo-free.</p>
      </footer>
    </div>
  )
}

export default App
