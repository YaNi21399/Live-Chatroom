import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err.message);
    error.value = error.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
