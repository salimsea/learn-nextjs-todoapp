import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/users"}>Pengguna</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
