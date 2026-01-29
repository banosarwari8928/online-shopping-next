import { APP_NAME } from "../lib/constants";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex-center text-yellow-600 shadow-sm border-t">
      <div className="p-5 text-brand-500 ">
        {currentYear} | {APP_NAME}
      </div>
    </footer>
  );
}

export default Footer;
