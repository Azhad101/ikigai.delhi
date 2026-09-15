import { eventConfig } from './event';

export const faqIndex = [
  {
    index: "01",
    tag: "IDENTITY",
    japanese: "本質",
    question: "What is Ikigai.delhi?",
    answer: "IKIGAI.DELHI is a premier 2-day creative and engineering odyssee in Delhi NCR where an ancient Japanese philosophy transforms into modern craft. It's not only for coders — writers, artists, designers, and every kind of creator are welcome. Rather than building throwaway demos, squads make enduring work that solves real friction."
  },
  {
    index: "02",
    tag: "ELIGIBILITY",
    japanese: "資格",
    question: "Who can participate?",
    answer: `${eventConfig.eligibility}. Whether you are a systems programmer, frontend architect, writer, visual artist, or product designer, admission is evaluated on curiosity and craft.`
  },
  {
    index: "03",
    tag: "FORMATION",
    japanese: "編成",
    question: "What is the team size?",
    answer: `Teams consist of ${eventConfig.teamSize}. Solo builders are welcome to apply; admitted builders gain access to dedicated squad-formation channels prior to kickoff.`
  },
  {
    index: "04",
    tag: "DURATION",
    japanese: "期間",
    question: "How long is the odyssee?",
    answer: `IKIGAI.DELHI is a continuous ${eventConfig.duration} uninterrupted creative marathon from opening briefing to final submission.`
  },
  {
    index: "05",
    tag: "VENUE & FORMAT",
    japanese: "形態",
    question: "Is it offline?",
    answer: `Yes. IKIGAI.DELHI is strictly an ${eventConfig.mode} experience held in Delhi NCR. Physical presence is required to build alongside mentors and community.`
  },
  {
    index: "06",
    tag: "EQUIPMENT",
    japanese: "携行品",
    question: "What should I bring?",
    answer: eventConfig.whatToBring
  },
  {
    index: "07",
    tag: "CREATION",
    japanese: "制作",
    question: "What can we build?",
    answer: eventConfig.whatCanBuild
  },
  {
    index: "08",
    tag: "EVALUATION",
    japanese: "審査",
    question: "How does judging work?",
    answer: eventConfig.judgingCriteria
  },
  {
    index: "09",
    tag: "PRIZES & GRANTS",
    japanese: "賞典",
    question: "What are the prizes?",
    answer: eventConfig.prizes
  },
  {
    index: "10",
    tag: "REGISTRATION",
    japanese: "登録",
    question: "How do I register?",
    answer: `Applications are processed directly through the official portal (${eventConfig.registrationStatus}). Admission is 100% free with zero registration fee, strictly merit-evaluated.`
  }
];
