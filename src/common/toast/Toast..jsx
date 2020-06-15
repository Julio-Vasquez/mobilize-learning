import { toast } from "react-toastify";
import PropTypes from "prop-types";

const config = { position: "bottom-right" };

const Toast = (sms, type) => {
  switch (type) {
    case "error":
      return toast.error(sms, config);
    case "sucess":
      return toast.sucess(sms, config);
    case "info":
      return toast.info(sms, config);
    case "warning":
      return toast.warning(sms, config);
    case "dark":
      return toast(sms, config);
    default:
      return toast(sms, config);
  }
};

Toast.propTypes = {
  sms: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Toast;
