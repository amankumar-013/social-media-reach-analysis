function analyzeReach() {
    // इनपुट फील्ड्स से वैल्यू लेना
    let followers = parseFloat(document.getElementById('followers').value);
    let likes = parseFloat(document.getElementById('likes').value) || 0;
    let comments = parseFloat(document.getElementById('comments').value) || 0;
    let shares = parseFloat(document.getElementById('shares').value) || 0;

    // एरर हैंडलिंग: अगर फॉलोअर्स 0 या खाली हैं
    if (!followers || followers <= 0) {
        alert("Please enter a valid number of followers.");
        return;
    }

    // कुल एंगेजमेंट और एंगेजमेंट रेट का फॉर्मूला
    let totalEngagement = likes + comments + shares;
    let engagementRate = (totalEngagement / followers) * 100;

    // HTML में रिजल्ट दिखाने के लिए एलिमेंट सेलेक्ट करना
    let resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.style.display = "block";

    // एनालिसिस के आधार पर फीडबैक देना
    if (engagementRate >= 5) {
        resultDisplay.style.backgroundColor = "#d4edda";
        resultDisplay.style.color = "#155724";
        resultDisplay.innerHTML = `<strong>Excellent Reach! 🚀</strong><br><br>Engagement Rate: ${engagementRate.toFixed(2)}%<br>Total Engagements: ${totalEngagement}`;
    } else if (engagementRate >= 2) {
        resultDisplay.style.backgroundColor = "#fff3cd";
        resultDisplay.style.color = "#856404";
        resultDisplay.innerHTML = `<strong>Good Reach 👍</strong><br><br>Engagement Rate: ${engagementRate.toFixed(2)}%<br>Total Engagements: ${totalEngagement}`;
    } else {
        resultDisplay.style.backgroundColor = "#f8d7da";
        resultDisplay.style.color = "#721c24";
        resultDisplay.innerHTML = `<strong>Needs Improvement 📉</strong><br><br>Engagement Rate: ${engagementRate.toFixed(2)}%<br>Total Engagements: ${totalEngagement}`;
    }
}
