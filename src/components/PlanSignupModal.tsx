"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: string;
  pace?: string;
};

export default function PlanSignupModal({ open, onOpenChange, selectedPlan, pace }: Props) {
  if (typeof document === "undefined") return null;

  React.useEffect(() => {
    console.log("PlanSignupModal render. open=", open, "selectedPlan=", selectedPlan, "pace=", pace);
  }, [open, selectedPlan, pace]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");

  return createPortal(
    open ? (
      <div id="plan-signup-overlay" style={{ position: "fixed", inset: 0, zIndex: 2147483647, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)" }}>
        <div id="plan-signup-box" style={{ background: "white", borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.2)", maxWidth: 640, width: "100%", padding: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Plan Signup</h2>
          <p style={{ color: "#4b5563", marginBottom: 16 }}>{selectedPlan ?? pace ?? ""}</p>
          <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="ps-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="ps-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                id="ps-mobile"
                name="mobile"
                type="tel"
                inputMode="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button type="button" onClick={() => onOpenChange(false)} style={{ padding: '8px 14px', background: '#e5e7eb', borderRadius: 6 }}>Cancel</button>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const payload = { name, email, mobile, plan: selectedPlan ?? pace ?? "" };
                  console.log("PlanSignup submit", payload);
                  onOpenChange(false);
                }}
                style={{ padding: '8px 14px', background: '#2563eb', color: 'white', borderRadius: 6 }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : null,
    document.body
  );
}
