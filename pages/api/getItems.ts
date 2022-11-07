import axios from "axios";

export default async function getItems() {
  try {
    const { data } = await axios.get("http://localhost:4000/tasks");
    return {
      data: data,
      Response: true,
    };
  } catch (err) {
    console.log(err);
  }
}
