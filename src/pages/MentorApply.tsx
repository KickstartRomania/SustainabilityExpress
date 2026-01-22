import { useState } from "react";
import { z } from "zod";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { logError } from "@/lib/error-handler";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const mentorApplicationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  linkedin: z
    .string()
    .trim()
    .min(5, "LinkedIn profile is required")
    .max(500, "LinkedIn URL must be less than 500 characters"),
  phone: z
    .string()
    .trim()
    .min(8, "Phone must be at least 8 characters")
    .max(25, "Phone must be less than 25 characters"),
  basedIn: z
    .string()
    .trim()
    .min(2, "Location is required")
    .max(100, "Location must be less than 100 characters"),
  background: z
    .string()
    .trim()
    .min(10, "Background must be at least 10 characters")
    .max(2000, "Background must be less than 2000 characters"),
});

type MentorApplicationFormData = z.infer<typeof mentorApplicationSchema>;

const MentorApply = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<MentorApplicationFormData>({
    name: "",
    email: "",
    linkedin: "",
    phone: "",
    basedIn: "",
    background: "",
  });

  const handleInputChange = (field: keyof MentorApplicationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = mentorApplicationSchema.safeParse(formData);
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const validated = validationResult.data;
      const { error } = await supabase.from("mentor_applications").insert({
        name: validated.name,
        email: validated.email,
        linkedin: validated.linkedin,
        phone: validated.phone,
        based_in: validated.basedIn,
        background: validated.background,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Thanks!",
        description: "We received your mentor application and will get back to you soon.",
      });
    } catch (error: unknown) {
      logError(error, "mentor-application-submission");
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your mentor application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-foreground mb-4">Application received</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Thanks for volunteering your expertise — we’ll contact you by email.
                </p>
              </div>

              <Card className="card-elevated text-left">
                <h2 className="text-xl font-bold text-foreground mb-4">What happens next?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    We review mentor applications on a rolling basis
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    We’ll reach out if we have a good fit for the expert panel
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">Apply as Mentor</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Share your expertise and help teams build impactful solutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="card-elevated">
              <h2 className="text-2xl font-bold text-foreground mb-8">Mentor sign-up</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn *</Label>
                    <Input
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      placeholder="https://www.linkedin.com/in/username"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+40 123 456 789"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="basedIn">Where are you based? *</Label>
                  <Input
                    id="basedIn"
                    value={formData.basedIn}
                    onChange={(e) => handleInputChange("basedIn", e.target.value)}
                    placeholder="City, Country"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background">Background *</Label>
                  <Textarea
                    id="background"
                    value={formData.background}
                    onChange={(e) => handleInputChange("background", e.target.value)}
                    placeholder="Tell us about your experience and what you can mentor teams on..."
                    maxLength={2000}
                    required
                  />
                  <div className="text-sm text-muted-foreground">{formData.background.length}/2000 characters</div>
                </div>

                <Button type="submit" className="btn-hero w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit mentor application <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentorApply;
