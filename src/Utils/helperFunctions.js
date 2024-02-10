import toast from "react-hot-toast";

const capitalizeFirstLetter = (word) => {
  if (typeof word !== "string") return word;
  let firstletter = word.charAt(0);
  return `${firstletter.toUpperCase()}${word.slice(1)}`;
};

const errorAlert = (message) => {
  toast.error(message, {
    duration: 4000,
    position: "top-right",
    style: { backgroundColor: "#FFC7CE" },
  });
};

export { capitalizeFirstLetter, errorAlert };
