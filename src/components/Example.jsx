import React from "react";

const Example = () => {
  return (
    <>
    <div className="select-none my-10">
      
    <h3 className="text-indigo-300 font-medium text-xl sm:text-4xl">Python Function:</h3>
    <div className="sm:text-4xl mb-10 text-xl">Examples 1</div>

      <div className="mockup-code pr-4">
        <pre data-prefix="$"><code>Add new element into the list please type this and run  </code></pre>
        <pre data-prefix=">"><code>arr = [1, 2, 3, 4, 5, 6]</code></pre>
        <pre data-prefix=">"><code>element = 7</code></pre>
        <pre data-prefix=">"><code>def add_element(arr, element):</code></pre>
        <pre data-prefix=">"><code>    arr.append(element)</code></pre>
        <pre data-prefix=">"><code>print(arr)</code></pre>
        <pre data-prefix=">" className="text-success"><code>output: [1,2,3,4,5,6,7]</code></pre>
      </div>
    </div>

    <div className="select-none">
    <h3 className="select-none text-white text-xl sm:text-4xl my-10">Examples 2</h3>
    
    <div className="mockup-code pr-4">
        <pre data-prefix="$"><code>Function without argument  </code></pre>
        <pre data-prefix=">"><code>def greet():</code></pre>
        <pre data-prefix=">"><code>    print("Good Morning")</code></pre>
        <pre data-prefix=">"><code>greet()</code></pre>
        <pre data-prefix=">" className="text-success"><code>output: Good Morning</code></pre>
      </div>
    </div>
    
    <div className="select-none">
    <h3 className="select-none text-white text-xl sm:text-4xl my-10">Examples 3</h3>
    <div className="mockup-code pr-4">
        <pre data-prefix="$"><code>how to create a function?</code></pre>

        <pre data-prefix="1" className="text-success"><code>Step 1: use def keyword and give a name of the function</code></pre>

        <pre data-prefix=">"><code>def greet():</code></pre>

        <pre data-prefix="#" className="text-error"><code>Warning: After the def keyword with name of a function a line should be indentate other wise the function declartion may have a problem    </code></pre>

        <pre data-prefix="2" className="text-success"><code>Step 2: write your code as you write for your program</code></pre>

        <pre data-prefix=">"><code>     print("Good Morning")</code></pre>

        <pre data-prefix="3" className="text-success"><code>Step 3: After finishing your code. You have to call the function with his name</code></pre>

        <pre data-prefix=">"><code>greet()</code></pre>

        <pre data-prefix="#" className="text-error"><code>Warning: The function name should not be indentate as a function otherwise it may cause an error.</code></pre>

        <pre data-prefix=">" className="text-warning"><code>output: Good Morning</code></pre>
      </div>
    </div>

    <div>
    <h1 className="my-10 text-xl md:text-4xl">Function without Argument</h1>
    <p className="mb-5">There is a some example to know about how you can declare and calling a function.<br /><span className="text-warning">Function Declaration</span>, In the below line you will declare the function. Using the def keyword and name of the function after the semicolon and the indentation. You will write the same as you write code. <br />
    <span className="text-warning">Function Calling</span>, In the below line you will calling the function using its name.
    </p>
    <div className="diff h-72">
    <div className="diff-item-1">
      <div className="text-primary-content grid">
        <div className="mockup-code pr-4">
          <pre data-prefix="$"><code>Without Function  </code></pre>
          <pre data-prefix=">"><code>print("Good Morning")</code></pre>
          <pre data-prefix=">" className="text-success"><code>output: Good Morning</code></pre>
        </div>
      </div>
    </div>
    <div className="diff-item-2">
      <div className="grid">
      <div className="mockup-code pr-4">
          <pre data-prefix="$"><code>With Function</code></pre>
          <pre data-prefix=">" className="text-warning"><code># Function Declaration</code></pre>
          <pre data-prefix=">"><code>def greet():</code></pre>
          <pre data-prefix=">"><code>    print("Good Morning")</code></pre>
          <pre data-prefix=">"><code></code></pre>
          <pre data-prefix=">" className="text-warning"><code># Function Calling</code></pre>
          <pre data-prefix=">"><code>greet()</code></pre>
          <pre data-prefix=">" className="text-success"><code>output: Good Morning</code></pre>
        </div>
      </div>
    </div>
    <div className="diff-resizer"></div>
    </div>
  </div>

      <div>
        
      <h1 className="my-10 text-xl md:text-4xl">Function with Argument</h1>
      <div className="diff h-80">
      <div className="diff-item-1">
        <div className="text-primary-content grid">
          <div className="mockup-code pr-4">
            <pre data-prefix="$"><code>Without Function and Argument</code></pre>
            <pre data-prefix=">"><code>num1 = 2</code></pre>
            <pre data-prefix=">"><code>num2 = 3</code></pre>
            <pre data-prefix=">"><code>result = num1 + num2</code></pre>
            <pre data-prefix=">"><code>print("Addition", result)</code></pre>
            <pre data-prefix=">" className="text-success"><code>output: Addition: 5</code></pre>
          </div>
        </div>
      </div>
      <div className="diff-item-2">
        <div className="grid">
        <div className="mockup-code pr-4">
            <pre data-prefix="$"><code>With Function and Argument</code></pre>
            <pre data-prefix=">"><code>num1 = 2</code></pre>
            <pre data-prefix=">"><code>num2 = 3</code></pre>
            <pre data-prefix=">" className="text-warning"><code># Function Declaration</code></pre>
            <pre data-prefix=">"><code>def add_num(a, b):</code></pre>
            <pre data-prefix=">"><code>    result = a + b</code></pre>
            <pre data-prefix=">"><code>    print("Addition:",result)</code></pre>
            <pre data-prefix=">" className="text-warning"><code># Function Calling</code></pre>
            <pre data-prefix=">"><code>add_num(num1, num2)</code></pre>
            <pre data-prefix=">" className="text-success"><code>output: Addition: 5</code></pre>
          </div>
        </div>
      </div>
      <div className="diff-resizer"></div>
      </div>
    </div>

      <div>
      <h1 className="my-10 text-xl md:text-4xl">Function with Argument And Return Statement</h1>
      <div className="diff h-80">
      <div className="diff-item-1">
        <div className="text-primary-content grid">
          <div className="mockup-code pr-4">
            <pre data-prefix="$"><code>Without Function with Argument And Return Statement</code></pre>
            <pre data-prefix=">"><code>num1 = 2</code></pre>
            <pre data-prefix=">"><code>num2 = 3</code></pre>
            <pre data-prefix=">"><code>result = num1 + num2</code></pre>
            <pre data-prefix=">"><code>print("Addition", result)</code></pre>
            <pre data-prefix=">" className="text-success"><code>output: Addition: 5</code></pre>
          </div>
        </div>
      </div>
      <div className="diff-item-2">
        <div className="grid">
        <div className="mockup-code pr-4">
            <pre data-prefix="$"><code>With Function with Argument And Return Statement</code></pre>
            <pre data-prefix=">"><code>num1 = 2</code></pre>
            <pre data-prefix=">"><code>num2 = 3</code></pre>
            <pre data-prefix=">" className="text-warning"><code># Function Declaration</code></pre>
            <pre data-prefix=">"><code>def add_num(a, b):</code></pre>
            <pre data-prefix=">"><code>    result = a + b</code></pre>
            <pre data-prefix=">"><code>    return result</code></pre>
            <pre data-prefix=">" className="text-warning"><code># Function Calling</code></pre>
            <pre data-prefix=">"><code>add_result = add_num(num1, num2)</code></pre>
            <pre data-prefix=">"><code>print(add_result)</code></pre>
            <pre data-prefix=">" className="text-success"><code>output: Addition: 5</code></pre>
          </div>
        </div>
      </div>
      <div className="diff-resizer"></div>
      </div>
    </div> 
    </>
  )
}

export default Example;