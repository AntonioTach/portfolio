const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="relative border-t border-gray-900/10 py-20">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="md:grid md:grid-cols-3">
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center justify-center hover:scale-110 transition-transform"
        >
          <div className="hover:scale-110 transition-transform">
            <a
              href="https://www.instagram.com/udigital.business/"
              className="text-md leading-6 text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />Antonio Viña Hernandez
            </a>
          </div>
        </a>

        <div className="mt-10 grid grid-cols-1 gap-8 md:col-span-2 md:mt-0">
          <div className="sm:grid sm:grid-cols-1 sm:gap-8">
            <div className="flex justify-evenly">
              <div className="hover:scale-110 transition-transform">
                <a
                  href="https://udigitalbusiness.com/"
                  className="text-md leading-6 text-white"
                >
                  <i className="fab fa-instagram mr-2"></i>Udigital Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer