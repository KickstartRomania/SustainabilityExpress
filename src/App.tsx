import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Agenda from "./pages/Agenda";
import Themes from "./pages/Themes";
import Logistics from "./pages/Logistics";
import Mentors from "./pages/Mentors";
import Partners from "./pages/Partners";
import Apply from "./pages/Apply";
import MentorApply from "./pages/MentorApply";
import FAQ from "./pages/FAQ";
import Onboard from "./pages/Onboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/mentor-apply" element={<MentorApply />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/onboard" element={<Onboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
