"use client";
import { useState } from "react";
import { sendEmail } from "@/app/actions";

export default function ContactSection() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);
    const [isPending, setIsPending] = useState(false);
    const maxChars = 300;

    async function handleSubmit(formData: FormData) {
        setIsPending(true);
        setStatus(null);
        
        const result = await sendEmail(formData);
        
        if (result.success) {
            setStatus({ success: true });
            setMessage("");
            const form = document.querySelector('form') as HTMLFormElement;
            if (form) form.reset();

            // Clear success message after 10 seconds
            setTimeout(() => {
                setStatus(null);
            }, 10000);
        } else {
            setStatus({ error: result.error || "Something went wrong." });
        }
        
        setIsPending(false);
    }

    return (
        <div className="text-white flex flex-col justify-center items-center font-sans w-full min-h-full">

            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-16 items-center justify-center">
        
                <div className="space-y-6 flex-1 ">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        Let's Get In <span className="text-slate-100">Touch.</span>
                    </h1>
                    <p className="text-lg text-slate-400">
                        Or just reach out manually to  
                        <a href="mailto:rodejojohnrobert@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors px-1">rodejojohnrobert@gmail.com</a>.
                    </p>
                </div>

                <div className=" p-1 rounded-3xl flex-1 w-full">
                    <form action={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Full Name</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-4 flex items-center text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </span>
                            <input 
                                type="text" 
                                name="name"
                                required
                                placeholder="Enter your full name..." 
                                className="w-full bg-[#0a0c14] border border-slate-800 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#45FFBE] focus:ring-1 focus:ring-[#45FFBE] transition-all placeholder:text-slate-600" />
                        </div>
                        </div>

                        <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Email Address</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-4 flex items-center text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            </span>
                            <input 
                                type="email" 
                                name="email"
                                required
                                placeholder="Enter your email address..." 
                                className="w-full bg-[#0a0c14] border border-slate-800 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#45FFBE] focus:ring-1 focus:ring-[#45FFBE] transition-all placeholder:text-slate-600" />
                        </div>
                        </div>



                        <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Message</label>
                        <div className="relative">
                            <textarea 
                            name="message"
                            required
                            rows={4} 
                            placeholder="Enter your main text here..." 
                            value={message}
                            onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
                            className="w-full bg-[#0a0c14] border border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-[#45FFBE] focus:ring-1 focus:ring-[#45FFBE] transition-all placeholder:text-slate-600 resize-none"
                            ></textarea>
                            <div className="absolute bottom-3 left-4 text-xs text-slate-600 font-mono">
                            {message.length}/{maxChars}
                            </div>
                        </div>
                        </div>

                        {status?.success && (
                            <p className="text-emerald-400 text-sm">Message sent successfully!</p>
                        )}
                        {status?.error && (
                            <p className="text-rose-400 text-sm">{status.error}</p>
                        )}

                        <button 
                            type="submit" 
                            disabled={isPending}
                            className="w-full bg-gradient-to-r 
                from-[#00ffa6cc] 
                via-[#45ffbecc] 
                to-[#00da8ecc] 
                disabled:opacity-50 disabled:cursor-not-allowed
                 text-white font-semibold py-4 rounded-xl px-4 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]">
                        {isPending ? "Sending..." : "Submit Form"}
                        {!isPending && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}