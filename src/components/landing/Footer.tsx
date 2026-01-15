const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        {/* X (Twitter) Icon */}
        <a
          href="https://twitter.com/alexib"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors duration-200 mb-6"
          aria-label="Follow on X (Twitter)"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Footer Text */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            Built in public by{" "}
            <a
              href="https://twitter.com/alexwtlf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              @alexwtlf
            </a>
          </p>
          <p className="font-medium text-foreground">
            From validation to real users.
          </p>
          <p>
            <a
              href="mailto:contact@vcodinglist.com"
              className="hover:text-primary transition-colors"
            >
              contact@vcodinglist.com
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} VcodingList. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
