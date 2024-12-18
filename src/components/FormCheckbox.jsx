/* eslint-disable react/prop-types */
const FormCheckbox = ({ name, defaultValue, size, label }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input name={name} type="checkbox" defaultChecked={defaultValue} className={`checkbox checkbox-primary ${size}`} />
    </div>
  );
};

export default FormCheckbox;
