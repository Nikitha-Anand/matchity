const dialog = document.getElementById("charities");

const nameEl = document.getElementById("name");
const descriptionEl = document.getElementById("description");
const urgencyEl = document.getElementById("urgency");

const yesBtn = document.getElementById("yesButtonLink");
const noBtn = document.getElementById("noButtonLink");

const finalizeBtn = document.getElementById("finalizeLink");
let finalized = false;


let data = [];
let currentIndex = 0;

// Fetch data from your GET API
fetch("http://localhost:8080/api/matchity/match/full")
    .then(res => res.json())
    .then(result => {
        data = result;
        if (data.length > 0) {
            dialog.showModal();
            showCurrent();
        }
    })
    .catch(err => console.error("Error fetching data:", err));

function showCurrent() {
    if (currentIndex >= data.length) {
        dialog.close();
        alert("No more options!");
        return;
    }

    const item = data[currentIndex];

    nameEl.textContent = item.name;
    descriptionEl.textContent = item.description;
    urgencyEl.textContent = item.urgency
        ? "Urgency: High"
        : "Urgency: Normal";
}

async function updateMatch(item, matchValue) {
    try {
        const updated = {
            ...item,
            match: matchValue
        };

        await fetch(`http://localhost:8080/api/matchity`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updated)
        });
    } catch (err) {
        console.error("Failed to update match:", err);
    }
}

yesBtn.addEventListener("click", async () => {
    if (finalized) return;

    const current = data[currentIndex];
    await updateMatch(current, true);

    currentIndex++;
    showCurrent();
});

noBtn.addEventListener("click", async () => {
    if (finalized) return;

    const current = data[currentIndex];
    await updateMatch(current, false);

    currentIndex++;
    showCurrent();
});


finalizeBtn.addEventListener("click", () => {
    finalized = true;
    dialog.close();
    console.log("Matching finalized by user");

});


function showCurrent() {
    if (finalized || currentIndex >= data.length) {
        dialog.close();
        alert("You’ve seen all matches!");
        return;
    }

    const item = data[currentIndex];

    nameEl.textContent = item.name;
    descriptionEl.textContent = item.description;

    if (item.urgency) {
        urgencyEl.textContent = "High urgency";
        urgencyEl.className = "urgency-badge urgent";
    } else {
        urgencyEl.textContent = "Normal urgency";
        urgencyEl.className = "urgency-badge normal";
    }
}


