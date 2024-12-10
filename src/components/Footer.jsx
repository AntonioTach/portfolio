const Footer = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative border-t border-gray-900/10 py-20"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="md:grid md:grid-cols-3">
        <div className="flex items-center justify-center hover:scale-110 transition-transform">
          <a
            href="/"
            className="text-md leading-6 text-white"
          >
            Antonio Viña Hernandez
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:col-span-2 md:mt-0">
          <div className="sm:grid sm:grid-cols-1 sm:gap-8">
            <div className="flex justify-evenly">
              <div className="hover:scale-110 transition-transform">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/antonio-viña-hernández-5b6b611b4"
                  className="text-md leading-6 text-white ml-4"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
