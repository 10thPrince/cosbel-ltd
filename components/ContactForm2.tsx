'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Send, CheckCircle2 } from 'lucide-react';
import { ToastContainer } from 'react-toastify/unstyled';

const ContactForm2 = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch('api/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                phone: form.phone,
                message: form.message
            })
        })

        const result = await response.json();

        if (!result.success) {
            setLoading(false);
            setSubmitted(false);
            toast.error('An error occured while submitting. Please try again!');
        } else {
            setLoading(false);
            setSubmitted(true);
        }
    }

    const resetForm = () => {
        setSubmitted(false);
        setForm({
            name: "",
            phone: "",
            email: "",
            message: ""
        })
    }
    return (
        <div>
            <ToastContainer position='top-right' autoClose={3000} />

            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
                {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                            <CheckCircle2 size={32} className="text-brand-green" />
                        </div>
                        <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">Message sent!</h3>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                        <button
                            onClick={resetForm}
                            className="mt-6 text-sm text-brand-green font-medium hover:underline"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <h2 className="font-display font-bold text-2xl text-brand-dark mb-1">
                                Tell us about your project
                            </h2>
                            <p className="text-sm text-gray-500">
                                Fill in the form below and we'll get back to you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-brand-dark mb-1.5">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-brand-dark mb-1.5">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <div>
                                <label className="block text-xs font-semibold text-brand-dark mb-1.5">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+250 7XX XXX XXX"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all placeholder-gray-400"
                                />
                            </div>
                        </div>



                        <div>
                            <label className="block text-xs font-semibold text-brand-dark mb-1.5">Project Details *</label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project — what do you need built, your timeline, and any other details..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all placeholder-gray-400 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center border-2 border-blue-600 gap-2 px-6 py-3.5 bg-brand-green text-blue-600 hover:text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={15} />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ContactForm2
