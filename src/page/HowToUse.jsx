import DEMO from '../data/demo.mp4';

const HowToUse = () => {
  return (
    <section className="min-h-screen flex flex-col items-center text-white">
      <div className="w-5/6 my-20">
      <h1 className="font-semibold text-xl transition-all duration-500 sm:text-3xl">How To Use ?</h1>
      <p className="mt-3 sm:text-base text-sm">There is the small video which give you a quick understand how you can use this app by sending the code and question to store in our app.</p>
      <video className="grow my-10" controls>
        <source src={DEMO} type="video/mp4" />
      </video>
      <p className="mb-10">You Can Run Your Program As You Have Run in Your Computer. This is Complete Refrence How You Can Submit Your Code in this App.</p>
      </div>
    </section>
  )
}

export default HowToUse;