import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <p>
      <Link style={{ color: "black" }} to="/">
        How'd you end up here?
      </Link>
    </p>
  );
}

export default NotFoundPage;
