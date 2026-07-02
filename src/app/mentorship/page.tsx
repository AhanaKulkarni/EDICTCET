"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, Star, ArrowDown } from "lucide-react";

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-20 left-10 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-600 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Expert Guidance
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Learn from those <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">who have built it.</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book one-on-one sessions with our distinguished EDIC leaders, faculty domain experts, and alumni founders to get actionable advice.
            </p>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center text-amber-500"
            >
              <ArrowDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Experts */}
      <section className="py-24 bg-neutral-50/50 border-y border-neutral-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900">Featured Mentors</h2>
            <p className="text-neutral-500 mt-2">Available for booking this month.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sukriti Kalgud", role: "EDIC Faculty Head", expertise: "Research & Development" },
              { name: "Ayush Pardeshi", role: "CEO, EDIC TCET", expertise: "Startup Strategy & Scaling" },
              { name: "Ahana Kulkarni", role: "CTO, EDIC TCET", expertise: "Product & Technology" }
            ].map((mentor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm text-center"
              >
                <div className="w-24 h-24 rounded-full bg-amber-100 mx-auto mb-4 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-600">{mentor.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{mentor.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{mentor.role}</p>
                <div className="inline-block bg-neutral-100 text-neutral-600 text-xs px-3 py-1 rounded-full">
                  {mentor.expertise}
                </div>
              </motion.div>
            ))}
          </div>
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
            <div className="bg-white shadow-2xl shadow-amber-900/5 border border-neutral-100 rounded-[2.5rem] overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-orange-500 to-amber-500"></div>
              <div className="p-8 pb-4 text-center flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6 text-amber-500" />
                <h2 className="text-2xl font-bold text-neutral-900">Book a Mentorship Session</h2>
              </div>
              <div className="w-full h-[800px] bg-neutral-50">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfJRiJEAQO5zzEKTOCju4nz1V8_ZvFZNju79eM3Ybps1ngnqQ/viewform?embedded=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  title="Mentorship Request Form"
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
