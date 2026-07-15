"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Download, Lightbulb, PenTool, Rocket, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import jsPDF from "jspdf";
import "jspdf-autotable";

const generateBMC = () => {
  const doc = new jsPDF("landscape");
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("Business Model Canvas (BMC)", 148.5, 20, { align: "center" });
  
  doc.setFontSize(10);
  doc.text("Project Name: ____________________", 20, 30);
  doc.text("Date: ______________", 200, 30);

  // @ts-ignore
  doc.autoTable({
    startY: 40,
    head: [["Key Partners", "Key Activities", "Value Propositions", "Customer Relationships", "Customer Segments"]],
    body: [
      ["\n\n\n\n\n\n\n\n", "\n\n\n\n\n\n\n\n", "\n\n\n\n\n\n\n\n", "\n\n\n\n\n\n\n\n", "\n\n\n\n\n\n\n\n"],
      ["Key Resources", "", "", "Channels", ""]
    ],
    theme: "grid",
    styles: { minCellHeight: 40, halign: "center", valign: "top" },
    headStyles: { fillColor: [59, 130, 246] } // Blue
  });

  // @ts-ignore
  doc.autoTable({
    // @ts-ignore
    startY: doc.lastAutoTable.finalY,
    head: [["Cost Structure", "Revenue Streams"]],
    body: [["\n\n\n\n\n", "\n\n\n\n\n"]],
    theme: "grid",
    styles: { minCellHeight: 40, halign: "center", valign: "top" },
    headStyles: { fillColor: [59, 130, 246] }
  });

  doc.save("EDIC_Business_Model_Canvas.pdf");
};

const generateFMC = () => {
  const doc = new jsPDF("landscape");
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("Financial Model Canvas (FMC)", 148.5, 20, { align: "center" });
  
  doc.setFontSize(10);
  doc.text("Project Name: ____________________", 20, 30);
  doc.text("Date: ______________", 200, 30);

  // @ts-ignore
  doc.autoTable({
    startY: 40,
    head: [["Revenue Streams", "Pricing Strategy", "COGS (Cost of Goods Sold)", "Operating Expenses (OpEx)"]],
    body: [
      ["\n\n\n\n\n\n\n\n", "\n\n\n\n\n\n\n\n", "\n\n\n\n\n\n\n\n", "\n\n\n\n\n\n\n\n"]
    ],
    theme: "grid",
    styles: { minCellHeight: 50, halign: "center", valign: "top" },
    headStyles: { fillColor: [16, 185, 129] } // Green
  });

  // @ts-ignore
  doc.autoTable({
    // @ts-ignore
    startY: doc.lastAutoTable.finalY,
    head: [["Capital Expenditure (CapEx)", "Break-Even Analysis", "Funding Required"]],
    body: [["\n\n\n\n\n", "\n\n\n\n\n", "\n\n\n\n\n"]],
    theme: "grid",
    styles: { minCellHeight: 40, halign: "center", valign: "top" },
    headStyles: { fillColor: [16, 185, 129] }
  });

  doc.save("EDIC_Financial_Model_Canvas.pdf");
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white pb-32">
      <div className="bg-neutral-950 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black mb-6">Founder's Toolkit</h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Everything you need to conceptualize, plan, and execute your startup idea. Download official EDIC canvases and read our execution guides.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* BMC Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-xl shadow-neutral-900/5 flex flex-col h-full"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Layers className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Business Model Canvas</h2>
            <p className="text-neutral-500 mb-8 flex-1">
              The standard 9-block framework to outline your value proposition, customers, and finances. Required for all EDIC pitch decks.
            </p>
            <Button onClick={generateBMC} className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl gap-2">
              <Download className="w-4 h-4" /> Download PDF Canvas
            </Button>
          </motion.div>

          {/* FMC Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-xl shadow-neutral-900/5 flex flex-col h-full"
          >
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Financial Model Canvas</h2>
            <p className="text-neutral-500 mb-8 flex-1">
              Map out your CapEx, OpEx, unit economics, and break-even point. Essential for securing seed funding and MSME grants.
            </p>
            <Button onClick={generateFMC} className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl gap-2">
              <Download className="w-4 h-4" /> Download PDF Canvas
            </Button>
          </motion.div>

        </div>

        {/* Guides Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Playbooks & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {[
              { title: "Ideation & Validation", desc: "How to find problems worth solving and validate them without writing code.", icon: Lightbulb, color: "text-amber-500", bg: "bg-amber-50" },
              { title: "Prototyping (MVP)", desc: "Building your Minimum Viable Product. Hardware vs Software strategies.", icon: PenTool, color: "text-purple-500", bg: "bg-purple-50" },
              { title: "Execution & Scaling", desc: "Go-to-market strategies, acquiring your first 100 users, and scaling up.", icon: Rocket, color: "text-orange-500", bg: "bg-orange-50" },
            ].map((guide, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${guide.bg}`}>
                  <guide.icon className={`w-6 h-6 ${guide.color}`} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{guide.title}</h3>
                <p className="text-sm text-neutral-500 mb-6">{guide.desc}</p>
                <div className="flex items-center text-sm font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                  <BookOpen className="w-4 h-4 mr-2" /> Read Guide
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
