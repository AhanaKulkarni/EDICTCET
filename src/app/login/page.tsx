"use client";

import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck, LogIn, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");
    
    try {
      if (!auth) {
        setError("Firebase is not configured. Please add your Firebase API keys to your Environment Variables (.env.local) to enable Google Login.");
        setIsLoading(false);
        return;
      }

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Strict domain checking for @tcetmumbai.in
      if (!user.email?.endsWith("@tcetmumbai.in")) {
        // If they use a normal gmail, force sign out immediately
        await signOut(auth);
        setError("Access Denied. You must use an official @tcetmumbai.in student email address to login.");
        setIsLoading(false);
        return;
      }

      // Success
      router.push("/");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during authentication.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-neutral-200 shadow-xl shadow-orange-900/5 rounded-3xl overflow-hidden">
          <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
          <CardHeader className="text-center pt-8 pb-6">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange-100">
              <ShieldCheck className="w-8 h-8 text-orange-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-neutral-900">EDIC Portal Login</CardTitle>
            <CardDescription className="text-neutral-500 mt-2 text-base">
              Authentication restricted to TCET students and faculty only.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-10 space-y-6">
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700 text-sm font-medium">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <Button 
              onClick={handleGoogleLogin} 
              disabled={isLoading}
              className="w-full h-14 text-lg rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 font-semibold border border-neutral-200 shadow-sm transition-all flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Sign in with TCET Google
                </>
              )}
            </Button>
            
            <p className="text-xs text-center text-neutral-400">
              By logging in, you agree to the EDIC TCET Terms of Service and Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
