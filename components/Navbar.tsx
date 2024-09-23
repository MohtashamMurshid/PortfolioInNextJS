import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"; // Import your Button component

export default function Navbar() {
  return (
    <div className="mt-2">
      <nav className="flex justify-between items-center p-4 text-white">
        <div className="text-xl font-light tracking-wide font-sans flex flex-row gap-3 items-center">
          <Avatar>
            <AvatarImage src="https://mohtasham.pages.dev/assets/profile-pic.png" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <h1 className='jacquarda-bastarda-9-regular'>Mohtasham</h1>
        </div>
        <div className="flex space-x-4">
          <Link href="/" passHref>
            <Button className="text-white bg-transparent">About</Button>
          </Link>
          <Link href="/projects" passHref>
            <Button className="text-white bg-transparent">Projects</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button className="text-white bg-transparent">Contact</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button className="text-white bg-transparent">Blog</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
