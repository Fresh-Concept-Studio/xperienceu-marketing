import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'I thikn I have a question?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros eu urna venenatis congue eu eu dolor.',
    },
    {
      question: 'I thikn I have a question?',
      answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
      question: 'How do I apply for a job at TaxPal?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros eu urna venenatis congue eu eu dolor.',
    },
  ],
  [
    {
      question: 'I thikn I have a question?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros eu urna venenatis congue eu eu dolor.',
    },
    {
      question:
        'Lorem ipsum I thikn I have a question?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros eu urna venenatis congue eu eu dolor.',
    },
    {
      question:
        'Lorem ipsum I thikn I have a question?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros eu urna venenatis congue eu eu dolor.',
    },
  ],
  [
    {
      question: 'I thikn I have a question?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros eu urna venenatis congue eu eu dolor.',
    },
    {
      question: 'I thikn I have a question?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I thikn I have a question?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-32"
    >

      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-400">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-300">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-400">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
