import axios from "axios";

export default async function fetchRequest(url) {
  console.log(url);
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWJkZDBjMzYwYTllNWIzYjlkMmI0MjFhYTk2MDNmMSIsIm5iZiI6MTcyNzg5NzM2Ny4zMjU4OTUsInN1YiI6IjY2ZjUyYTE4MmMzNjFlOTI1MWVkM2UzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rVaSSwgslwuKL8zdGVycjDPq9A8GVo2JKeSSqQS0f6g",
    },
  };
  const response = await axios.get(url, options);

  return response;
}
export const imageUrl = "https://image.tmdb.org/t/p/w500";
