"use client";

import { useActionState } from "react";
import { submitComponentRequest, ComponentRequestState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cpu, ArrowDown, Package, Truck, CheckCircle2 } from "lucide-react";

const DEPARTMENTS = [
  "AI and DS",
  "Computer Engineering",
  "Information Technology",
  "Civil Engineering",
  "Mechanical Engineering",
  "Electronics and Telecommunication"
];

const initialState: ComponentRequestState = {
  message: "",
  error: "",
  success: false,
};

export default function ComponentRequestPage() {
  const [state, formAction, pending] = useActionState(submitComponentRequest, initialState);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-20 right-10 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600 mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Hardware & Resources
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Get the hardware you need <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">to build your prototype.</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Request microcontrollers, sensors, and mechanical components from any department in TCET. We handle the cross-departmental logistics.
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

      {/* Process Section */}
      <section className="py-24 bg-neutral-50/50 border-y border-neutral-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900">Procurement Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Submit Request", desc: "Select what you need and from which department.", icon: Package },
              { title: "Faculty Approval", desc: "Coordinators from both branches approve the request.", icon: CheckCircle2 },
              { title: "Collection", desc: "Pick up the components from the respective lab.", icon: Truck }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 mx-auto flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-500">{step.desc}</p>
                <div className="absolute -right-4 -bottom-4 text-[10rem] font-black text-neutral-50 opacity-50 z-0 select-none">
                  {i+1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl"
          >
            <Card className="w-full bg-white shadow-2xl shadow-red-900/5 border-neutral-100 rounded-[2.5rem] overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-red-500 to-orange-500"></div>
              <CardHeader className="pb-8 pt-10 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight text-neutral-900">Request Components</CardTitle>
                <CardDescription className="text-base text-neutral-500 mt-2">
                  Submit a request for hardware or software components. The request will be automatically routed to the respective EDIC faculty coordinators.
                </CardDescription>
              </CardHeader>
              <form action={formAction}>
                <CardContent className="space-y-6 px-10">
                  {state?.success && (
                    <div className="p-4 rounded-xl bg-green-50 text-green-700 border border-green-200 font-medium text-center">
                      {state.message}
                    </div>
                  )}
                  {state?.error && (
                    <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 font-medium text-center">
                      {state.error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="userEmail" className="text-neutral-700 font-medium">Your TCET Email</Label>
                    <Input 
                      id="userEmail" 
                      name="userEmail" 
                      type="email" 
                      placeholder="firstname.lastname@tcetmumbai.in" 
                      required 
                      className="rounded-xl border-neutral-200 bg-neutral-50 h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="requestingDept" className="text-neutral-700 font-medium">Your Department (Requesting From)</Label>
                      <Select name="requestingDept" required>
                        <SelectTrigger className="rounded-xl border-neutral-200 bg-neutral-50 h-12">
                          <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                          {DEPARTMENTS.map((dept) => (
                            <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fulfillingDept" className="text-neutral-700 font-medium">Target Department (Procuring From)</Label>
                      <Select name="fulfillingDept" required>
                        <SelectTrigger className="rounded-xl border-neutral-200 bg-neutral-50 h-12">
                          <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                          {DEPARTMENTS.map((dept) => (
                            <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="components" className="text-neutral-700 font-medium">Component Details</Label>
                    <Textarea 
                      id="components" 
                      name="components" 
                      placeholder="E.g., 10x Raspberry Pi 4 Model B, 5x Servo Motors..." 
                      className="rounded-xl border-neutral-200 bg-neutral-50 min-h-[120px] resize-none"
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-neutral-700 font-medium">Total Quantity</Label>
                    <Input 
                      id="quantity" 
                      name="quantity" 
                      type="number" 
                      min="1" 
                      placeholder="15" 
                      required 
                      className="rounded-xl border-neutral-200 bg-neutral-50 h-12"
                    />
                  </div>
                </CardContent>
                <CardFooter className="pt-6 pb-10 px-10">
                  <Button 
                    type="submit" 
                    disabled={pending} 
                    className="w-full h-14 text-lg rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow-md"
                  >
                    {pending ? "Submitting Request..." : "Submit Component Request"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
