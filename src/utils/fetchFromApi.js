import axios from "axios";

const BaseUrl = "https://youtube-v31.p.rapidapi.com";

export const fetchFromApi = async (url) => {
  try {
    const response = await axios.get(`${BaseUrl}/${url}`, {
      params: {
        maxResults: "50",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
