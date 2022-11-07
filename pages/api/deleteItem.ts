import axios from "axios";

export default async function deleteItem(id: string) {
  try {
    const { data } = await axios.delete(`http://localhost:4000/tasks/${id}`);
    return {
      data: data,
      Response: true,
    };
  } catch (err) {
    console.log(err);
  }
}
