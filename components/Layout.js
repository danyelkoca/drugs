import Meta from "./Meta";
import Navbar from "./topMenu/Navbar";
import Footnote from "./Footnote";

// this layout is applied to all pages becuase it wraps _app.js

const Layout = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Meta />
      <Navbar />
      <div style={{ padding: "20px 20px 60px 20px" }}>{children}</div>
      <Footnote />
    </div>
  );
};

export default Layout;
