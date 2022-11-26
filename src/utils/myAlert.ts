/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";

export const myAlert = (obj: any) => {
  Swal.fire(obj);
};
