import {useEffect, useState} from 'react'
import Type1 from '../Components/Type1'
import Type2 from '../Components/Type2'
import Type3 from '../Components/Type3'
import Type4 from '../Components/Type4'
import Type5 from '../Components/Type5'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import Display from '../Components/Display'

import FormDataContext from '../Context/FormDataContext';


const FormPage = () => {
  const [questNum,setQuestNum] = useState(90)
  const [formData, setFormData] = useState({}); // State to store form data

  useEffect(()=>{
    console.log(formData)
    if(formData?.Gender === 'Male') 
    setQuestNum(100)
  },[formData])

  const Data = {
    "setting": {
      "title": "Intern Application Form",
      "favicon": ""
    },
    "questions": [
      {
        "id": 90,
        "question_text": "Your Email ?",
        "question_type": 4,
        "required": 1
      },
      {
        "id": 91,
        "question_text": "Your Age ?",
        "question_type": 4,
        "required": 0
      },
      {
        "id": 92,
        "question_text": "Your Gender ?",
        "question_type": 1,
        "required": 1,
        "choices": [
          {
            "id": 777,
            "choice_text": "Male"
          },
          {
            "id": 778,
            "choice_text": "Female"
          },
          {
            "id": 779,
            "choice_text": "Other"
          }
        ]
      },
      {
        "id": 93,
        "question_text": "Your prefered job location ?",
        "question_type": 1,
        "required": 0,
        "choices": [
          {
            "id": 780,
            "choice_text": "Work from home"
          },
          {
            "id": 781,
            "choice_text": "Work in office"
          },
          {
            "id": 782,
            "choice_text": "work in hybrid way"
          }
        ]
      },
      {
        "id": 94,
        "question_text": "Your Salary Expectation (CTC in rupees)?",
        "question_type": 2,
        "required": 1,
        "choices": [
          {
            "id": 783,
            "choice_text": "2-3 lakh"
          },
          {
            "id": 784,
            "choice_text": "4-5 lakh"
          },
          {
            "id": 785,
            "choice_text": "5-6 lakh"
          },
          {
            "id": 786,
            "choice_text": "6-7 lakh"
          }
        ]
      },
      {
        "id": 95,
        "question_text": "Your Educational Qualification ?",
        "question_type": 2,
        "required": 0,
        "choices": [
          {
            "id": 787,
            "choice_text": "Illiterate"
          },
          {
            "id": 788,
            "choice_text": "Below 10th standard"
          },
          {
            "id": 789,
            "choice_text": "10th passed"
          },
          {
            "id": 790,
            "choice_text": "12th passed"
          },
          {
            "id": 791,
            "choice_text": "Undergraduate"
          },
          {
            "id": 792,
            "choice_text": "Postgraduate"
          }
        ]
      },
      {
        "id": 96,
        "question_text": "Your Skills",
        "question_type": 3,
        "required": 1,
        "choices": [
          {
            "id": 793,
            "choice_text": "Node.js"
          },
          {
            "id": 794,
            "choice_text": "ReactJS"
          },
          {
            "id": 795,
            "choice_text": "Mongodb"
          },
          {
            "id": 796,
            "choice_text": "Express"
          }
        ]
      },
      {
        "id": 97,
        "question_text": "Your Extra Activities",
        "question_type": 3,
        "required": 0,
        "choices": [
          {
            "id": 797,
            "choice_text": "Cricket"
          },
          {
            "id": 798,
            "choice_text": "Football"
          },
          {
            "id": 799,
            "choice_text": "Tenis"
          },
          {
            "id": 800,
            "choice_text": "Badminton"
          }
        ]
      },
      {
        "id": 98,
        "question_text": "Your Photo",
        "question_type": 5,
        "required": 1
      },
      {
        "id": 99,
        "question_text": "Your CV in pdf",
        "question_type": 5,
        "required": 0
      }
    ]
  }


  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
    <div className='h-screen'>
      <div className='bg-black bg-opacity-30 p-4 text-white text-center'>
        <h1 className="text-3xl font-bold underline ">{Data.setting.title}</h1>
      </div>
      <br/> 
      <div className='flex items-center justify-center mt-24 h-1/2'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black bg-opacity-30 p-4">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{questNum<100 ? Data.questions[questNum-90].question_text: "Submitted Data"}</div>
        {questNum<100 && Data.questions[questNum-90].question_type===1 && <Type1 Data={Data.questions[questNum-90]}/>}
        {questNum<100 && Data.questions[questNum-90].question_type===2 && <Type2 Data={Data.questions[questNum-90]}/>}
        {questNum<100 && Data.questions[questNum-90].question_type===3 && <Type3 Data={Data.questions[questNum-90]}/>}
        {questNum<100 && Data.questions[questNum-90].question_type===4 && <Type4 Data={Data.questions[questNum-90]}/>}
        {questNum<100 && Data.questions[questNum-90].question_type===5 && <Type5 Data={Data.questions[questNum-90]}/>}
        {questNum>=100 && <Display/>}
        </div>    
        
      </div>
      
      
    </div>
    <div class="flex flex-row-reverse m-4 space-x-3 space-x-reverse md:mt-6">
    {questNum<=99 && <button onClick={()=>{formData.validation===questNum? setQuestNum(questNum):setQuestNum(questNum+1)}} type="button" class="bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium rounded-lg text-sm  px-8 py-8"><AiOutlineArrowRight/></button>}
        {questNum>=91 && <button onClick={()=>{ setQuestNum(questNum-1)}} type="button" class="bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium rounded-lg text-sm px-8 py-8"><AiOutlineArrowLeft/></button>}
        {/* if() */}
    {/* setQuestNum(formData.validation) */}
       
        </div>
  
    </div>

    </FormDataContext.Provider>
  )
}

export default FormPage