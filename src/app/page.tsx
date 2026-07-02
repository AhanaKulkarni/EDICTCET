"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap, Target, Rocket, ChevronRight, Users, GraduationCap, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50/50 backdrop-blur-md px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-orange-600 mr-2 animate-pulse"></span>
              EDIC TCET Incubation Portal
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[1.05]">
              Building the Next <br />
              Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Founders.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-neutral-500 max-w-3xl mx-auto font-light leading-snug tracking-tight">
              The central operating system for entrepreneurship at TCET. Launch your startup, find mentors, and secure funding all in one place.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link href="/startup-idea" className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-600/20 transition-all hover:-translate-y-1")}>
                Start Building Now
              </Link>
              <Link href="/component-request" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 px-8 text-lg rounded-full border-neutral-200 hover:bg-neutral-50 group hover:-translate-y-1 transition-all shadow-sm flex items-center gap-2 text-neutral-700")}>
                Request Components
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics / Social Proof Section */}
      <section className="py-20 border-y border-neutral-100 bg-neutral-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
          >
            {[
              { label: "Startups Incubated", value: "24+" },
              { label: "Active Mentors", value: "40+" },
              { label: "Funding Raised", value: "₹50L+" },
              { label: "Student Members", value: "500+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 to-neutral-500">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base font-medium text-neutral-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Features */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6">
              Everything you need to <br/>scale your idea.
            </h2>
            <p className="text-xl text-neutral-500">A complete ecosystem designed to take you from a whiteboard sketch to a fully funded venture.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Incubation",
                description: "Turn your ideas into reality with our comprehensive incubation support. Workspace, servers, and legal help included.",
                icon: Rocket,
                link: "/startup-idea",
                bg: "bg-orange-50",
                color: "text-orange-600"
              },
              {
                title: "Expert Mentorship",
                description: "Connect with industry leaders, investors, and experienced alumni founders for one-on-one guidance.",
                icon: Target,
                link: "/mentorship",
                bg: "bg-red-50",
                color: "text-red-600"
              },
              {
                title: "Component Access",
                description: "Need hardware to build a prototype? Request components from any department and we'll handle the logistics.",
                icon: Zap,
                link: "/component-request",
                bg: "bg-amber-50",
                color: "text-amber-600"
              },
              {
                title: "Funding & Grants",
                description: "Access college grants, government funding (MSME, Startup India), and private seed investors.",
                icon: Building2,
                link: "#",
                bg: "bg-emerald-50",
                color: "text-emerald-600"
              },
              {
                title: "Community",
                description: "Join a network of ambitious builders. Share updates, find co-founders, and collaborate on projects.",
                icon: Users,
                link: "/join",
                bg: "bg-blue-50",
                color: "text-blue-600"
              },
              {
                title: "Events & Hackathons",
                description: "Participate in regular workshops, pitch days, and flagship hackathons to build your skills and win prizes.",
                icon: GraduationCap,
                link: "#",
                bg: "bg-purple-50",
                color: "text-purple-600"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 bg-white border border-neutral-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${feature.bg}`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-500 leading-relaxed flex-1 mb-8">{feature.description}</p>
                <Link href={feature.link} className="inline-flex items-center text-sm font-bold text-neutral-900 group-hover:text-orange-600 transition-colors mt-auto">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Typography Mission Section */}
      <section className="py-40 bg-neutral-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-black tracking-tighter leading-tight"
          >
            TCET's innovation ecosystem isn't just a place. <br/>
            <span className="text-neutral-500">It's a launchpad for those crazy enough to think they can change the world.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-16 flex flex-col md:flex-row gap-6 items-start md:items-center"
          >
            <Link href="/join" className={cn(buttonVariants({ size: "lg" }), "h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-neutral-200 transition-colors")}>
              Become a Member
            </Link>
            <p className="text-neutral-400 font-medium">Join 500+ student innovators.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
