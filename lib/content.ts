import type { StaticImageData } from "next/image";
import afterPhoto from "@/assets/testimonial-after.jpg";
import beforePhoto from "@/assets/testimonial-before.jpg";
import prepAfter from "@/assets/prep-after.jpg";
import prepBefore from "@/assets/prep-before.jpg";
import lb110After from "@/assets/lb110-after.jpg";
import lb110Before from "@/assets/lb110-before.jpg";
import mikeAfter from "@/assets/mike-after.jpg";
import mikeBefore from "@/assets/mike-before.jpg";

export const APPLICATION_URL = "https://form.jotform.com/262907090332050";

export const COACH_NAME = "Zane Hoffman";

export type FeaturedResult = {
  name: string;
  descriptor: string;
  /** Pounds lost, shown as "−{lost}". Ignored when `stat` is set. */
  lost?: string;
  /** Free-form headline stat, e.g. for results that aren't weight loss. */
  stat?: string;
  duration?: string;
  summary?: string;
  /** One entry per paragraph. */
  quote: string[];
  images?: { before: StaticImageData; after: StaticImageData };
};

export const featuredResults: FeaturedResult[] = [
  {
    name: "Jessica Debuhr",
    descriptor: "After bariatric surgery and a revision",
    lost: "150 lbs",
    images: { before: beforePhoto, after: afterPhoto },
    quote: [
      "After bariatric surgery and a revision, I had already lost a significant amount of weight—but eventually, my progress completely stalled. I was lifting weights, prioritizing protein, going to the gym, and doing everything I thought I was supposed to do, but my body just seemed stuck.",
      "That’s when I decided to work with Zane.",
      "What I appreciate most about Zane is that he doesn’t give you a one-size-fits-all plan. He took the time to understand me, my goals, and what I was trying to accomplish. He helped guide my nutrition and training, kept me accountable, checked in consistently, and made adjustments along the way based on how I was responding.",
      "Since I started working with Zane, I’ve lost 150 pounds—something I honestly never thought I would accomplish.",
      "For the first time in my life, the constant food noise has quieted down. I’m not constantly thinking about food or craving sweets, and I finally feel like I’m in control. With Zane’s guidance and support, I’ve been able to continue making progress when I thought I had reached my limit.",
      "My energy has improved. My confidence has improved. And most importantly, I feel like my health is in the best place it has been in years.",
      "I could have given up when I hit those plateaus, but I didn’t—and I’m so thankful I decided to work with Zane.",
    ],
  },
  {
    name: "Mike O'Donnell",
    descriptor: "Doctoral candidate · MBA, SADR",
    lost: "116 lbs",
    summary: "Started at 320 lbs and is now 204 lbs.",
    images: { before: mikeBefore, after: mikeAfter },
    quote: [
      "I can’t say enough good things about Zane and the impact he’s had on my health and fitness journey. When I started, I weighed 320 pounds. Today, I’m down to 204 pounds — a total loss of 116 pounds!",
      "Zane has been instrumental in helping me get here. From developing effective workouts to providing practical nutrition guidance, with regular touch bases to help keep me on track and focused.",
      "What I appreciate most is that Zane doesn’t take a one-size-fits-all approach. He understands that everyone’s journey is different and works with you to develop a plan that fits your goals and lifestyle.",
      "Losing 116 pounds hasn’t happened overnight, and it certainly hasn’t always been easy. But having someone knowledgeable, supportive, and genuinely invested in your success makes a tremendous difference.",
      "If you’re serious about improving your health, losing weight, or getting into better shape, I highly recommend Zane. The results speak for themselves, and I’m grateful for his guidance throughout this journey!",
    ],
  },
  {
    name: "Brady Bousquet",
    descriptor: "Natural bodybuilder · OCB Natural Pro Card",
    stat: "Under 10% body fat",
    summary: "Contest prep that ended with a Natural Pro Card win.",
    images: { before: prepBefore, after: prepAfter },
    quote: [
      "Working with Zane for my prep was an absolute game changer. I came into this season wanting to bring an undeniable package, and Zane delivered a blueprint that got me leaner and sharper than I’ve ever been. Getting below 10 percent body fat is one thing but staying full and maintaining most of my muscle mass I couldn’t have done alone. On top of the elite conditioning, his guidance through peak week and show day culminated in winning my Natural Pro Card. If you’re looking for a coach who understands the science of bodybuilding and actually knows how to peak a physique for the stage, look no further than Zane.",
    ],
  },
  {
    name: "Edgar Estrada",
    descriptor: "Started October 1, 2025",
    lost: "110 lbs",
    summary: "Started at 320 lbs on October 1, 2025. Now 210 lbs.",
    images: { before: lb110Before, after: lb110After },
    quote: [
      "When I started working with Zane on October 1, 2025, I weighed 320 pounds. Today, I’m down to 210 pounds—a total of 110 pounds lost.",
      "I knew I needed to make some major changes in my life, but I honestly didn’t know where to start. Zane gave me the structure, guidance, and accountability I needed to completely turn my health around.",
      "What sets Zane apart is how invested he is in your success. He doesn’t just give you a plan and send you on your way. He genuinely cares about your progress, keeps you accountable, and makes sure you have the tools to succeed.",
      "Throughout this journey, I’ve developed an incredible amount of trust in his knowledge and approach. His guidance has been invaluable, and I couldn’t be happier with the results. I even trust Zane’s guidance more than what I’ve received from doctors in the past because he takes the time to understand my goals, listens to my concerns, and provides practical support that I can actually follow.",
      "Losing 110 pounds has completely changed my life, and I couldn’t have done it without Zane’s support. I would recommend him to anyone who is serious about losing weight, improving their health, and making a lasting lifestyle change.",
    ],
  },
];

export const disclaimer =
  "These are individual results and are not what everyone should expect. Your own results depend on your starting point, your health history, and how consistently you follow the plan.";
