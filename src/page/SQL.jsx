import React from "react";
import { question_bank } from "../data/jsonData.js";

const SQL = () => {
    const filterQuestion = question_bank.filter((question) => question.language === "SQL");

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

          <h3 className="my-6 text-indigo-300 font-medium text-xl sm:text-4xl">How to Create and Delete DataBase</h3>
            <div className="sm:text-4xl mb-10 text-xl">Examples 1</div>

            <div className="mockup-code pr-4">
                <pre data-prefix="$" className="text-warning"><code>Creating DataBase</code></pre>
                <pre data-prefix=">"><code>CREATE DATABASE employees;</code></pre>
                <pre data-prefix=">"><code></code></pre>
                <pre data-prefix="$" className="text-warning"><code>Delete DataBase</code></pre>
                <pre data-prefix=">"><code>DROP DATABASE employees;</code></pre>
            </div>

          <h3 className="my-6 text-indigo-300 font-medium text-xl sm:text-4xl">How to Write a SQL Query:</h3>
            <div className="sm:text-4xl mb-10 text-xl">Examples 1</div>

            <div className="mockup-code pr-4">
                <pre data-prefix="$" className="text-warning"><code>Create a Table into DataBase</code></pre>
                <pre data-prefix=">"><code>CREATE TABLE employees (</code></pre>
                <pre data-prefix=">"><code>    id BIGSERIAL PRIMARY KEY,</code></pre>
                <pre data-prefix=">"><code>    name VARCHAR(100),</code></pre>
                <pre data-prefix=">"><code>    department VARCHAR(25),</code></pre>
                <pre data-prefix=">"><code>    salary DECIMAL(10, 2),</code></pre>
                <pre data-prefix=">"><code>    hire_data DATE</code></pre>
                <pre data-prefix=">"><code>);</code></pre>
            </div>
          

        </div>
      </div>
    )
}

export default SQL;