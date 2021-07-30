//https://api.github.com/users

// const axios = require("axios").default;

const nameInput = document.getElementById("name-input");
const submitBtn = document.getElementById("submit-btn");

const infoCard = document.getElementById("info-card");

const personAvatar = document.getElementById("person-avatar");
const personName = document.getElementById("person-name");
const personEmail = document.getElementById("person-email");
const personCompany = document.getElementById("person-company");
const personFollowers = document.getElementById("person-followers");

submitBtn.addEventListener("click", async () => {
    validateInput(nameInput.value);

    let result = await getDataByName(nameInput.value);

    nameInput.value = "";

    if (!result) {
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
    try {
        const response = await axios.get(
            `https://api.github.com/users/${name}`
        );
        // const data = await response.json();
        return response.data;
    } catch (error) {
        alert("⚠️ Không tìm thấy user bạn yêu cầu");
        return;
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

const validateInput = (input) => {
    if (!input) {
        alert("⚠️ Hãy nhập tên");
        return;
    }
};
