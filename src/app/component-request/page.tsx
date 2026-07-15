"use client";

import { useActionState, useEffect, useState } from "react";
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
import { DEPARTMENT_COMPONENTS, DEPARTMENTS } from "@/lib/components-data";
import jsPDF from "jspdf";
import "jspdf-autotable";

const initialState: ComponentRequestState = {
  message: "",
  error: "",
  success: false,
};

export default function ComponentRequestPage() {
  const [state, formAction, pending] = useActionState(submitComponentRequest, initialState);
  const [selectedDept, setSelectedDept] = useState<string>("");

  useEffect(() => {
    if (state.success && state.data) {
      generatePDF(state.data);
    }
  }, [state]);

  const generatePDF = (data: any) => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("EDIC TCET", 105, 20, { align: "center" });
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Component Procurement Form", 105, 30, { align: "center" });
    
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
    
    // Application Details
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Project & Applicant Details", 20, 45);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Primary Applicant: ${data.studentName}`, 20, 55);
    doc.text(`Email: ${data.studentEmail}`, 20, 62);
    doc.text(`Team Members: ${data.teamMembers || "N/A"}`, 20, 69);
    doc.text(`Project Guide: ${data.projectGuide}`, 20, 76);
    doc.text(`Requesting Department: ${data.requestingDept}`, 20, 83);
    doc.text(`Date of Request: ${data.date}`, 20, 90);

    // Component Table
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Requested Components", 20, 105);
    
    // @ts-ignore
    doc.autoTable({
      startY: 110,
      head: [["Sr No.", "Component Name", "Procuring Department", "Quantity"]],
      body: [
        ["1", data.selectedComponent, data.fulfillingDept, data.quantity],
      ],
      theme: "grid",
      headStyles: { fillColor: [220, 38, 38] }
    });

    // Signatures
    // @ts-ignore
    const finalY = doc.lastAutoTable.finalY || 140;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    
    // Signature Bands
    doc.text("_________________________", 20, finalY + 40);
    doc.text("Project Incharge", 30, finalY + 46);
    doc.text(`(${data.projectGuide})`, 30, finalY + 51);

    doc.text("_________________________", 80, finalY + 40);
    doc.text("Dept Coordinator", 85, finalY + 46);
    doc.text(`(${data.fulfillingDept})`, 85, finalY + 51);

    doc.text("_________________________", 145, finalY + 40);
    doc.text("Dean R&D, TCET", 150, finalY + 46);

    doc.save(`Component_Request_${data.studentName.replace(/\s+/g, '_')}.pdf`);
  };

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
              Request high-end R&D equipment from any department in TCET. A PDF quotation will be generated instantly for faculty signatures.
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

      {/* Form Section */}
      <section className="py-24 relative bg-neutral-50/50">
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl"
          >
            <Card className="w-full bg-white shadow-2xl shadow-red-900/5 border-neutral-100 rounded-[2.5rem] overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-red-500 to-orange-500"></div>
              <CardHeader className="pb-8 pt-10 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight text-neutral-900">Request Form</CardTitle>
                <CardDescription className="text-base text-neutral-500 mt-2">
                  Fill out your project details. You will receive a generated PDF quotation upon submission.
                </CardDescription>
              </CardHeader>
              <form action={formAction}>
                <CardContent className="space-y-8 px-10">
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

                  {/* Applicant Details Section */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-neutral-900 border-b pb-2">1. Applicant Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="studentName" className="text-neutral-700 font-medium">Full Name</Label>
                        <Input id="studentName" name="studentName" required className="rounded-xl border-neutral-200 bg-neutral-50 h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentEmail" className="text-neutral-700 font-medium">TCET Email</Label>
                        <Input id="studentEmail" name="studentEmail" type="email" placeholder="@tcetmumbai.in" required className="rounded-xl border-neutral-200 bg-neutral-50 h-12" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="teamMembers" className="text-neutral-700 font-medium">Other Team Members (Optional)</Label>
                      <Input id="teamMembers" name="teamMembers" placeholder="John Doe, Jane Smith" className="rounded-xl border-neutral-200 bg-neutral-50 h-12" />
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-neutral-900 border-b pb-2">2. Project Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectGuide" className="text-neutral-700 font-medium">Project Incharge / Guide</Label>
                        <Input id="projectGuide" name="projectGuide" required className="rounded-xl border-neutral-200 bg-neutral-50 h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="requestingDept" className="text-neutral-700 font-medium">Your Department</Label>
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
                    </div>
                  </div>

                  {/* Component Details Section */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-neutral-900 border-b pb-2">3. Component Selection</h3>
                    <div className="space-y-2">
                      <Label htmlFor="fulfillingDept" className="text-neutral-700 font-medium">Procuring From (Department)</Label>
                      <Select name="fulfillingDept" onValueChange={(val: string | null) => setSelectedDept(val || "")} required>
                        <SelectTrigger className="rounded-xl border-neutral-200 bg-neutral-50 h-12">
                          <SelectValue placeholder="Select branch to view components" />
                        </SelectTrigger>
                        <SelectContent>
                          {DEPARTMENTS.map((dept) => (
                            <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="selectedComponent" className="text-neutral-700 font-medium">Component List</Label>
                        <Select name="selectedComponent" disabled={!selectedDept} required>
                          <SelectTrigger className="rounded-xl border-neutral-200 bg-neutral-50 h-12">
                            <SelectValue placeholder={selectedDept ? "Select a component" : "Select a department first"} />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedDept && DEPARTMENT_COMPONENTS[selectedDept]?.map((comp) => (
                              <SelectItem key={comp} value={comp}>{comp}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="quantity" className="text-neutral-700 font-medium">Quantity</Label>
                        <Input 
                          id="quantity" 
                          name="quantity" 
                          type="number" 
                          min="1" 
                          placeholder="1" 
                          required 
                          className="rounded-xl border-neutral-200 bg-neutral-50 h-12"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-6 pb-10 px-10">
                  <Button 
                    type="submit" 
                    disabled={pending} 
                    className="w-full h-14 text-lg rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow-md"
                  >
                    {pending ? "Generating Quotation..." : "Submit & Generate PDF"}
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
