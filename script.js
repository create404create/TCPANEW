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

        document.getElementById("result").innerHTML = `
            <p>Blacklist Status: ${data.blacklist_status || "Unknown"}</p>
            <p>DNC National: ${data.dnc_national || "Unknown"}</p>
            <p>DNC State: ${data.dnc_state || "Unknown"}</p>
            <p>Litigator: ${data.litigator || "Unknown"}</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "<p style='color: red;'>Error fetching data</p>";
    }
}
