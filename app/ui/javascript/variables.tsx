import React from "react";

const examples = {
  string: `let myString = 'Hello World'`,
  number: `const myNumber = 30`,
  boolean: `let myBoolean = true`,
  object1: `const myObject = {name:'John', age:30}`,
  object2: `const myArray = [1,2,3,4,5]`,
};

const Variables = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <h1 className="text-2xl font-semibold underline mb-[2rem]">
        Variables and data types
      </h1>
      <article className="bg-primary-100 text-white p-[2rem] rounded-[1rem] dark:bg-primary-900 dark:text-black">
        <p>
          Variables are used to store data in a program. They are created using
          the <span className="text-blue-500 font-bold">let</span> keyword or
          <span className="text-blue-500 font-bold"> const</span> keyword when
          your value doesn't need to be changed.
        </p>
        <p>
          Data types are used to specify the type of data that a variable
          stores. There are several built-in data types in JavaScript, such as
          string, number, boolean, and object.
        </p>
        <p>
          Variables can be declared with different data types, and the data type
          of a variable can change dynamically.
        </p>
      </article>
      <article className="w-full mt-[2rem] flex items-start justify-between">
        <div className="w-[45%] bg-primary-100 text-white p-[2rem] rounded-[1rem] dark:bg-primary-900 dark:text-black">
          <p className="w-full my-[8px] text-sm">{examples.string}</p>
          <p className="w-full my-[8px] text-sm">{examples.number}</p>
          <p className="w-full my-[8px] text-sm">{examples.boolean}</p>
          <p className="w-full my-[8px] text-sm">{examples.object1}</p>
          <p className="w-full my-[8px] text-sm">{examples.object2}</p>
        </div>
        <div className="w-[45%] flex flex-col items-center">
          <p className="my-[8px]">
            Here we can appreciate some examples of data types and how declare
            them using let or const
          </p>
          <p className="my-[8px]">
            Strings can be declared using single quotes and double quotes '' or
            ""
          </p>
          <p className="my-[8px]">
            Numbers can be declared using integers or decimals
          </p>
        </div>
      </article>
      <article className="w-full mt-[2rem] flex items-start justify-between">
        <div className="w-[45%] flex flex-col items-center">
          <p className="my-[8px]">Booleans are declared using true or false</p>
          <p className="my-[8px]">
            Objects and Arrays are both object data type. An array can contain
            multiple objects
          </p>
        </div>
        <div className="w-[45%] bg-primary-100 text-white p-[2rem] rounded-[1rem] dark:bg-primary-900 dark:text-black">
          <p className="w-full my-[8px] text-sm">{examples.string}</p>
          <p className="w-full my-[8px] text-sm">{examples.number}</p>
          <p className="w-full my-[8px] text-sm">{examples.boolean}</p>
          <p className="w-full my-[8px] text-sm">{examples.object1}</p>
          <p className="w-full my-[8px] text-sm">{examples.object2}</p>
        </div>
      </article>
    </div>
  );
};

export default Variables;
