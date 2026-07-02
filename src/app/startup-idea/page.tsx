"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, CheckCircle2, ArrowDown, Target } from "lucide-react";

export default function StartupIdeaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600 mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Incubation Portal
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Turn your idea into a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">funded venture.</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Submit your startup idea to the EDIC incubation board. Get validated, mentored, and funded to build the next big thing.
            </p>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center text-red-500"
            >
              <ArrowDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-neutral-50/50 border-y border-neutral-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900">How Incubation Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Submit", desc: "Pitch your idea through our secure portal below.", icon: Lightbulb },
              { step: "02", title: "Review", desc: "Our panel evaluates market fit and feasibility.", icon: Target },
              { step: "03", title: "Interview", desc: "Present your vision to the EDIC faculty board.", icon: CheckCircle2 },
              { step: "04", title: "Incubate", desc: "Get resources, mentors, and seed funding.", icon: Rocket }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="text-5xl font-black text-neutral-100 absolute -top-6 -left-4 -z-10">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-500">{item.desc}</p>
                {i !== 3 && <div className="hidden md:block absolute top-6 left-24 w-full h-[2px] bg-neutral-200" />}
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
            <div className="bg-white shadow-2xl shadow-red-900/5 border border-neutral-100 rounded-[2.5rem] overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-red-600 to-orange-500"></div>
              <div className="p-8 pb-4 text-center">
                <h2 className="text-2xl font-bold text-neutral-900">Idea Submission Form</h2>
                <p className="text-neutral-500 mt-2">All submissions are confidential and reviewed only by the EDIC board.</p>
              </div>
              <div className="w-full h-[800px] bg-neutral-50">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf38NNIcUXq_hrthchbnW8WQE9ySu6glFtSuDhJbGB8_6ED9w/viewform?embedded=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  title="Startup Idea Form"
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
