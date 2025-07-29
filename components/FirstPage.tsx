import { Card } from './Card';
import Image from 'next/image';
import Robot from './Robot';
import Spline from '@splinetool/react-spline/next';



const FirstPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
  
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-green-400/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        

        {/* Main Content */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Take Control of Your
              <span className="block bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Track expenses, set budgets, and achieve your financial goals with our intuitive expense tracking platform. Start your journey to financial freedom today.
            </p>
            
            
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Smart Analytics</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Get detailed insights into your spending patterns with analytics and visual reports.
              </p>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Budget Planning</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Set realistic budgets and track your progress with intelligent alerts and recommendations.
              </p>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Real-time Sync</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Access your financial data anywhere with secure cloud sync across all your devices.
              </p>
            </Card>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-green-50 to-green-100 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">

              <div className="flex items-center space-x-2 mb-6">
                <div className=" from-green-600 to-green-400 rounded-xl flex items-center justify-center">
                    <Image src="/logo_footer.png" alt="logo" width={100} height={100} />
                </div>
            
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
                Empowering individuals and businesses to take control of their financial future through intelligent expense tracking and budget management.
              </p>
              <div className="mb-6">
                <p className="text-lg font-semibold text-slate-800 ">Created by</p>
                <p className="text-green-600 font-semibold text-lg">Dulen Vinjaya Lamahewa</p>
              </div>

              <span className='text-lg font-semibold text-slate-800 mb-6'><h1>Contact Us</h1></span>

            <div className="flex space-x-4 mt-2">
            
            {/* Email */}
                <a 
                    href="mailto:dulenvinjaya5@gmail.com" 
                    className="w-12 h-12 bg-green-100 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                    </svg>
                </a>

                {/* Instagram */}
                <a 
                    href="https://www.instagram.com/dulen_vinjaya21?igsh=MTJqZGhzYjZrbHh6MA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-100 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>

                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/in/dulen-lamahewa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-100 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>

                </a>

                <a 
                    href="tel:+94764534677" 
                    className="w-12 h-12 bg-green-100 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                </a>
                </div>  
                

            
            </div>
           
           <div className="lg:col-span-2 flex justify-center lg:justify-end lg:pr-10 overflow-hidden">
              <Robot />
            </div>

           

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-green-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm">
              © 2024 DulK. All rights reserved. Built with passion for financial freedom.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600">
                Trusted by 1000+ users worldwide
              </span>
            </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-2">
      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
      <span className="text-sm text-slate-600">Secured by Clerk</span>
      <Image
        src="/Clerk.png" // Make sure the image is in the `public/` folder
        alt="Clerk logo"
        width={50}
        height={50}
      />
    </div>

            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FirstPage;