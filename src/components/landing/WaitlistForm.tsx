import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-lg mx-auto animate-scale-in">
        <div className="bg-accent border border-primary/20 rounded-xl p-6 text-center">
          <p className="text-accent-foreground font-medium">
            🎉 You're on the list! We'll email you at launch.
          </p>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="h-14 px-5 text-base rounded-xl border-border bg-background focus:border-primary focus:ring-primary/20"
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-14 px-8 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
        >
          {status === "loading" ? "Joining…" : "Join Waitlist"}
        </Button>
      </form>

      {status === "error" && (
        <div className="mt-4 bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-center animate-scale-in">
          <p className="text-destructive text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      {status !== "error" && (
        <p className="text-sm text-muted-foreground text-center mt-4">
          We respect your privacy. No spam, ever.
        </p>
      )}
    </div>
  );
};

export default WaitlistForm;
