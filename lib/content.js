export const siteName = "Assignment Helper";
export const instagram = "https://www.instagram.com/fatiii_ali123/";
export const turnitinGuide = "https://guides.turnitin.com/hc/en-us/articles/23713493434253-Understanding-the-similarity-score-for-students";

export function whatsapp(service) {
  const message = service
    ? `Hi! I'd like to ask about ${service}. Can we discuss my brief and deadline?`
    : "Hi! I'd like to ask about academic support for my course.";
  return `https://wa.me/923157184463?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    slug: "assignment-guidance", icon: "book", label: "Assignment guidance",
    summary: "Make sense of the brief, plan your response, and get feedback on your draft.",
    intro: "Turn an unfamiliar brief into manageable steps and use your rubric to guide the next revision.",
    items: ["Break down instructions and identify what the rubric asks for.", "Plan a workable outline and set checkpoints before the deadline.", "Get feedback on your draft’s argument, evidence, and clarity."],
    bring: "Share the assignment brief, marking rubric, deadline, and any notes or draft you’ve started.",
  },
  {
    slug: "research-reports", icon: "file", label: "Research & reports",
    summary: "Develop your research question, organize evidence, and cite your sources clearly.",
    intro: "Get guidance for coursework reports, literature reviews, research proposals, and case studies.",
    items: ["Narrow your topic and develop a focused research question.", "Build a search plan, evaluate sources, and organize evidence by theme.", "Review methods, report structure, and APA, MLA, or Harvard references as your brief requires."],
    bring: "Share your topic, required report format, word limit, citation style, and any sources or data you already have.",
  },
  {
    slug: "exam-preparation", icon: "clock", label: "Exam preparation",
    summary: "Review difficult topics with practice questions, past papers, and a focused revision plan.",
    intro: "Use your syllabus and available practice materials to focus revision on the topics you find hardest.",
    items: ["Prioritize topics and build a revision plan around your exam date.", "Work through practice MCQs and past-paper questions with explanations.", "Review mistakes from timed practice and plan what to revisit."],
    bring: "Share the syllabus, exam date and format, and any practice material you’re allowed to use.",
  },
  {
    slug: "coding-support", icon: "code", label: "Coding & debugging",
    summary: "Understand your code, trace errors, and build tests for your programming coursework.",
    intro: "Work through a problem with guided debugging, concept explanations, and examples you can adapt yourself.",
    items: ["Trace errors and review your existing implementation.", "Practice with C++, Java, Python, JavaScript, or SQL.", "Design test cases and review topics such as data structures, OOP, databases, or web development."],
    bring: "Share the language, task description, relevant code, and the full error message or failing input. Remove credentials and personal data first.",
  },
  {
    slug: "similarity-review", icon: "shield", label: "Turnitin & citations",
    summary: "Interpret your similarity report and spot passages that need clearer attribution.",
    intro: "Review the matches in a Turnitin Similarity Report you already have and decide what needs closer attention.",
    items: ["Distinguish quotations, bibliographies, and common phrases from matches that need review.", "Check in-text citations and references against your course requirements.", "Improve original writing by revising how you explain, paraphrase, and attribute ideas."],
    bring: "Share the report or relevant excerpts if your institution permits it, along with the required citation style.",
  },
  {
    slug: "presentations-editing", icon: "spark", label: "Editing & presentations",
    summary: "Make your writing easier to follow and turn your findings into a clear presentation.",
    intro: "Polish the material you have drafted and prepare to explain your work with confidence.",
    items: ["Review grammar, structure, and consistency in your own writing.", "Plan slides and decide which evidence belongs in each section.", "Practice an oral presentation or viva with example questions and feedback."],
    bring: "Share your draft or slides, rubric, required format, and presentation time limit if you have one.",
  },
];

export const subjects = [
  { icon: "code", label: "Computer science & IT", topics: ["Programming and OOP", "Data structures and algorithms", "Database design and SQL", "Web development", "Operating systems"] },
  { icon: "chart", label: "Mathematics & data", topics: ["Algebra and discrete mathematics", "Probability and statistics", "Data analysis", "Spreadsheet skills"] },
  { icon: "briefcase", label: "Business & management", topics: ["Marketing concepts", "Management case studies", "Business reports", "Entrepreneurship"] },
  { icon: "book", label: "Writing & social sciences", topics: ["Academic essays", "Literature reviews", "Research methods", "Source evaluation", "Citation and referencing"] },
];

export const faqs = [
  ["How do I get started?", "Send your brief, subject, deadline, and what you’ve done so far on WhatsApp. Share your rubric too if you have one."],
  ["How much does support cost?", "Ask for a quote with your brief and deadline. The scope of support and turnaround determine the price."],
  ["Can you help with a live exam?", "Exam support covers revision, practice questions, and past papers before the assessment."],
  ["What does a Turnitin score tell me?", "It shows the share of submitted text that matches other sources. Review individual matches alongside your institution’s citation requirements."],
];
