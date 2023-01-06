import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Confirm({ title, message, next }) {
  return confirmAlert({
    title,
    message,

    buttons: [
      {
        label: "Yes",
        onClick: () => next(),
      },
      {
        label: "No",
      },
    ],
  });
}
