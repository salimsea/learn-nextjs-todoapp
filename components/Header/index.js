import { Logo } from "assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaEthernet, FaMoon, FaPhoneAlt, FaSun } from "react-icons/fa";
import { IoListOutline } from "react-icons/io5";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar expand="lg" color="dark" container="md">
      <NavbarBrand>
        <Link href={"/"}>
          <h3 className="text-white">
            <FaEthernet color="white" /> TodoApp
          </h3>
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
        <IoListOutline className="toggle-menu-mobile" color="white" size={30} />
      </NavbarToggler>

      <Collapse isOpen={isOpen} navbar>
        <MyNav />
      </Collapse>
    </Navbar>
  );
};

const jsonMenus = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Data",
    path: "/todo",
  },
  {
    title: "New",
    path: "/todo/new",
  },
];

const MyNav = () => {
  const router = useRouter();
  return (
    <Nav className="ms-auto" navbar>
      {jsonMenus.map((v, i) => {
        return (
          <NavItem key={i}>
            <Link href={v.path} passHref>
              <NavLink
                className={`${
                  router.pathname === v.path ? "active" : " "
                } text-white`}
              >
                {v.title}
              </NavLink>
            </Link>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default Header;
