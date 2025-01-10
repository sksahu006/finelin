"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the contact info section
      gsap.from(".contact-info > *", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })

      // Animate the form elements
      gsap.from(".form-element", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5
      })
    }, formRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={formRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
      {/* Contact Information */}
      <div ref={contactRef} className="contact-info space-y-8">
        <h1 className="text-5xl font-bold text-yellow-500">CONTACT US</h1>
        
        <div className="space-y-6 text-gray-600">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:artistbuildingstudio@gmail.com" className="hover:text-yellow-500 transition-colors">
              artistbuildingstudio@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+918269528424" className="hover:text-yellow-500 transition-colors">
              +91-8269528424
            </a>
          </div>
          
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <address className="not-italic hover:text-yellow-500 transition-colors">
              HIG 10, Old Subhash Nagar, Ashoka Garden, Bhopal, Madhya Pradesh, India
            </address>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-6">
        <div className="form-element">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl bg-white border border-gray-300  focus:outline-none focus:border-yellow-500 transition-colors"
          />
        </div>
        
        <div className="form-element">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-white border border-gray-300  focus:outline-none focus:border-yellow-500 transition-colors"
          />
        </div>
        
        <div className="form-element">
          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full p-4 rounded-xl bg-white border border-gray-300  focus:outline-none focus:border-yellow-500 transition-colors"
          />
        </div>
        
        <div className="form-element">
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-4 rounded-xl bg-white border border-gray-300  focus:outline-none focus:border-yellow-500 transition-colors resize-none"
          />
        </div>
        
        <div className="form-element flex items-center gap-4">
          <button
            type="submit"
            className="p-4 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <Send className="w-6 h-6 text-white" />
          </button>
          
          <button
            type="button"
            className="px-6 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

