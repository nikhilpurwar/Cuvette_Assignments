import React, { useState } from 'react';
import '../Home.css';

const faq = [
    {
        question: "Q1: Lorem ipsum dolor, sit amet consectetur adipisicing?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam.",
    },
    {
        question: "Q2: Lorem ipsum dolor, sit amet consectetur adipisicing?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam.",
    },
    {
        question: "Q3: Lorem ipsum dolor, sit amet consectetur adipisicing?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam.",
    },
    {
        question: "Q4: Lorem ipsum dolor, sit amet consectetur adipisicing?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam.",
    },
    {
        question: "Q5: Lorem ipsum dolor, sit amet consectetur adipisicing?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam.",
    },
];

export const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (

        <div className="faq-container">
            <h1 className="title">FAQ</h1>

            {faq.map((item, index) => (
                <div className="faq-item" key={index}>
                    <div className="faq-question" onClick={() => toggleAnswer(index)}>
                        <h3 className="faq-question-text">{item.question}</h3>
                        <img
                            className="faq-icon"
                            src="https://img.icons8.com/?size=100&id=60662&format=png&color=000000"
                            alt="expand-arrow"
                            style={{
                                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        />
                    </div>
                    {openIndex === index && (
                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>

    );
};
