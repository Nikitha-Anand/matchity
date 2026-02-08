import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// sample input
let charity1 = {
  "name": "charity1",
  "budget": 4000,
  "urgency": false,
  "match": true,
}

// search through the web
// what is overall feeling of charity
// according to the situation what the
// organise budget accordingly

// info comes from JSON file
let charities = [charity1];
const companyValues = [];
const companyBudget = 4000;

function format(array) {
  let string = 0;
  let i = 0;

  for (i = 0; i < array.length; i++){
    string += array[i] + ", ";
  }

  return string;
}

async function generatingAnalysis(list) {
    const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Given a ${ companyBudget } budget in JSON format according to the following charities: ${ format(charities) } and determine which ones would be best suited towards according to the following company values ${ format(companyValues) } `,
    });
    return response.text;
}

let a = gerenetaingAnalysis();

function AnalyseData() {

  return (
    <>
      <p>hello</p>
    </>
  )
}

export default AnalyseData