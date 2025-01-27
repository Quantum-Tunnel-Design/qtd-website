import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhatWeThink from "./pages/WhatWeThink";
import WhoWeAre from "./pages/WhoWeAre";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <TooltipProvider>
                <Index />
              </TooltipProvider>
            } 
          />
          <Route 
            path="/what-we-think" 
            element={
              <TooltipProvider>
                <WhatWeThink />
              </TooltipProvider>
            } 
          />
          <Route 
            path="/who-we-are" 
            element={
              <TooltipProvider>
                <WhoWeAre />
              </TooltipProvider>
            } 
          />
          <Route 
            path="/careers" 
            element={
              <TooltipProvider>
                <Careers />
              </TooltipProvider>
            } 
          />
        </Routes>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;