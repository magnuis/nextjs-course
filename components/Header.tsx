import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              className="rounded-full"
              src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
              alt="logo"
              height={50}
              width={50}
            />
          </Link>
        </div>
        <div>
          {" "}
          <Link
            href="https://abakus.no"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full"
          >
            Gå til Abakus sin nettside
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
