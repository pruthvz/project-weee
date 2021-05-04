import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>
          {" "}
          <svg
            id="titleIcon"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            />
          </svg>{" "}
          Weeeeee{" "}
        </h2>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <span> </span>
      <Link href="/user">
        <a>Users</a>
      </Link>
      <span> </span>

      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
