import { createStore } from "redux";
import rootReduser from "./Redux/Reduser";

const Store = createStore(rootReduser);
export default Store;