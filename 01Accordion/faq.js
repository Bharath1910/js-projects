const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.getElementsByClassName("accordian_body")[0];

const faqs = [];

function showFaq() {
  
}

function createFaq(question) {
    const div = document.createElement("div")
    div.classList.add("faq")
    
    const header = document.createElement("div")
    header.classList.add("faq_header")
    
    
    const btn = document.createElement('button')
    btn.classList.add("show_btn")
    btn.innerText = "+"
    
    const h3 = document.createElement('h3')
    h3.innerText = question
    
    header.appendChild(h3)
    header.appendChild(btn)
    
    
    div.appendChild(header)
    accordianBody.appendChild(div)
}

function btnStatusUpdate() {
  
}

createFaq("hello")

