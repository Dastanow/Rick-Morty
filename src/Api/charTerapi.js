import api from "./config";

const charcerApi = {
  getAllCharacter() {
    return api.get(`character`).then((res) => res.data);
  },

  getcharacter({ id }) {
    return api.get(`character/${id}`).then((res) => res.data);
  },
  gerfiltercharac({ page = 1, status = "", gender = "", name, species }) {
    return api.get(
      `character?${page !== 1 ? `page=${page}` : ""}${
        status !== "" ? `&status=${status}` : ""
      } ${gender !== "" ? `&gender=${gender}` : ""} `
    );
  },
};
export default charcerApi;
