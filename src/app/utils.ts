import { randomUUID } from "node:crypto";

export function getDateString() {
  return new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "long",
    timeZone: "UTC",
  });
}

export function getRandomUUID() {
  return randomUUID();
}

export function generateSixDigitRandomNumber(): number {
  // Generate a 6 digit OTP code
  // Generate a random number between 100,000 and 999,999 (inclusive)
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}