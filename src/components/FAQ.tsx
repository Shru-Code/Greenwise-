import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      category: "For Visitors",
      icon: "👥",
      questions: [
        {
          question: "What kinds of items can I bring to the Repair Cafe?",
          answer: "You can bring electrical appliances, clothing, furniture, crockery, housewares, bicycles, toys, and other broken items that you can carry. Our expert repairers will help fix your items and teach you repair skills."
        },
        {
          question: "Do I need to make an appointment?",
          answer: "No, you don't need to make an appointment. You can visit during our scheduled repair sessions. However, if you want to ensure a specific repairer is available, you can contact us in advance."
        },
        {
          question: "How much does it cost to get items repaired?",
          answer: "Repair services at our cafe are free of charge. However, we welcome voluntary donations to help cover our costs. If your item needs replacement parts, we'll advise you where to purchase them."
        }
      ]
    },
    {
      category: "About Repair Services",
      icon: "🔧",
      questions: [
        {
          question: "What if my item is too heavy to bring?",
          answer: "Unfortunately, we don't provide pickup services. You'll need to bring your items to the cafe. If you have large items, you might want to check if any repairers at the cafe are willing to help with home visits."
        },
        {
          question: "What if my item can't be repaired?",
          answer: "If an item can't be repaired, our repairers will explain why and suggest alternatives. They might also provide tips on how to prevent similar issues in the future or recommend where to responsibly dispose of the item."
        },
        {
          question: "Do you provide replacement parts?",
          answer: "We have a limited supply of basic parts like switches, plugs, and wires. For specific parts, we'll guide you on where to purchase them. You can then bring the parts back for installation during the next session."
        }
      ]
    },
    {
      category: "Getting Involved",
      icon: "🤝",
      questions: [
        {
          question: "How can I volunteer as a repairer?",
          answer: "If you have repair skills and want to help, please contact us through our website. We welcome volunteers with expertise in electronics, textiles, furniture, bicycles, and other repair areas."
        },
        {
          question: "Can I donate tools or materials?",
          answer: "Yes! We accept donations of tools and repair materials. Please contact us to arrange the donation and ensure the items are in good working condition."
        },
        {
          question: "How can I support the Repair Cafe?",
          answer: "You can support us by volunteering your repair skills, donating tools and materials, making financial contributions, or simply spreading the word about our services in the community."
        }
      ]
    }
  ];

  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our repair services and how to get involved
        </p>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-6">
              <button
                onClick={() => setOpenCategory(openCategory === categoryIndex ? null : categoryIndex)}
                className="w-full text-left bg-white rounded-xl shadow-lg p-6 mb-2 flex justify-between items-center hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                </div>
                <svg
                  className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                    openCategory === categoryIndex ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openCategory === categoryIndex ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-4 pt-4">
                  {category.questions.map((item, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:shadow-md"
                    >
                      <button
                        onClick={() => setOpenQuestion(openQuestion === questionIndex ? null : questionIndex)}
                        className="w-full text-left flex justify-between items-center group"
                      >
                        <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {item.question}
                        </h4>
                        <svg
                          className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                            openQuestion === questionIndex ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openQuestion === questionIndex ? 'max-h-[500px] mt-4' : 'max-h-0'
                        }`}
                      >
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 