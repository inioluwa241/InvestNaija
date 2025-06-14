import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";  
import Link from "next/link";
    
    const Hero = () => {
    return (
        <section style={{padding:"15rem 5rem"}} className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden z-0 bg-gray-900">
          {/* <img
            src="/images/hero-bg-1.jpg"
            alt="Hero Background"
            className="object-cover object-top w-full h-full opacity-70"
          /> */}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-5 md:flex-row items-center">
            <div className="flex flex-col items-start gap-3.5 w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Smart Trading for{" "}
                <span className="text-[var(--primary)]">Smarter Investors</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Combine powerful trading tools with financial education to make
                informed investment decisions. Start your journey to financial
                freedom today.
              </p>
              <div style={{marginBlock:"2rem"}} className="flex flex-col gap-3 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button style={{padding:"1rem 2rem"}} className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg !rounded-button cursor-pointer whitespace-nowrap">
                 <Link href="../signUp-IN/signUp">
                  Get Started for Free
                 </Link>
                </button>
                <button style={{padding:"1rem 2rem"}} className="flex items-center gap-1 bg-white text-[var(--primary)] px-8 py-3 rounded-lg border border-[var(--primary)] hover:bg-gray-900 transition-colors !rounded-button cursor-pointer whitespace-nowrap">
                  <FontAwesomeIcon icon={faPlayCircle} />  
                 <Link href="../DashBoardPage/DashBoard/MainPage">
                 Watch Demo
                  </Link>
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-2 justify-start items-start">
                <div className="flex items-start -space-x-2">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20smiling%20young%20man%2C%20neutral%20background%2C%20high%20quality%20portrait&width=40&height=40&seq=5&orientation=squarish"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20smiling%20young%20woman%20with%20glasses%2C%20neutral%20background%2C%20high%20quality%20portrait&width=40&height=40&seq=6&orientation=squarish"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle%20aged%20man%2C%20neutral%20background%2C%20high%20quality%20portrait&width=40&height=40&seq=7&orientation=squarish"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <p className="ml-4 text-sm text-gray-600">
                  <span className="font-bold">1,000+</span> investors already
                  joined
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3 opacity-70"></div>
                <img
                  src="https://readdy.ai/api/search-image?query=modern%203D%20illustration%20of%20financial%20trading%20platform%20dashboard%20with%20charts%2C%20graphs%2C%20and%20analytics%2C%20clean%20design%2C%20blue%20and%20white%20color%20scheme%2C%20showing%20stock%20market%20data%20visualization%2C%20no%20text%2C%20professional%20looking%20interface%20on%20laptop%20mockup&width=600&height=500&seq=8&orientation=landscape"
                  alt="Trading Platform"
                  className="relative rounded-2xl shadow-xl z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    }

export default Hero;