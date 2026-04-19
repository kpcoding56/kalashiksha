"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { send, init } from "@emailjs/browser";

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
  const [emailError, setEmailError] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_USER;
    if (publicKey) init(publicKey);
  }, []);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleRegister = async () => {
    setEmailError("");
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_USER;

    const message = `Mobile: ${mobile || ''}\nPlan: ${selectedPlan ?? pace ?? ''}`;

    const templateParams = {
      from_name: name || "Website Visitor",
      from_email: email,
      message: message,
      mobile: mobile || "",
      plan: selectedPlan ?? pace ?? "",
    } as Record<string, string>;

    console.log('PlanSignup EmailJS params', { serviceId, templateId, publicKey, templateParams });

    if (serviceId && templateId && publicKey) {
      try {
        await send(serviceId, templateId, templateParams, publicKey);
        setSent(true);
        // keep modal open briefly to show thank you, then close
        setTimeout(() => {
          setSent(false);
          onOpenChange(false);
        }, 1800);
        return;
      } catch (err) {
        console.error('EmailJS send error', err);
        setEmailError('Failed to send. Falling back to email client.');
      }
    }

    // mailto fallback
    const to = 'kalaashiksha@gmail.com';
    const subject = `Plan signup: ${templateParams.plan}`;
    const bodyLines: string[] = [];
    bodyLines.push(`Name: ${templateParams.from_name}`);
    bodyLines.push(`Email: ${templateParams.from_email}`);
    bodyLines.push(`Mobile: ${templateParams.mobile}`);
    bodyLines.push('');
    bodyLines.push(`Plan: ${templateParams.plan}`);
    bodyLines.push('');
    bodyLines.push('— Sent from Kalashiksha website');

    const bodyText = bodyLines.join('\n');
    const body = encodeURIComponent(bodyText);
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    // show thank-you briefly then open mail client
    setSent(true);
    setTimeout(() => {
      window.location.href = mailto;
      setSent(false);
      onOpenChange(false);
    }, 600);
  };

  return createPortal(
    open ? (
      <div id="plan-signup-overlay" style={{ position: "fixed", inset: 0, zIndex: 2147483647, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)" }}>
        <div id="plan-signup-box" style={{ background: "white", borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.2)", maxWidth: 640, width: "100%", padding: 24 }}>
          {sent ? (
            <div className="text-center py-8">
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Thank you!</h3>
              <p style={{ color: '#4b5563' }}>We received your registration — we'll be in touch soon.</p>
            </div>
          ) : (
            <>
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
                  handleRegister();
                }}
                style={{ padding: '8px 14px', background: '#2563eb', color: 'white', borderRadius: 6 }}
              >
                Register
              </button>
            </div>
          </form>
            </>
          )}
        </div>
      </div>
    ) : null,
    document.body
  );
}
