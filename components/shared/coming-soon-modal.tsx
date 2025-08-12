"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ComingSoonModalProps {
  feature: string;
  description?: string;
  showNotify?: boolean;
  trigger: React.ReactNode;
}

export function ComingSoonModal({
  feature,
  description,
  showNotify = true,
  trigger
}: ComingSoonModalProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your notification system
    console.log(`Notify about ${feature}: ${email}`);
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </div>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </DialogTitle>
          <div className="flex justify-center my-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full" />
              </div>
            </div>
          </div>
          <DialogDescription className="text-center text-lg font-medium pt-2">
            {feature}
          </DialogDescription>
        </DialogHeader>
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500 mb-6">
            {description || `We're working hard to bring you ${feature}. Stay tuned for updates!`}
          </p>
          
          {showNotify && !submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Get notified when this feature launches</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" variant="gold" className="w-full">
                Notify Me
              </Button>
            </form>
          ) : showNotify && submitted ? (
            <div className="bg-green-50 text-green-700 p-3 rounded-md border border-green-200">
              Thanks! We'll notify you when this feature is available.
            </div>
          ) : null}
          
          <Button 
            variant="ghost" 
            onClick={() => setOpen(false)}
            className="mt-4"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
