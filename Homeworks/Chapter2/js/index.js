//https://api.github.com/users

const nameInput = document.getElementById("name-input");
const submitBtn = document.getElementById("submit-btn");

const infoCard = document.getElementById("info-card");

const personAvatar = document.getElementById("person-avatar");
const personName = document.getElementById("person-name");
const personEmail = document.getElementById("person-email");
const personCompany = document.getElementById("person-company");
const personFollowers = document.getElementById("person-followers");

submitBtn.addEventListener("click", async () => {
    if (!nameInput.value) {
        alert("Write a name");
        return;
    }

    let result = await getDataByName(nameInput.value);

    nameInput.value = "";

    if (result.message == "Not Found") {
        alert("⚠️ Không tìm thấy user bạn yêu cầu");
        return;
    }

    displayPersonInfo(await result);

    if (!infoCard.hasAttribute("isShow")) {
        infoCard.classList.remove("d-none");
        infoCard.classList.add("d-flex");
        infoCard.setAttribute("isShow", true);
    }
});

const getDataByName = async (name) => {
    const response = await fetch(`https://api.github.com/users/${name}`);
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error: ", error.message);
        return error.message;
    }
};

const displayPersonInfo = (data) => {
    personAvatar.setAttribute("src", data.avatar_url);
    personName.innerHTML = data.name ? `😀 ${data.name}` : "😀 Not Found";
    personEmail.innerHTML = data.email ? `📧 ${data.email}` : "📧 Not Found";
    personCompany.innerHTML = data.company
        ? `🏢 ${data.company}`
        : "🏢 Not Found";
    personFollowers.innerHTML = `🧑‍🤝‍🧑 ${data.followers} followers`;
};
