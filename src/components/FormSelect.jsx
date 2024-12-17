/* eslint-disable react/prop-types */
const FormSelect = ({ label, list, defaultValue, name, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((listItem) => {
          return (
            <option key={listItem} value={listItem}>
              {listItem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
