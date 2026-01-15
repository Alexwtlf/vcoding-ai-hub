import { Button } from "@/components/ui/button";

interface NavbarProps {
  onJoinClick: () => void;
}

const Navbar = ({ onJoinClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold text-foreground">
              VcodingList
            </span>
          </div>

          {/* Join Waitlist Button */}
          <Button
            onClick={onJoinClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
