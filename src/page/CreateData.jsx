import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const CreateData = () => {
  // UseState Variable
  const { popUp, loading, message, formData } = useContext(DataContext);
  // useState Function
  const { setFormData, setLoading, setPopUp } = useContext(DataContext);
  // Api Function
  const { handleSubmit } = useContext(DataContext);

  return (
    <>
    <div className="flex justify-center">
      <div className="w-5/6">

      <div className="text-xl sm:text-3xl text-center py-4 font-bold">SEND AN ANSWER WITH QUESTION</div>
        <form onSubmit={(e) => handleSubmit(e)} className="mb-20">
          <div className="flex flex-col ">
            <label className="text-xl sm:text-2xl my-4">Question:</label>
            <input type="text" placeholder="Enter the Question" className="input input-bordered" value={formData.question} onChange={(e) => setFormData({...formData, question: e.target.value})} />
          </div>

          <div className="flex flex-col">
            <label className="text-xl sm:text-2xl my-4">Language:</label>
            <select className="select select-bordered" value={formData.language} onChange={(e) => setFormData((prev) => ({...prev, language: e.target.value}))}>
              <option value={""}>Select Language</option>
              <option value={"python"}>Python</option>
              <option value={"sql"}>SQL</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label className="text-xl sm:text-2xl my-4">Code:</label>
            <textarea type="text" value={formData.code} onChange={(e) => setFormData({...formData, code:e.target.value})} placeholder="Enter the Code" className="h-96 textarea textarea-bordered" />
          </div>
         <button type="submit" onClick={() => setLoading(true)} className="btn mt-5">{loading ?  <span className="loading loading-spinner"></span> : null} {loading ? "Sending" : "Send"}</button>
        </form>
      </div>
    </div>
    {popUp ? <div className="flex justify-center items-center min-h-screen fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-600 shadow-xl">
        <div>
          <div role="alert" className="alert shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info h-6 w-6 shrink-0">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-bold">{message}</h3>
            </div>
            <button onClick={() => setPopUp(false)} className="btn btn-sm">Close</button>
          </div>
        </div>
      </div> : null
      }
    </>
  )
}

export default CreateData;