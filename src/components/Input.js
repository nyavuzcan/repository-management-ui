import React from 'react'

export default function Input(props) {

    const {label,type,name,className,onChange} = props
    
    return (
                 <div className="form-group">
                    <label>{label}</label>
                    <input type={type} className={className} name={name} onChange={onChange}/>
                </div>    
    )
}
