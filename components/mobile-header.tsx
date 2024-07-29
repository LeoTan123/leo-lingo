import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";
import Image from "next/image";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b fixed top-0 w-full z-50">
      <MobileSidebar />

      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Leo Lingo
          </h1>
        </div>
      </Link>
    </nav>
  );
};
