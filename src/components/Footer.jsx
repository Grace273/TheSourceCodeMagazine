// const Footer = () => {
//   return (
//     <footer id="footer">
//       <small>© 2026 The Source Code Development. All Rights Reserved.</small>
//     </footer>
//   );
// };

// export default Footer;
export default function Footer({ siteName = "CS Magazine", year = new Date().getFullYear() }) {
  return (
    <footer className="cs-magazine bg-dark text-muted font-sans border-top px-page py-8">
      <div className="content-width mx-auto flex footer-wrap items-center justify-between gap-6 text-small">
        <p className="m-0">© {year} {siteName}. Student-run at UTSG</p>
        <a className="link-hover" href="/#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
