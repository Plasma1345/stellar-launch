import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Lightbulb, Zap, Rocket, Gem, DollarSign, Calendar, Check } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { StellarLogo } from '@/components/StellarLogo';
import { cn } from '@/lib/utils'; // Make sure cn utility is imported
// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
// Reusable Feature Card Component
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className }) => {
  return (
    <Card className={cn("flex flex-col items-center text-center p-6 bg-card hover:shadow-lg transition-shadow duration-300", className)}>
      <div className="mb-4 text-stellar-indigo">
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <CardTitle className="mb-2 text-xl font-semibold text-foreground">{title}</CardTitle>
      <CardDescription className="text-muted-foreground">{description}</CardDescription>
    </Card>
  );
};
// Reusable Pricing Card Component
interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}
const PricingCard: React.FC<PricingCardProps> = ({ plan, price, description, features, isPopular }) => {
  return (
    <Card className={cn(
      "flex flex-col p-8 bg-card shadow-lg",
      isPopular && "border-2 border-stellar-indigo shadow-primary"
    )}>
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-2xl font-bold text-foreground">{plan}</CardTitle>
        <CardDescription className="mt-2 text-muted-foreground">{description}</CardDescription>
        <div className="mt-4 text-5xl font-extrabold text-foreground">
          {price}
          <span className="text-xl font-medium text-muted-foreground">/month</span>
        </div>
      </CardHeader>
      <Separator className="my-6 bg-border" />
      <CardContent className="p-0 flex-grow">
        <ul className="space-y-3 text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-stellar-cyan" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={cn(
            "mt-8 w-full text-lg font-semibold",
            isPopular ? "bg-stellar-indigo hover:bg-stellar-indigo/90 text-white" : "btn-gradient"
          )}
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  );
};
export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      <ThemeToggle className="fixed top-6 right-6 z-50" />
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-foreground">
            <StellarLogo className="h-8 w-8 text-stellar-indigo" />
            <span>Stellar Launch</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <Button asChild variant="ghost" className="text-sm font-medium text-stellar-indigo hover:bg-stellar-indigo/10">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="btn-gradient">
              <Link to="/signup">Get Started</Link>
            </Button>
          </nav>
          {/* Mobile navigation (e.g., Sheet or DropdownMenu can be added here) */}
          <Button className="md:hidden" variant="ghost" size="icon" aria-label="Toggle navigation">
            <MenuIcon className="h-6 w-6" /> {/* Placeholder icon */}
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] overflow-hidden text-center py-20 bg-background"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-gradient-animated-mesh opacity-50 dark:opacity-30 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-stellar-indigo/10 px-4 py-1 text-sm font-medium text-stellar-indigo backdrop-blur-sm"
          >
            <Zap className="h-4 w-4 mr-2" />
            Blazing Fast. Beautifully Simple.
            <ChevronRight className="ml-1 h-4 w-4" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight"
          >
            Launch Your Ideas to the <span className="text-stellar-indigo">Next Orbit</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Stellar Launch provides everything you need to build, deploy, and scale your applications with unparalleled ease and performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <Button asChild size="lg" className="btn-gradient px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-primary-lg transition-all duration-300">
              <Link to="/signup">Start Your Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold border-2 border-input hover:bg-accent hover:text-accent-foreground transition-colors">
              <Link to="#features">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
      {/* Features Section */}
      <section id="features" className="py-20 sm:py-24 md:py-28 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Unlock Your Potential with <span className="text-stellar-indigo">Powerful Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From seamless deployment to intelligent scaling, Stellar Launch is engineered to elevate your development workflow and user experience.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={sectionVariants}>
              <FeatureCard
                icon={Rocket}
                title="Rapid Deployment"
                description="Deploy your applications in seconds with our optimized infrastructure and continuous integration."
              />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <FeatureCard
                icon={Zap}
                title="Intelligent Scaling"
                description="Automatically scale your resources up or down based on demand, ensuring optimal performance."
              />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <FeatureCard
                icon={Gem}
                title="Global CDN"
                description="Deliver content at lightning speed with our integrated global Content Delivery Network."
              />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <FeatureCard
                icon={Lightbulb}
                title="Advanced Analytics"
                description="Gain deep insights into your application's performance and user behavior with detailed metrics."
              />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <FeatureCard
                icon={Calendar}
                title="Scheduled Tasks"
                description="Automate repetitive tasks and workflows with our flexible scheduling engine."
              />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <FeatureCard
                icon={DollarSign}
                title="Cost Optimization"
                description="Minimize expenses with efficient resource management and transparent pricing."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-24 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Simple, Transparent <span className="text-stellar-indigo">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, no surprises, just powerful features designed for growth.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={sectionVariants}>
              <PricingCard
                plan="Starter"
                price="$0"
                description="Perfect for individuals and small projects."
                features={[
                  "10 GB Storage",
                  "50 GB Bandwidth",
                  "Basic Analytics",
                  "Community Support",
                ]}
              />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <PricingCard
                plan="Pro"
                price="$29"
                description="Everything you need for growing businesses."
                features={[
                  "100 GB Storage",
                  "500 GB Bandwidth",
                  "Advanced Analytics",
                  "Priority Support",
                  "Custom Domains",
                ]}
                isPopular
              />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <PricingCard
                plan="Enterprise"
                price="Custom"
                description="Tailored solutions for large-scale operations."
                features={[
                  "Unlimited Storage",
                  "Unlimited Bandwidth",
                  "Dedicated Infrastructure",
                  "24/7 Premium Support",
                  "SLA Guarantee",
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-stellar-darkSlate text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
              <StellarLogo className="h-8 w-8 text-stellar-cyan" />
              <span>Stellar Launch</span>
            </Link>
            <p className="text-muted-foreground">Launch your ideas beyond the stars.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stellar-cyan">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stellar-cyan">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/docs" className="text-muted-foreground hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stellar-cyan">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="mt-8 mb-6 bg-gray-700 max-w-7xl mx-auto" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Stellar Launch. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
// Placeholder for MenuIcon, replace with actual lucide-react icon if needed for mobile nav
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);