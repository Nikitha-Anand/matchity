import { GoogleGenAI } from "@google/genai";
import fetch from "node-fetch"; // required if Node < 18

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const MATCHITY_API = "http://localhost:8080/api/matchity/match/full";
const COMPANY_BUDGET = 10000; // adjust if needed

async function fetchCharities() {
    const res = await fetch(MATCHITY_API);
    if (!res.ok) {
        throw new Error("Failed to fetch charities");
    }
    return res.json();
}

function buildPrompt(charities) {
    return `
You are a nonprofit funding advisor.

A company has a total budget of $${COMPANY_BUDGET}.
Below is a list of charities with their name, description, urgency, and budget needs.

Your task:
- Recommend how much PERCENTAGE of the company's total budget should be allocated to EACH charity
- Urgent charities should receive higher allocation
- Explain your reasoning briefly for each charity
- Percentages do NOT need to sum to 100%

Charity data (JSON):
${JSON.stringify(charities, null, 2)}

Respond in this format:
- Charity Name:
  - Suggested allocation: X%
  - Reason:
`;
}

async function getAIRecommendations() {
    const charities = await fetchCharities();

    const prompt = buildPrompt(charities);

    const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: prompt,
    });

    console.log("\n=== AI Funding Recommendations ===\n");
    console.log(response.text);
}

getAIRecommendations().catch(console.error);
