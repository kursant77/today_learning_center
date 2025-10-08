import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "@/pages/home";
import Courses from "@/pages/courses";
import Teachers from "@/pages/teachers";
import About from "@/pages/about";
import Events from "@/pages/events";
import Schedule from "@/pages/schedule";
import Gallery from "@/pages/gallery";
import Contact from "@/pages/contact";
import Register from "@/pages/register";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
