async function checkStatus() {
    const phone = document.getElementById("phoneNumber").value;
    if (!phone) {
        alert("Please enter a valid USA number");
        return;
    }

    const apiUrl = `https://tcpa.api.uspeoplesearch.net/tcpa/v1?x=${phone}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data); // Debugging

        document.getElementById("result").innerHTML = `
            <p>Blacklist Status: ${data.blacklist_status || "Not Available"}</p>
            <p>DNC National: ${data.dnc_national || "Not Available"}</p>
            <p>DNC State: ${data.dnc_state || "Not Available"}</p>
            <p>Litigator: ${data.litigator || "Not Available"}</p>
        `;
    } catch (error) {
        console.error("API Error:", error);
        document.getElementById("result").innerHTML = "<p style='color: red;'>Error fetching data</p>";
    }
}
