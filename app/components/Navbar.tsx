
"use client";
// REACT AND NEXT IMPORT
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

// IMAGES
import logo from "@/public/moonlamplogo.png";

// ICONS
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";
import { useCartStore } from "@/store/useCartStore";

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const cartStore = useCartStore();

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMobileMenu]);




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`py-4 w-full ${isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"}`}>
      <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
        <Image src={logo} width={200} height={undefined} alt="logo" priority placeholder='blur' />
        <ul className={`md:flex items-center gap-8 md:static absolute text-gray-600 font-medium ${showMobileMenu ? "top-12 py-10 w-full bg-secondary left-0 text-center space-y-10 text-white drop-shadow-lg z-20" : "hidden"}`}>
          <li>
            <Link href={"#shop"} onClick={() => setShowMobileMenu(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href={"#features"} onClick={() => setShowMobileMenu(false)}>
              Features
            </Link>
          </li>
          <li>
            <Link href={"#faq"} onClick={() => setShowMobileMenu(false)}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href={"#contact"} onClick={() => setShowMobileMenu(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
          <div onClick={() => cartStore.toggleCart()} className="cursor-pointer relative">
            <BsCart4 size={20} />
            {cartStore.cart.length > 0 && (
              <span className="bg-red-800 flex text-white text-sm font-bold w-4 h-4 rounded-full absolute left-2 bottom-3 items-center justify-center">{cartStore.cart.length}</span>
            )}
          </div>
          <div>
            <BsFillBagHeartFill size={20} />
          </div>
          <div className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <MdClose size={25} className="cursor-pointer" /> : <FiMenu size={25} className="cursor-pointer" />}
          </div>
        </div>
      </div>
      {!cartStore.isOpen && <Cart />}
    </nav>
  )
}

export default Navbar
