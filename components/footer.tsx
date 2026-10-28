export function Footer() {
  return (
    <footer className="bg-[#20312f] text-[#b9c5c0] py-10">
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-[0.68rem] tracking-[0.1em] uppercase">
        {/* Left Side: Copyright & Location */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
          <span>© 2026 Marci Metzger · The Ridge Realty Group</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span>Pahrump, Nevada · REALTOR</span>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/MarciHomes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/60 hover:text-[#e2c99f] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/marcimetzger_theridge/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 hover:text-[#e2c99f] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/marci-metzger-30642496/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/60 hover:text-[#e2c99f] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Yelp */}
          <a
            href="https://www.yelp.com/biz/xr3yQN_m2Sg00R_7S6pG2w"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
            className="text-white/60 hover:text-[#e2c99f] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22.117 13.212c-.817-.536-3.165-1.542-3.81-1.784-.582-.22-1.15-.36-1.637-.36-.475 0-.864.136-1.138.408-.352.35-.43.84-.22 1.378.207.533.66 1.005 1.343 1.404 1.643.956 3.135 1.48 3.906 1.74.637.215 1.31-.122 1.51-.755.192-.603-.005-1.34-.538-1.83l.584-.2zm-7.747 3.453c-1.405.29-2.583.916-3.183 1.692-.502.65-.607 1.45-.28 2.136.343.723 1.094 1.195 1.99 1.256 1.277.088 2.84-.456 3.89-1.35.644-.55.96-1.31.84-2.02-.13-.75-.694-1.412-1.52-1.77-.637-.28-1.294-.316-1.737-.144zM11.89 1.11c-.828-.073-1.59.49-1.708 1.318-.174 1.226-.143 3.68.025 4.833.117.803.53 1.318 1.128 1.406.62.09 1.265-.326 1.63-1.06.58-1.165 1.15-3.042 1.265-3.886.095-.69-.26-1.384-.89-1.728-.457-.25-1.003-.34-1.45-.33-.002 0-.003 0-.005 0zm-5.23 7.188c-.71-.444-1.588-.353-2.146.216-.734.748-1.672 2.47-2.062 3.39-.285.673-.155 1.42.328 1.893.517.507 1.27.583 1.91.192.888-.542 2.172-1.77 2.677-2.39.413-.506.472-1.227.156-1.824-.233-.442-.58-.77-1.023-.99-.002-.001-.003-.002-.005-.002zm4.63 8.19c-.79-.3-1.73-.114-2.328.46-.707.68-1.62 2.317-1.99 3.21-.27.65-.13 1.36.34 1.81.49.47 1.2.53 1.8.15.82-.52 1.99-1.69 2.46-2.29.39-.5.44-1.18.15-1.75-.23-.43-.58-.75-1.01-.96z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
