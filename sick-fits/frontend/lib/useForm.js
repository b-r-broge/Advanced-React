import { useState } from "react";

export default function useForm(initial = {}) {
  // create a state obj for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === "value") {
      let value = parseInt(value);
    }

    if (type === "file") {
      value[0] = e.target.files;
    }

    setInputs({
      ...inputs, // copy existing state
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = {};
    Object.keys(initial).forEach((key) => (blankState[key] = ""));
    setInputs(blankState);
  }

  // return things we want to show from this hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
