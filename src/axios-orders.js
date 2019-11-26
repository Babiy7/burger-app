import Axios from "axios";

const InstanceOrders = Axios.create({
  baseURL: "https://burger-builder-cb7b6.firebaseio.com/"
});

export default InstanceOrders;
