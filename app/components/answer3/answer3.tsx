import './answer3.css';

export function Answer3() {
  return (
    <main >
      <div className="p-10 flex flex-col gap-5">
        <p>Question 3: Write the necessary React code for generating the below figure (using flex).</p>
        <img src="../../public/images/img_example.png" alt="question 3 image exemple" width={"444px"} height={"auto"}/>
        <p>Answer:</p>
        <p>Obs: I was using tailwind classes in other questions for brevity, <br /> for this question there's a .css file in the same folder as the Answer 3 component.</p>
        <div className='question3-container'>
          <div className='question3-header'>
            <p>Header</p>
          </div>
          <div className='question3-col-1'></div>
        </div>
        </div>
    </main>
  );
}
