const API_KEY = "<KEY>";
const resultsDiv = document.getElementById("results");

async function loadAndAnalyze() {
    try {

        const charitiesRes = await fetch(
            "http://localhost:8080/api/matchity/match/full"
        );
        const charities = await charitiesRes.json();

        const prompt = `
You are an AI advisor helping a company distribute its charity budget.

Here is a list of charities (JSON):
${JSON.stringify(charities, null, 2)}

For each charity:
- Suggest what percentage of the total company budget should be spent
- Consider urgency heavily
- Explain briefly why

Respond in clear bullet points.
`;

        const aiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: prompt }]
                        }
                    ]
                })
            }
        );

        const aiData = await aiRes.json();
        const text =
            aiData.candidates?.[0]?.content?.parts?.[0]?.text
            || "No AI response received.";


        resultsDiv.innerHTML = formatAIResponse(text);

    } catch (err) {
        console.error(err);
        resultsDiv.innerHTML =
            "<p class='error'>Failed to generate AI recommendations.</p>";
    }
}

function formatAIResponse(text) {
    return text
        .split("\n")
        .filter(line => line.trim() !== "")
        .map(line => `<p>${line}</p>`)
        .join("");
}

loadAndAnalyze();
