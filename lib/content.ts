// Dummy destination until the real application form exists.
export const APPLICATION_URL = "#";

export const COACH_NAME = "Zane Hoffman";

// All client names, numbers, and quotes below are placeholders.

export type CompactResult = { name: string; descriptor: string };

export const compactResults: CompactResult[] = [
  { name: "Ethan R.", descriptor: "Truck driver · down 80 lbs" },
  { name: "Tim K.", descriptor: "Engineer · down 40 lbs" },
  { name: "Matt S.", descriptor: "53 · sales exec · down 20 lbs" },
  { name: "Sarah T.", descriptor: "Teacher · down 27 lbs" },
];

export type FeaturedResult = {
  name: string;
  descriptor: string;
  lost: string;
  duration: string;
  summary: string;
  quote: string;
};

export const featuredResults: FeaturedResult[] = [
  {
    name: "Daniel M.",
    descriptor: "Project manager",
    lost: "45 lbs",
    duration: "5 months",
    summary:
      "Started at 238 lbs with no training routine. A consistent lifting schedule and a simple nutrition plan took him to 193 lbs with visible strength gains.",
    quote:
      "Other coaches felt like I got handed off to a stranger. Here I actually get my coach, and the communication is what makes it work.",
  },
  {
    name: "Chris L.",
    descriptor: "Corporate consultant",
    lost: "85 lbs",
    duration: "10 months",
    summary:
      "Travel-heavy schedule and a history of crash diets. A sustainable calorie target and progressive training brought him from 295 lbs to 210 lbs, and it has held.",
    quote:
      "People are noticing. I get compliments from family, coworkers, friends. I can't recall the last time I felt this confident.",
  },
];

export type Quote = { quote: string; name: string; descriptor: string };

export const quotes: Quote[] = [
  {
    quote:
      "Ten months ago I was 380. Now I'm under 300 lbs for the first time in 26 years and I have energy like I'm in my 30s again.",
    name: "James D.",
    descriptor: "Father of two, 47",
  },
  {
    quote:
      "First time in years the scale is going the right way. My nutrition is dialed in and the weight is moving.",
    name: "Sam W.",
    descriptor: "Father, entrepreneur",
  },
  {
    quote:
      "You get down to the details. That's how I know you know what you're doing.",
    name: "Dr. Alex P.",
    descriptor: "Down 14 lbs in 7 weeks",
  },
];

export const disclaimer =
  "These are individual results and are not what everyone should expect. Your own results depend on your starting point, your health history, and how consistently you follow the plan.";

export const story = [
  "I spent my early twenties overweight, inconsistent, and convinced that results were for people with more discipline than me. Every plan I tried was either too extreme to last or too vague to follow.",
  "What finally worked was structure: clear targets, a plan built around my actual schedule, and someone holding me accountable. Losing the weight changed more than my body. It changed how I worked, how I slept, and how I showed up for the people around me.",
  "Today I coach a small number of clients one-on-one. Every plan is built for the individual, adjusted weekly, and measured against real numbers. If you are ready to be held to a standard, I would like to hear from you.",
];
