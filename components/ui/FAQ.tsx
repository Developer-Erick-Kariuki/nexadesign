"use client";

import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="mt-16">
      <div className="max-w-7xl w-full m-auto">
        <h2 className="text-6xl flex flex-col">
          Frequently <span className="opacity-75">Asked Questions</span>
        </h2>
        <div className="flex gap-6 mt-8">
          <div className="flex  flex-col gap-4 flex-1">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="w-full bg-white dark:bg-black rounded-4xl px-6 py-4 flex flex-col justify-center"
              >
                <span className="flex  justify-between items-center mb-2 ">
                  {item.question}
                  {index === i && open ? (
                    <FaMinus onClick={() => setOpen(false)} />
                  ) : (
                    <BiPlus
                      onClick={() => {
                        setOpen(true);
                        setIndex(i);
                      }}
                    />
                  )}
                </span>
                <span className="opacity-90">
                  {open && index === i && <p>{item.answer}</p>}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center rounded-4xl bg-white dark:bg-black px-4">
            <h2 className="text-3xl max-w-md mb-4 font-semibold">
              Still have a question?
            </h2>
            <button className="bg-purple-600 w-fit px-5 py-3 text-white rounded-4xl ">
              Reach out to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
