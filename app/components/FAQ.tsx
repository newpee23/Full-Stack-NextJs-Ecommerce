"use client";
// REACT AND NEXT IMPORT
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Icons
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const FAQ = () => {

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const questions = [
        {
            id: 1,
            question: "How long is shipping?",
            answer: "Shipping is between 5-10 business days",
        },
        {
            id: 2,
            question: "What if I want a refund?",
            answer: "Moonlamps.com does 100% refund if you are not satisfied",
        },
        {
            id: 3,
            question: "Can I just purchase the stand?",
            answer: "Unfortunatley, we are only selling the bundle which includes the stand",
        },
        {
            id: 4,
            question: "How can I track my order?",
            answer: "You can go to your dashboard and view all of your orders",
        },
        {
            id: 5,
            question: "How many years does this lamp last?",
            answer: "We would hope a lifetime, but you never know what could happen. ",
        },
    ];

    return (
        <div className="w-full py-5" id="faq">
            <div className="w-[89%] m-auto max-w-[1400px] shadow-md rounded-lg p-8 bg-background">
                <h2 className="text-2xl mb-6 font-semibold">Frequently Asked Questions</h2>
                {questions.map((item) => (
                    <div key={item.id} className="mb-4 last:mb-0">
                        <button className="faq-question w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === item.id ? null : item.id)}>
                            {item.question}
                            {activeQuestion === item.id ? (
                                <FaMinusCircle className="text-xl text-primary" />
                            ) : (
                                <FaPlusCircle className="text-xl text-primary" />
                            )}
                        </button>
                        <AnimatePresence>
                            {activeQuestion === item.id && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-2 text-gray-600 ml-4">
                                    <p>{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ;