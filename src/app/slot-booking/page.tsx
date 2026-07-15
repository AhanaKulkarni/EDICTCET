"use client";

import { useActionState, useState } from "react";
import { bookMentorshipSlot } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

const MENTORS = [
  {
    name: "Dr. Sukruti Kaulgud",
    role: "Dean R&D, TCET",
    email: "tcetedic@tcetmumbai.in",
    expertise: "Strategic Guidance & Incubation",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Mr. Ayush Pardeshi",
    role: "CEO, EDIC",
    email: "ayushp3008@gmail.com",
    expertise: "Startup Strategy & Execution",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Ms. Ahana Kulkarni",
    role: "CTO, EDIC",
    email: "ahanak@aetheronai.in",
    expertise: "Product Development & Tech Architecture",
    color: "from-purple-500 to-pink-500"
  }
];

const TIME_SLOTS = [
  "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
  "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
  "2:00 PM", "2:15 PM", "2:30 PM", "2:45 PM"
];

export default function SlotBookingPage() {
  const [selectedMentor, setSelectedMentor] = useState(MENTORS[0]);
  const [selectedTime, setSelectedTime] = useState("");
  
  const [state, formAction, pending] = useActionState(bookMentorshipSlot, {
    message: "",
    error: "",
    success: false,
  });

  return (
    <div className="min-h-screen bg-neutral-50 pb-32">
      <div className="bg-white border-b border-neutral-200 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">Book a 15-Min Strategy Slot</h1>
          <p className="text-xl text-neutral-500">Fast, highly-focused consultation sessions with EDIC leadership. Please come prepared with specific questions.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Mentor Selection */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">Select a Consultant</h2>
          {MENTORS.map((mentor) => (
            <div 
              key={mentor.email}
              onClick={() => setSelectedMentor(mentor)}
              className={`p-6 rounded-2xl cursor-pointer transition-all border-2 ${selectedMentor.email === mentor.email ? 'border-neutral-900 bg-white shadow-xl' : 'border-transparent bg-neutral-100 hover:bg-neutral-200'}`}
            >
              <h3 className="text-xl font-bold text-neutral-900">{mentor.name}</h3>
              <p className="text-sm font-medium text-neutral-500 mb-2">{mentor.role}</p>
              <div className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-xs font-semibold text-neutral-700">
                {mentor.expertise}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-8">
          <Card className="rounded-3xl border-0 shadow-2xl shadow-neutral-200/50 overflow-hidden bg-white">
            <div className={`h-3 w-full bg-gradient-to-r ${selectedMentor.color}`}></div>
            <CardContent className="p-8 md:p-12">
              
              <AnimatePresence mode="wait">
                {state.success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">Slot Confirmed!</h2>
                    <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">{state.message}</p>
                    <Button onClick={() => window.location.reload()} variant="outline" className="rounded-full">Book Another Slot</Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    action={formAction}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-4 mb-8 pb-8 border-b border-neutral-100">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${selectedMentor.color} flex items-center justify-center text-white font-bold text-2xl`}>
                        {selectedMentor.name.charAt(0)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-neutral-900">Booking with {selectedMentor.name}</h2>
                        <p className="text-neutral-500">15-minute consultation via Google Meet or in-person.</p>
                      </div>
                    </div>

                    {state.error && (
                      <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 font-medium">
                        {state.error}
                      </div>
                    )}

                    <input type="hidden" name="mentorEmail" value={selectedMentor.email} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label className="text-neutral-700 font-medium">Full Name</Label>
                        <Input name="studentName" required className="rounded-xl border-neutral-200 bg-neutral-50 h-12" />
                      </div>
                      <div className="space-y-3">
                        <Label className="text-neutral-700 font-medium">TCET Email</Label>
                        <Input name="studentEmail" type="email" placeholder="@tcetmumbai.in" required className="rounded-xl border-neutral-200 bg-neutral-50 h-12" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-neutral-700 font-medium">What is the specific topic/goal of this meeting?</Label>
                      <Textarea name="topic" required placeholder="E.g., Feedback on my pitch deck, technical architecture review..." className="rounded-xl border-neutral-200 bg-neutral-50 resize-none h-24" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2 text-neutral-700 font-medium"><Calendar className="w-4 h-4" /> Select Date</Label>
                        <Input name="date" type="date" required className="rounded-xl border-neutral-200 bg-neutral-50 h-12" />
                      </div>
                      
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2 text-neutral-700 font-medium"><Clock className="w-4 h-4" /> Select 15-Min Slot</Label>
                        <input type="hidden" name="time" value={selectedTime} required />
                        <div className="grid grid-cols-3 gap-2">
                          {TIME_SLOTS.map((time) => (
                            <div 
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`py-2 px-3 text-center text-sm font-medium rounded-lg cursor-pointer transition-colors ${selectedTime === time ? 'bg-neutral-900 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'}`}
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-8">
                      <Button 
                        type="submit" 
                        disabled={pending || !selectedTime} 
                        className="w-full h-14 text-lg rounded-xl bg-neutral-900 hover:bg-black text-white font-semibold transition-all shadow-xl shadow-neutral-900/10"
                      >
                        {pending ? "Confirming Slot..." : "Confirm Booking"}
                      </Button>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
