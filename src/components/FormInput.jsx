/* eslint-disable react/prop-types */

const FormInput = ({label,name,type,defaultValue,size}) => {
  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text capitalize">{label}</span>
        </label>
        <input type={type} defaultValue={defaultValue} name={name} className={`input input-bordered ${size}`} />
    </div>
  )
}

export default FormInput