import {
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DynamicHeading from "@/components/DynamicHeading";
import { Button } from "@/components/ui/button";

const names = [
  "جهة الاتصال الخاصة بي",
  "Мојот контакт",
  "我的聯絡方式",
  "私の連絡先",
  "My Contact",
];

const Page = () => {
  return (
    <section className="bg-[--background] flex flex-col items-center  ">
      <DynamicHeading names={names} />
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left: Why Contact Me Card */}
        <div className="flex-1 p-6 shadow-md rounded-lg items-center justify-center">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Why Contact Me
          </h2>
          <p className="text-justify">
            I am passionate about helping individuals and organizations tackle
            complex challenges through innovative, thoughtful solutions. Whether
            you&apos;re seeking collaboration on a project, looking for expert advice
            in software development, or exploring new opportunities, I am always
            eager to connect. With a diverse skill set in web development, AI,
            and machine learning, combined with a dedication to continuous
            learning, I aim to deliver value in everything I do. Feel free to
            reach out if you&apos;re ready to collaborate, exchange ideas, or discuss
            how we can create meaningful impact together.
          </p>
          <div className="flex flex-row items-center justify-center gap-6 mt-8">
            <Button className="bg-transparent">
              <a
                href="https://twitter.com/MohtashamCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                My Blog
                <FaArrowRight className="ml-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right: My Socials and Work Contacts */}
        <div className="flex-1 flex flex-col gap-4 ">
          {/* Socials */}
          <div className="flex-1  p-6 shadow-md rounded-lg items-center justify-center">
            <h2 className="text-xl  mb-8 font-semibold">My Socials</h2>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <a
                  href="https://twitter.com/MohtashamCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center"
                >
                  <FaXTwitter className="text-4xl mr-2  hover:scale-110 transition-transform duration-300" />
                  MohtashamCodes
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://linkedin.com/in/mohtashammurshid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center"
                >
                  <FaLinkedin className="text-4xl mr-2 hover:text-[#0077B5] hover:scale-110 transition-transform duration-300" />
                  mohtashammurshid
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://instagram.com/clickswithm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center"
                >
                  <FaInstagram className="text-4xl mr-2 hover:text-[#E4405F] hover:scale-110 transition-transform duration-300" />
                  clickswithm
                </a>
              </li>
            </ul>
          </div>
          {/* Work Contacts */}
          <div className="flex-1  p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Work Contacts</h2>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FaRegEnvelope className="text-4xl mr-2 hover:text-[#D44638] hover:scale-110 transition-transform duration-300 " />
                <a href="mailto:mohtashammurshid@gmail.com">
                  mohtashammurshid@gmail.com
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
