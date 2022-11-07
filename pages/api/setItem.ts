import axios from "axios";

export default async function setItem(title: string) {
  try {
    const { data } = await axios.post("http://localhost:4000/tasks", {title: title},
    );
    return {
      data: data,
      Response: true,
    };
  } catch (err) {
    console.log(err);
  }
}


