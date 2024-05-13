/* eslint-disable react/prop-types */
import "../assets/css/buttonStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateButton({
  iconFamily,
  iconText,
  buttonName,
  linkTo,
  buttonType,
  nameCls,
}) {
  const buttonClasses = ["button-link"];
  if (nameCls) {
    buttonClasses.push(nameCls);
  }

  if (buttonType === "download") {
    return (
      <a href={linkTo} download className={buttonClasses.join(" ")}>
        <FontAwesomeIcon icon={[iconFamily, iconText]} /> {buttonName}
      </a>
    );
  } else {
    return (
      <a href={linkTo} className={buttonClasses.join(" ")}>
        <FontAwesomeIcon icon={[iconFamily, iconText]} /> {buttonName}
      </a>
    );
  }
}
