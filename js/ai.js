function generateAIPlan() {

    const destination =
        document.getElementById("destination").innerText;

    const budget =
        document.getElementById("budget").innerText;

    const aiResult =
        document.getElementById("aiResult");


    const prompt = `
You are an expert India travel planner.

Create a detailed travel plan for ${destination}.

Include:

1. Trip Summary
- Location
- About the destination
- Why it is famous

2. Best Time To Visit

3. Day Wise Itinerary
- Day 1
- Day 2
- Day 3

4. Famous Tourist Places

5. Famous Local Food
- Veg food options
- Famous dishes

6. Veg Restaurants

7. Hotels Recommendation
- Budget hotels
- Premium hotels

8. Cafes and Restaurants

9. Shopping Places

10. Estimated Budget Breakdown in INR:
- Travel Cost
- Hotel Cost
- Food Cost
- Local Transport
- Entry Tickets
- Total Estimated Cost

11. Travel Tips


Destination:
${destination}

Budget:
${budget}
`;


    aiResult.innerHTML = `
        <h3>AI Generated Travel Guide</h3>

        <p><b>Destination:</b> ${destination}</p>

        <p>
        ${prompt}
        </p>
    `;
}