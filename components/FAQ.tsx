"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What types of iPhone accessories do you offer?",
    answer: "We offer a wide range of iPhone accessories including cases, screen protectors, chargers, cables, power banks, and more. Our selection covers various iPhone models and caters to different needs and preferences.",
  },
  {
    question: "Are your products compatible with all iPhone models?",
    answer: "Most of our products are designed for specific iPhone models. We clearly indicate compatibility in each product description. Always check the compatibility before making a purchase to ensure it fits your iPhone model.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. If you're not satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange. The item must be in its original condition and packaging.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location and the shipping method chosen. Generally, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days. Expedited shipping options are available at checkout.",
  },
]

export default function FAQ() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}