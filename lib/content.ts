// Dummy destination until the real application form exists.
export const APPLICATION_URL = "#";

export const COACH_NAME = "Zane Hoffman";

export type Testimonial = {
  name: string;
  lost: string;
  duration: string;
  summary: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Michael R.",
    lost: "42 lbs",
    duration: "16 weeks",
    summary:
      "Started at 238 lbs with no training routine. Built a consistent lifting schedule and a simple nutrition plan, and dropped to 196 lbs while gaining visible strength.",
  },
  {
    name: "Daniel K.",
    lost: "31 lbs",
    duration: "12 weeks",
    summary:
      "A desk-job schedule and late-night eating were the main obstacles. Structured meals and three weekly sessions took him from 214 lbs to 183 lbs.",
  },
  {
    name: "Sarah T.",
    lost: "27 lbs",
    duration: "14 weeks",
    summary:
      "Came in with a history of crash diets. A sustainable calorie target and progressive training brought her from 181 lbs to 154 lbs, and the results have held.",
  },
];

export const story = [
  "I spent my early twenties overweight, inconsistent, and convinced that results were for people with more discipline than me. Every plan I tried was either too extreme to last or too vague to follow.",
  "What finally worked was structure: clear targets, a plan built around my actual schedule, and someone holding me accountable. Losing the weight changed more than my body. It changed how I worked, how I slept, and how I showed up for the people around me.",
  "Today I coach a small number of clients one-on-one. Every plan is built for the individual, adjusted weekly, and measured against real numbers. If you are ready to be held to a standard, I would like to hear from you.",
];
