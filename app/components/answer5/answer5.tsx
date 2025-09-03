
export function Answer5() {
  return (
    <main >
      <div className="p-10 flex flex-col gap-5">
        <p>Question 5: A building has 100 floors. One of the floors is the highest floor an egg can be dropped <br />
          from without breaking. If an egg is dropped from above that floor, it will break. If it is <br />
          dropped from that floor or below, it will be completely undamaged and you can drop the <br />
          egg again. Given two eggs, find the highest floor an egg can be dropped from without <br />
          breaking, with as few drops as possible in the worst-case scenario.
        </p>
        <p>Answer:</p>
        <div className="flex items-center gap-5">
          <p>
            Thinking that we have a fixed number of 100 floors, we can use a linear system to solve this problem by choosing decreasing step sizes like <br />
            x, x-1, x-2, x-3 ... 1 <br />
            You can simplify this type of progression to {`[x(x+1)]/2 >= 100`} <br /> Solving this linear system you get the worst case scenario of 14. 
            
          </p>
        </div>
      </div>
    </main>
  );
}
