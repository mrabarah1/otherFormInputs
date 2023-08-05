import { useState } from "react";


const frameworks = ["react", "angular", "vue", "svelte"];

const App = () => {
  const [language, setLanguage] = useState(false);
  const [framework, setFramwork] = useState('react');
  
  const handleChange = (e) => {
    // console.log(e.target.checked);
    setLanguage(e.target.checked);
  }

  const handleFramework = (e) => {
    setFramwork(e.target.value)
  }
  
  

  return (
    <div>
      <form className="form">
        <h4>Form Controlled Input</h4>
        <div className="form-row">
          <label htmlFor="language" className="form-label">Javascript</label>
          <input 
          type="checkbox"
          name="language" 
          id="language"
          checked={language} 
          onChange={handleChange}/>
        </div>
        <div className="form-row">
          <label htmlFor="framework" className="form-label">Framework</label>
          <select 
          name="framework" 
          id="framework"
          value={framework}
          onChange={handleFramework}>
            {frameworks?.map((framework) => {
              return(
                <option key={framework}>{framework}</option>
              )
            })}
          </select>
        </div>
        <button className="btn">submit</button>
      </form>
    </div>
  );
}
export default App;
