import api from "./config";

const charcerApi = {
  getAllCharacter() {
    return api.get(`character`).then((res) => res.data);
  },
  getcharacter({ id }) {
    return api.get(`character/${id}`).then((res) => res.data);
  },
  gerfiltercharac({ page = 1, status = "", gender = "", name, species = 1 }) {
    return api.get(
      `character?${page !== 1 ? `page=${page}` : ""}${
        status !== "" ? `&status=${status}` : ""
      } ${gender !== "" ? `&gender=${gender}` : ""}
      ${name !== "" ? `&name=${name}` : ""} ${
        species !== "" ? `&species=${species}` : ""
      }`
    );
  },
};
export default charcerApi;
