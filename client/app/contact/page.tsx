"use client"

import React, { useEffect, useRef } from 'react'
import ContactForm from "@/components/contact/ContactForm"
import { gsap } from 'gsap'

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const page = pageRef.current

    gsap.fromTo(page,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    )
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We'd love to hear from you! Send us a message using the form below.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

