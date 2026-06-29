const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const fetchPatients = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: "Basic " + btoa("coalition:skills-test"),
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch patients data (${response.status})`);
    }

    return await response.json();
  } catch (error) {
    console.error("fetchPatients error: ", error);
    throw new Error("Unable to load patient data. Please try again later.");
  }
};
