import React from "react";
import Example from "./Example.jsx";
import { question_bank } from '../data/jsonData.js';

const PythonQuestion = () => {
  
  const filterQuestion = question_bank.filter((question) => question.language === "Python");

  return (
    <div className="flex flex-col justify-center items-center mt-6 text-white pb-10">    

    <div className="w-5/6">
      <div className="flex flex-col gap-6 mt-5">
      {
        filterQuestion.map((data, i) => {
          return (
              <details key={i} tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
              <summary className="collapse-title text-xl text-indigo-300 font-medium">{data.title}</summary>
              <div className="collapse-content px-10">
              <ul className="select-none my-3 list-decimal marker:text-indigo-400 pl-3 space-y-3">
                    {
                      data.question.map((item, i) => {
                        return (
                          <li key={i}>{item}</li>
                        )
                      }) 
                    }
                  </ul>
              </div>
            </details>
          )
        })
      }
        </div>
            <Example />
      </div>
    </div>
  )
}

export default PythonQuestion;