"use client";

import { motion } from "framer-motion";
import { Users, Zap, Briefcase, GraduationCap, ArrowDown } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-600 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2 animate-pulse"></span>
              Join the Ecosystem
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Become a part of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">TCET's Innovation Hub</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Unlock exclusive access to funding, industry mentors, state-of-the-art components, and a community of ambitious founders.
            </p>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center text-orange-500"
            >
              <ArrowDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Zap, title: "Funding Access", desc: "Direct access to college and government startup grants." },
              { icon: Briefcase, title: "Workspace", desc: "Dedicated incubation space to work on your startup." },
              { icon: Users, title: "Mentorship", desc: "1-on-1 sessions with industry leaders and alumni." },
              { icon: GraduationCap, title: "Skill Building", desc: "Exclusive workshops on product, tech, and business." }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">Official Registration</h2>
              <p className="text-neutral-600">Fill out the form below to initiate your membership process.</p>
            </div>
            
            <div className="bg-white shadow-2xl shadow-orange-900/5 border border-neutral-100 rounded-[2.5rem] overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="w-full h-[800px] bg-neutral-50">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeTeZFplD_KtDrk2s3rNhsJzUYWBve70vP1O0LAsl-BynFGWw/viewform?embedded=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  title="EDIC Membership Form"
                  className="w-full h-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
