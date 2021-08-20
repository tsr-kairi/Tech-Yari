import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer class="footer bg-[#035656] relative h-16 items-center">
      <div class="container mx-auto px-12 flex justify-between pt-6">
        <Link href="/">
          <a>
            <p class="text-sm text-white">TechYari © 2021</p>
          </a>
        </Link>
        <span className="text-white text-sm">Developed by tsr kairi</span>
      </div>
    </footer>
  );
}

export default Footer;
