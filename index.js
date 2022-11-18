const axios = require("axios");

module.exports = async (url) => {
    return (await axios({
        method: "POST",
        url: "https://qupe.pw:455/api/link/generate",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({from: url})
    })).data;
}