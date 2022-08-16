import { Logo } from "assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaMoon, FaPhoneAlt, FaSun } from "react-icons/fa";
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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [darkTheme, setDarkTheme] = useState(undefined);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <Navbar
      expand="lg"
      light
      container="md"
      className="header"
      style={{
        background: darkTheme
          ? `rgba(62, 62, 62, ${backgroundTransparacy})`
          : `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <NavbarBrand>
        <Link href={"/"}>
          <Image
            src={Logo}
            width={50}
            height={50}
            className="img-fluid"
            alt=""
          />
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <MyNav />
        <Button
          onClick={() =>
            window.location.replace(
              "https://wa.me/6282112235774?text=Assalamualaikum%20Warahmatullahi%20Wabarakatuh"
            )
          }
          className="btn-costum-primary-outline ms-4 px-5 me-4"
        >
          <FaPhoneAlt color="#fff" /> CONTACT ME
        </Button>
        {/* {darkTheme !== undefined && (
          <form action="#">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          </form>
        )} */}
        <button
          className="btn btn-switch-darkmode"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? (
            <>
              <FaSun color="yellow" size={15} />
              <p>light</p>
            </>
          ) : (
            <>
              <FaMoon color="grey" size={15} />
              <p>dark</p>
            </>
          )}
        </button>
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
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Tools",
    path: "/tools",
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
              <NavLink className={router.pathname === v.path ? "active" : " "}>
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
