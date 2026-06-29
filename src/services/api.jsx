const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const AUTH = btoa("coalition:skills-test");

export const fetchPatients = async () => {
  const response = await fetch(API_URL, {
    headers: { Authorization: `Basic ${AUTH}` },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch patients (${response.status})`);
  }

  return response.json();
};