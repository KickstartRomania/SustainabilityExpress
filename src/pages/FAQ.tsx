import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

const FAQ = () => {
  const faqs = [
    {
      question: "Can I work on a project alone, without a team?",
      answer: "No. Sustainability Express is designed to bring together people from diverse backgrounds to encourage learning both from mentors and from fellow participants. All participants are required to work in teams and collaborate throughout the program."
    },
    {
      question: "What if I don't have coding experience?",
      answer: "No problem! We need designers, product managers, business strategists, and sustainability experts. Many winning solutions focus on user experience, business models, and creative campaigns rather than complex code."
    },
    {
      question: "How reliable is the internet on the train?",
      answer: "Internet connectivity during the train journey may be inconsistent, whether you're using the onboard Wi-Fi or your personal hotspot. On the bright side, it's the perfect opportunity to unplug, relax, and focus on developing ideas away from online noise."
    },
    {
      question: "Where will we sleep?",
      answer: "The train has sleeping compartments, but light sleepers should bring earplugs and eye masks. We designate quiet coaches after midnight. Some participants prefer to work through the night!"
    },
    {
      question: "What about meals and dietary requirements?",
      answer: "We provide 7 meals plus coffee throughout the journey. Let us know about dietary restrictions in your application. Bring a reusable bottle and cup - we offer rewards for sustainable choices!"
    },
    {
      question: "Can I leave early or join late?",
      answer: "The experience is designed as a complete journey from Friday departure to Sunday arrival. Early departure is possible but you'll miss key parts of the program. Late joining isn't feasible due to train logistics."
    },
    {
      question: "What are the safety protocols?",
      answer: "We have staffed coaches throughout the journey, emergency contacts shared at boarding, and follow all Astra Trans Carpatic safety guidelines. Our Code of Conduct ensures a respectful environment for all participants."
    },
    {
      question: "What should I pack for 48 hours?",
      answer: "Essentials: laptop, charger, comfortable clothes, toiletries, any hardware/sensors you might need. Optional: pillow, earplugs, eye mask, snacks. We provide workspace, meals, and charging stations."
    },
    {
      question: "Are there prizes for winners?",
      answer: "Yes! Details will be announced closer to the event. Beyond prizes, you'll gain valuable connections, mentorship, potential co-founders, and the experience of building something meaningful in a unique environment."
    },
    {
      question: "How do I prepare for the hackathon?",
      answer: "No specific preparation needed! Review the challenge themes, think about sustainability problems that interest you, and come with an open mind. We'll provide everything else including mentorship and guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions about the Sustainability Express? We've got answers. 
              If you don't find what you're looking for, feel free to reach out!
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still have questions CTA */}
          <div className="text-center bg-secondary/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help! Reach out to our team and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;