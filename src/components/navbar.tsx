import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-black">
            EDIC <span className="text-orange-600">TCET</span>
          </span>
        </Link>
        
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-neutral-600">
          <Link href="/startups" className="hover:text-black transition-colors">Startups</Link>
          <Link href="/programs" className="hover:text-black transition-colors">Programs</Link>
          <Link href="/events" className="hover:text-black transition-colors">Events</Link>
          <Link href="/mentors" className="hover:text-black transition-colors">Mentors</Link>
          <Link href="/component-request" className="hover:text-black transition-colors text-orange-600">Components</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex rounded-full border-neutral-200">
            Login
          </Button>
          <Button className="rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-sm">
            Join EDIC
          </Button>
        </div>
      </div>
    </nav>
  );
}
