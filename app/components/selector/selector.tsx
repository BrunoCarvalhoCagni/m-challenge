

export function Selector() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col gap15">
        <p>Select the question:</p>
        <ul className="list-disc p-5">
          <li >
            <a href="/question1">Question 1</a>
          </li>
          <li >
            <a href="/question2">Question 2</a>
          </li>
        </ul>
        
      </div>
    </main>
  );
}
