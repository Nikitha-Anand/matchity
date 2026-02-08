import { GoogleGenAI } from "@google/genai";
import data from './db.json' with { type: 'json' };

const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const charities = [ data ];

// Get the company
const js = localStorage.getItem("JSON");
const userInput = JSON.parse(js);

const companyTheme = userInput["theme"];
const companyBudget = userInput["budget"];

// search through the web
// what is overall feeling of charity
// according to the situation what the
// organise budget accordingly

// info comes from JSON file

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
        contents: `Given a ${ companyBudget } budget in JSON format according to the following charities: ${ format(charities) } and determine which ones would be best suited according these company values: ${ format(companyValues) } `,
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