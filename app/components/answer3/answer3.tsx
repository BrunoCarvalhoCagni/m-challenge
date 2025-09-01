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
          <div className='question3-row'>
            <div className='question3-col first'>
              <div className='question3-hero'>
                <p>Hero</p>
              </div>
              <div className='question3-sidebar'>
                <p>Sidebar</p>
              </div>
            </div>
            <div className='question3-col second'>
              <div className='question3-main-content'>
                <p>Main Content</p>
                <p className='small'>**If things do not look right make sure your browser <br />is in "Experimental Mode"</p>
              </div>
              <div className='question3-extra-content'>
                <p>Extra Content</p>
              </div>
            </div>
          </div>
          <div className='question3-row'>
            <div className='question3-related-images'>
              Related Images
            </div>
            <div className='question3-related-posts'>
              Related Posts
            </div>
          </div>
          <div className='question3-footer'>
            <p>Footer</p>
          </div>
        </div>
        </div>
    </main>
  );
}
