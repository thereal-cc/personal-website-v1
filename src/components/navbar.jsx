export default function Navbar({ children }) {
    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="/" className="text-slate-100">Home</a></li>
                    <li><a href="/projects" className="text-slate-100">Projects</a></li>
                    <li><a href="/contact" className="text-slate-100">Contact</a></li>
                </ul>
                </div>
            </div>
            <div className="navbar-end">
                <a href="https://www.instagram.com/carson_cassidy20/">
                    <button className="btn btn-ghost btn-circle">
                        <svg className="h-6 w-6 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </button>
                </a>
                <a href="https://github.com/thereal-cc">
                    <button className="btn btn-ghost btn-circle">
                        <svg className="h-6 w-6 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    );
}