"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

function FaqSection() {
  const faqs = [
    {
      question: "What is Conference Finder?",
      answer:
        "Conference Finder is a B2B tool that helps you discover, track, and act on industry-relevant conferences and trade shows. Filter by vertical, location, format, and more — and get notified when new events are added.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes! Browsing and filtering events is completely free. We offer optional paid features like real-time email alerts and saved search preferences.",
    },
    {
      question: "Where do you get your data from?",
      answer:
        "We use a combination of curated sources, public listings, and smart web scraping to aggregate the most relevant conferences in each industry.",
    },
    {
      question: "What industries do you cover?",
      answer:
        "We currently cover sectors like Private Markets, Technology, Crypto, Finance, and B2B Sales — with more verticals being added all the time. Please suggest more here.",
    },
    {
      question: "How do email alerts work?",
      answer:
        "You set your preferred industries and formats, and we'll notify you when new matching events are found — daily, weekly, or in real time (depending on your preferences).",
    },
    {
      question: "Do you take affiliate commissions or promote certain events?",
      answer:
        "Yes — we offer premium placements for event organizers who want to be featured at the top of relevant search results. To sponsor your event and boost visibility, reach out to hello@conferencefinder.app.",
    },
  ];

  return (
    <section className="bg-purple-50 py-20" id="faq">
      <div className="max-w-sm sm:max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 capitalize text-blue-700">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                className="bg-white p-4 px-7 rounded-lg hover:shadow"
              >
                <Accordion
                  className="flex w-full flex-col"
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  variants={{
                    expanded: {
                      opacity: 1,
                      scale: 1,
                    },
                    collapsed: {
                      opacity: 0,
                      scale: 0.7,
                    },
                  }}
                >
                  <AccordionItem value="getting-started" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left">
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-purple-600 transition-transform duration-200 group-data-[expanded]:rotate-90" />
                        <div className="ml-2 text-blue-700 text-xl font-semibold">
                          {faq.question}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                      <p className="pl-6 pr-2 leading-relaxed text-black">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FaqSection;
