import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.userProgress);
    await db.delete(schema.courses);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Burmese",
        imageSrc: "/flags/MM.svg",
      },
      {
        id: 2,
        title: "Hokkien (SG)",
        imageSrc: "/flags/SG.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Burmese
        title: "Unit 1",
        description: "Learn the basics of Burmese",
        order: 1,
      },
      {
        id: 2,
        courseId: 2, // Hokkien (SG)
        title: "Unit 1",
        description: "Learn the basics of Hokkien",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 (Learn the basics of Burmese)
        title: "Alphabets",
        order: 1,
      },
      {
        id: 2,
        unitId: 1, // Unit 1 (Learn the basics of Burmese)
        title: "Greetings",
        order: 2,
      },
      {
        id: 3,
        unitId: 2, // Unit 1 (Learn the basics of Hokkien (SG))
        title: "Greetings",
        order: 1,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: "Which one of these is 'a man'?",
        order: 1,
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        question: "'the man'",
        order: 2,
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        question: "Which one of these is 'a woman'?",
        order: 3,
      },
      {
        id: 4,
        lessonId: 1,
        type: "ASSIST",
        question: "'the woman'",
        order: 4,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // "Which one of these is 'a man'?"
        text: "အမြိုးသား (a myoe thar)",
        imageSrc: "/images/man.jpg",
        audioSrc: "/audio/mm_man.mp3",
        correct: true,
      },
      {
        challengeId: 1,
        text: "အမြိုးသမီး (a myoe tha mee)",
        imageSrc: "/images/woman.jpg",
        audioSrc: "/audio/mm_woman.mp3",
        correct: false,
      },
      {
        challengeId: 2, // "'the man'"
        text: "အမြိုးသား (a myoe thar)",
        audioSrc: "/audio/mm_man.mp3",
        correct: true,
      },
      {
        challengeId: 2,
        text: "အမြိုးသမီး (a myoe tha mee)",
        audioSrc: "/audio/mm_woman.mp3",
        correct: false,
      },
      {
        challengeId: 3, // "Which one of these is 'a woman'?"
        text: "အမြိုးသား (a myoe thar)",
        imageSrc: "/images/man.jpg",
        audioSrc: "/audio/mm_man.mp3",
        correct: false,
      },
      {
        challengeId: 3,
        text: "အမြိုးသမီး (a myoe tha mee)",
        imageSrc: "/images/woman.jpg",
        audioSrc: "/audio/mm_woman.mp3",
        correct: true,
      },
      {
        challengeId: 4, // "'the woman'"
        text: "အမြိုးသား (a myoe thar)",
        audioSrc: "/audio/mm_man.mp3",
        correct: false,
      },
      {
        challengeId: 4,
        text: "အမြိုးသမီး (a myoe tha mee)",
        audioSrc: "/audio/mm_woman.mp3",
        correct: true,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 5,
        lessonId: 2,
        type: "SELECT",
        question: "Which one of these is 'a man'?",
        order: 1,
      },
      {
        id: 6,
        lessonId: 2,
        type: "ASSIST",
        question: "'the man'",
        order: 2,
      },
      {
        id: 7,
        lessonId: 2,
        type: "SELECT",
        question: "Which one of these is 'a woman'?",
        order: 3,
      },
      {
        id: 8,
        lessonId: 2,
        type: "ASSIST",
        question: "'the woman'",
        order: 4,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5, // "Which one of these is 'a man'?"
        text: "အမြိုးသား (a myoe thar)",
        imageSrc: "/images/man.jpg",
        audioSrc: "/audio/mm_man.mp3",
        correct: true,
      },
      {
        challengeId: 5,
        text: "အမြိုးသမီး (a myoe tha mee)",
        imageSrc: "/images/woman.jpg",
        audioSrc: "/audio/mm_woman.mp3",
        correct: false,
      },
      {
        challengeId: 6, // "'the man'"
        text: "အမြိုးသား (a myoe thar)",
        audioSrc: "/audio/mm_man.mp3",
        correct: true,
      },
      {
        challengeId: 6,
        text: "အမြိုးသမီး (a myoe tha mee)",
        audioSrc: "/audio/mm_woman.mp3",
        correct: false,
      },
      {
        challengeId: 7, // "Which one of these is 'a woman'?"
        text: "အမြိုးသား (a myoe thar)",
        imageSrc: "/images/man.jpg",
        audioSrc: "/audio/mm_man.mp3",
        correct: false,
      },
      {
        challengeId: 7,
        text: "အမြိုးသမီး (a myoe tha mee)",
        imageSrc: "/images/woman.jpg",
        audioSrc: "/audio/mm_woman.mp3",
        correct: true,
      },
      {
        challengeId: 8, // "'the woman'"
        text: "အမြိုးသား (a myoe thar)",
        audioSrc: "/audio/mm_man.mp3",
        correct: false,
      },
      {
        challengeId: 8,
        text: "အမြိုးသမီး (a myoe tha mee)",
        audioSrc: "/audio/mm_woman.mp3",
        correct: true,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 9,
        lessonId: 3,
        type: "SELECT",
        question: "Which one of these is 'a man'?",
        order: 1,
      },
      {
        id: 10,
        lessonId: 3,
        type: "ASSIST",
        question: "'the woman'",
        order: 2,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 9, // "Which one of these is 'a man'?"
        text: "男 (ta por)",
        imageSrc: "/images/man.jpg",
        audioSrc: "/audio/sghk_man.mp3",
        correct: true,
      },
      {
        challengeId: 9,
        text: "女 (cha bor)",
        imageSrc: "/images/woman.jpg",
        audioSrc: "/audio/sghk_woman.mp3",
        correct: false,
      },
      {
        challengeId: 10, // "'the woman'"
        text: "男 (ta por)",
        audioSrc: "/audio/sghk_man.mp3",
        correct: false,
      },
      {
        challengeId: 10,
        text: "女 (cha bor)",
        audioSrc: "/audio/sghk_woman.mp3",
        correct: true,
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
