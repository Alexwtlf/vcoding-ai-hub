import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "💬",
    title: "Real Feedback, Not Noise",
    description:
      "Get early feedback from builders and early adopters who understand AI-native products — not vanity comments.",
  },
  {
    icon: "📊",
    title: "Validation Through Rankings",
    description:
      "Community votes and leaderboards surface real signal. Strong products rise. Weak ideas fade early.",
  },
  {
    icon: "🌍",
    title: "From Validation to Real Users",
    description:
      "Top-ranked products don't stop at visibility. They get distributed to real users looking for AI-powered solutions.",
  },
  {
    icon: "🤖",
    title: "Built for Vibe Coders",
    description:
      "Show what percentage of your product was built using tools like Cursor, Claude, v0, or Lovable.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Building is easy.
            <br />
            <span className="gradient-text">Getting users is not.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            VcodingList solves the real bottlenecks AI-native builders face today.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
