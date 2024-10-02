import axios from "axios";

export async function fetchRequest(url) {
  console.log(url);
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWJkZDBjMzYwYTllNWIzYjlkMmI0MjFhYTk2MDNmMSIsIm5iZiI6MTcyNzg2OTM5MC4wNzY2MzEsInN1YiI6IjY2ZjUyYTE4MmMzNjFlOTI1MWVkM2UzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jayZVHgsnSyBMYpgFkVlae_8L0BK3ml3daazr-XxZ_Y",
    },
  };
  const response = await axios.get(url, options);

  return response;
}
export const imageUrl = "https://image.tmdb.org/t/p/w500";
