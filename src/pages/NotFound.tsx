import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-espresso text-ivory min-h-screen flex flex-col grain">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <span className="font-script text-gold leading-none text-[16rem] md:text-[22rem] select-none opacity-10 absolute pointer-events-none">
          404
        </span>
        <span className="text-gold tracking-[0.5em] text-xs uppercase mb-6 relative z-10">Page Not Found</span>
        <h2 className="font-serif text-4xl md:text-6xl relative z-10 max-w-xl leading-tight">
          This page has left the stage.
        </h2>
        <p className="mt-6 text-ivory/60 text-base md:text-lg max-w-md leading-relaxed relative z-10">
          The page you're looking for doesn't exist or may have moved. Let's get you back to the music.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 relative z-10">
          <Link
            to="/"
            className="px-10 py-4 bg-gold text-espresso text-xs tracking-[0.35em] uppercase font-medium hover:bg-ivory transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/bookings"
            className="px-10 py-4 border border-ivory/30 text-ivory text-xs tracking-[0.35em] uppercase font-medium hover:bg-ivory hover:text-espresso transition-colors"
          >
            Make a Booking
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
