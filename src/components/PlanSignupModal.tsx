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
  const [course, setCourse] = useState<string>("Voice & Expression");
  const [planOption, setPlanOption] = useState<string>(selectedPlan ?? "Demo Class");
  const [pack, setPack] = useState<string>(pace ?? "Regular");

  useEffect(() => {
    if (selectedPlan) setPlanOption(selectedPlan);
    if (pace) setPack(pace);
  }, [selectedPlan, pace]);

  // Reset form when the modal closes (or when selected defaults change)
  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setMobile("");
      setEmailError("");
      setCourse("Voice & Expression");
      setPlanOption(selectedPlan ?? "Demo Class");
      setPack(pace ?? "Regular");
      setSent(false);
    }
  }, [open, selectedPlan, pace]);

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
    // show thank-you immediately for better UX
    setSent(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_USER;

    const message = `Course: ${course || ''}\nPlan: ${planOption || ''}\nPack: ${pack || ''}\nMobile: ${mobile || ''}`;

    const templateParams = {
      from_name: name || "Website Visitor",
      from_email: email,
      message: message,
      message_html: message,
      notes: message,
      course: course || "",
      plan_option: planOption || "",
      pack: pack || "",
      mobile: mobile || "",
      plan: planOption || "",
    } as Record<string, string>;

    console.log('PlanSignup EmailJS params', { serviceId, templateId, publicKey, templateParams });

    if (serviceId && templateId && publicKey) {
      try {
        await send(serviceId, templateId, templateParams, publicKey);
        // close shortly after showing thank-you
        setTimeout(() => {
          setSent(false);
          onOpenChange(false);
        }, 700);
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
    bodyLines.push(`Course: ${templateParams.course || ''}`);
    bodyLines.push(`Plan: ${templateParams.plan_option || templateParams.plan || ''}`);
    bodyLines.push(`Pack: ${templateParams.pack || ''}`);
    bodyLines.push(`Mobile: ${templateParams.mobile}`);
    bodyLines.push('');
    bodyLines.push('— Sent from Kalashiksha website');

    const bodyText = bodyLines.join('\n');
    const body = encodeURIComponent(bodyText);
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    // open mail client quickly after showing thank-you
    setTimeout(() => {
      window.location.href = mailto;
      setSent(false);
      onOpenChange(false);
    }, 300);
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
              <p style={{ color: "#4b5563", marginBottom: 16 }}>{planOption} — {pack}</p>
              <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Course</label>
                  <select value={course} onChange={(e) => setCourse(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white">
                    <option>Voice & Expression</option>
                    <option>Story-Singing</option>
                    <option>Writing Through Music</option>
                    <option>Kalashiksha Kids</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Plan</label>
                  <select value={planOption} onChange={(e) => setPlanOption(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white">
                    <option>Demo Class</option>
                    <option>4-Class Pack</option>
                    <option>10-Class Pack</option>
                    <option>20-Class Pack</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Pack</label>
                  <div className="mt-2 flex items-center gap-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="pack" value="Regular" checked={pack === 'Regular'} onChange={() => setPack('Regular')} className="form-radio h-4 w-4 text-pink-600 border-gray-300" />
                      <span className="ml-2">Regular</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="pack" value="Accelerated" checked={pack === 'Accelerated'} onChange={() => setPack('Accelerated')} className="form-radio h-4 w-4 text-pink-600 border-gray-300" />
                      <span className="ml-2">Accelerated</span>
                    </label>
                  </div>
                </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="ps-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white"
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
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white"
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
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white"
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
