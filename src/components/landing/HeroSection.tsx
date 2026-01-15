import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-up">
        {/* Launch Badge */}
        <Badge 
          variant="outline" 
          className="mb-8 px-4 py-2 text-sm font-medium bg-accent text-accent-foreground border-primary/20 rounded-full"
        >
          The #1 platform for AI-built products
        </Badge>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6">
          Launch. Validate.
          <br />
          <span className="gradient-text">Reach Real Users.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The product discovery and ranking platform for AI-native builders.
          <br className="hidden sm:block" />
          Turn early traction into real users.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
