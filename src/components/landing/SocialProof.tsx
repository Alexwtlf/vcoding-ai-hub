import { Users, Sparkles } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    { value: "2M+", label: "AI-native builders", icon: Users },
    { value: "80%", label: "avg. Vibe in 2026", icon: Sparkles },
    { value: "Cursor", label: "top AI-native tool", icon: null },
  ];

  // Generate gradient placeholder avatars
  const avatars = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Metrics */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-10">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground flex items-center justify-center gap-2">
                {metric.icon && <metric.icon className="w-6 h-6 text-primary" />}
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Avatar Row */}
        <div className="flex justify-center items-center">
          <div className="flex -space-x-3">
            {avatars.map((_, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full gradient-teal-cyan border-2 border-background shadow-sm"
                style={{
                  opacity: 1 - index * 0.1,
                }}
              />
            ))}
          </div>
          <span className="ml-4 text-sm text-muted-foreground">
            Early signal &gt; vanity metrics
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
