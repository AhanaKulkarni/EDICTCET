import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 overflow-hidden relative">
      {/* Decorative embellishments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
          <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2"></span>
          Empowering TCET Innovators
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
          Building the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Founders.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
          The central operating system for entrepreneurship at TCET. Launch your startup, find mentors, and secure funding all in one place.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-md">
            Explore Startups
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-neutral-200 hover:bg-neutral-50 group">
            <Link href="/component-request" className="flex items-center gap-2">
              Request Components
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Floating feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-24">
        {[
          {
            title: "Startup Incubation",
            description: "Turn your ideas into reality with our comprehensive incubation support.",
            icon: Rocket,
            color: "text-orange-600",
            bg: "bg-orange-100"
          },
          {
            title: "Expert Mentorship",
            description: "Connect with industry leaders and experienced alumni founders.",
            icon: Target,
            color: "text-red-600",
            bg: "bg-red-100"
          },
          {
            title: "Funding & Grants",
            description: "Access college grants, government funding, and private investors.",
            icon: Zap,
            color: "text-amber-600",
            bg: "bg-amber-100"
          }
        ].map((feature, i) => (
          <div key={i} className="p-6 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-left">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.bg}`}>
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
