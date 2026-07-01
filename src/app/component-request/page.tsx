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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-neutral-50/50">
      <Card className="w-full max-w-2xl bg-white shadow-xl border-neutral-100 rounded-3xl overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
        <CardHeader className="pb-8 pt-8">
          <CardTitle className="text-3xl font-bold tracking-tight text-neutral-900">Request Components</CardTitle>
          <CardDescription className="text-base text-neutral-500">
            Submit a request for hardware or software components. The request will be automatically routed to the respective EDIC faculty coordinators.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-6">
            {state?.success && (
              <div className="p-4 rounded-xl bg-green-50 text-green-700 border border-green-200 font-medium">
                {state.message}
              </div>
            )}
            {state?.error && (
              <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 font-medium">
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
          <CardFooter className="pt-4 pb-8">
            <Button 
              type="submit" 
              disabled={pending} 
              className="w-full h-14 text-lg rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all shadow-md"
            >
              {pending ? "Submitting Request..." : "Submit Component Request"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
