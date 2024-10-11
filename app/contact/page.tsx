import { FaLinkedin, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import DynamicHeading from "@/components/DynamicHeading";
import Globe from "@/components/ui/globe";

const names = [
  "جهة الاتصال الخاصة بي",
  "Мојот контакт",
  "我的聯絡方式",
  "私の連絡先",
  "My Contact",
];

const Page = () => {
  return (
    <section className="bg-[--background] flex flex-col items-center p-4 md:p-8">
      {/* Globe at the top on small screens */}

      {/* Dynamic Heading */}
      <DynamicHeading names={names} />

      {/* Layout for content */}
      <div className="flex flex-col md:flex-row w-full gap-8 mt-8">
        {/* Left: Globe on larger screens */}
        <div className="relative hidden md:flex w-full md:w-1/2 items-center justify-center mb-4 md:mb-0 rounded-lg md:pb-60 md:shadow-xl">
          <Globe />
        </div>

        {/* Right: My Socials and Work Contacts */}
        <div className="flex-1 flex flex-col ">
          {/* Socials */}
          <div className="p-6 shadow-md rounded-lg flex flex-col items-center md:items-start">
            <h2 className="text-xl mb-6 font-semibold text-center md:text-left">
              My Socials
            </h2>
            <ul className="list-none space-y-4">
              {/* Social Links */}
              <li className="flex items-center justify-center md:justify-start">
                <a
                  href="https://twitter.com/MohtashamCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-transform duration-300"
                >
                  <FaXTwitter className="text-4xl mr-2 hover:text-[#1DA1F2] hover:scale-110 transition-transform duration-300" />
                  MohtashamCodes
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <a
                  href="https://linkedin.com/in/mohtashammurshid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-transform duration-300"
                >
                  <FaLinkedin className="text-4xl mr-2 hover:text-[#0077B5] hover:scale-110 transition-transform duration-300" />
                  mohtashammurshid
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <a
                  href="https://instagram.com/clickswithm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-transform duration-300"
                >
                  <FaInstagram className="text-4xl mr-2 hover:text-[#E4405F] hover:scale-110 transition-transform duration-300" />
                  clickswithm
                </a>
              </li>
            </ul>
          </div>

          {/* Work Contacts */}
          <div className="p-6 shadow-md rounded-lg flex flex-col items-center md:items-start">
            <h2 className="text-xl mb-4 font-semibold text-center md:text-left">
              Work Contacts
            </h2>
            <ul className="list-none space-y-4">
              {/* Work Links */}
              <li className="flex items-center justify-center md:justify-start">
                <a
                  href="mailto:mohtashammurshid@gmail.com"
                  className="flex items-center transition-transform duration-300"
                >
                  <FaRegEnvelope className="text-4xl mr-2 hover:text-[#D44638] hover:scale-110 transition-transform duration-300" />
                  mohtashammurshid@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <a
                  href="https://www.fiverr.com/mohtashammadani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-transform duration-300"
                >
                  <SiFiverr className="text-5xl mr-2 hover:text-green-500 hover:scale-110 transition-transform duration-300" />
                  mohtashammadani
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
