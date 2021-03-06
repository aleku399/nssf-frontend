import Link from "next/link";
import * as React from "react";

const linkStyle = {
  color: "red",
  marginRight: 15,
};

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
