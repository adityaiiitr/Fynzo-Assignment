import React,{useContext} from 'react'
import FormDataContext from '../Context/FormDataContext'

const Display = () => {
    const { formData, setFormData } = useContext(FormDataContext);
    console.log(formData)



  return (
    <>
    <div className='text-white'>
    <p>★Email: {formData.Email}</p>
    <p>★Age: {formData.Age}</p>

    <p>★Gender: {formData.Gender}</p>
    <p>★Salary: {formData.Salary[0].choice_text}</p>
    <p>★Highest Education: {formData.Educational[0].choice_text}</p>

    <p>★Prefered Mode: {formData.prefered}</p>
    <p>★Skills: </p>
    {formData.Skills.map((item)=><p>&nbsp;→{item.choice_text}</p>)}
    <p>★Extras: </p>
    {formData.Extra.map((item)=><p>&nbsp;→{item.choice_text}</p>)}

    <img src="#" alt="Image Will Be Displayed Here" className="object-cover" />

</div>
    </>
  )
}

export default Display