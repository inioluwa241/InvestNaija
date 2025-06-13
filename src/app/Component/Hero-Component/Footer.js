import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faXTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import fafacebook from "@fortawesome/free-brands-svg-icons/faFacebook";
// import faTwitter from "@fortawesome/free-brands-svg-icons/faTwitter";

const Footer = () => {
    return(
        <div style={{padding:"8rem 5rem"}} className="flex flex-col justify-start justify-baseline container mx-auto">
          <div className="flex  justify-between items-center gap-1">
               <div className="w-75 flex flex-col gap-2.5 items-start mb-8 md:mb-0">
                {/* Logo and Title */}
                <div className="flex justify-center items-center text-center">
                     <img
                    src="/images/logo.png"
                    alt="InvestNaija Logo"
                    className="w-10 h-10"
                     />
                    <h3 className="text-3xl font-bold text-[var(--primary)] mb-4">InvestNaija</h3>
                </div>
                <div>
                 <p style={{marginBottom:"1.25rem"}}>
                    Empowering investors with the tools and knowledge to make
                    smarter financial decisions.
                </p>
              <div style={{paddingBlock:"1rem"}} className="flex gap-4 space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />

                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                   <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                 <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
               </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold ">Company</h4>
              <ul className="flex flex-col gap-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="flex flex-col gap-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Learning Hub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    API Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-75 flex flex-col gap-3 items-start">
              <h4 style={{marginBottom:"1.25rem"}} className="text-white font-semibold mb-4">Stay Updated</h4>
              <p className="mb-4 line-height-6">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  style={{padding:"0.75rem"}} 
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none border-none"
                />
                <button
                style={{padding:"0.75rem 1rem"}} 
                className="bg-[var(--primary)] text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors !rounded-button cursor-pointer whitespace-nowrap">
                 <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
          </div>
     )
}

export default Footer; 
