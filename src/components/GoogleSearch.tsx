

export default function GoogleSearch() {
  return (
    <div>
      
 
    <div className="flex items-center justify-center bg-gray-900">
      <div className="flex h-screen flex-col justify-center gap-8 bg-gray-900">
        <div className="flex items-center justify-center">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png " alt="Google" className="relattive dark:text-white" />
        </div>
        <div className="relative">
          <input className="relative size-10 w-full rounded-full border bg-slate-900 px-14 py-1 pl-10 text-white hover:bg-slate-800 shadow-lg" placeholder="search" type="text" />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search text-white">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-24 flex items-center pl-96">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mic text-white">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-32 flex items-center pl-96">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-scan-search text-white">
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
              <circle cx="12" cy="12" r="3" />
              <path d="m16 16-1.9-1.9" />
            </svg>
          </div>
        </div>

        <div className="flex flex-row gap-7">
          <button className="border:white ml-28 bg-gray-800 px-6 py-2 text-white hover:bg-slate-700">Google Search</button>
          <button className="border:white bg-gray-800 px-6 py-2 text-white hover:bg-slate-700">I'm feeling lucky</button>
        </div>
        <div>
          <p className="text-white">Google offered in: বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</p>
        </div>
      </div>
    </div>




      
    </div>
  )
}
