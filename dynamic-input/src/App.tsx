import { useState } from "react";

function App() {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const data = [...formFields];
    data[index][event.target.name as keyof (typeof data)[0]] =
      event.target.value;
    setFormFields(data);
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    const object = {
      name: "",
      age: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index: number) => {
    const data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name="age"
                placeholder="Age"
                onChange={(event) => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
