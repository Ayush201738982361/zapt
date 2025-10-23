function SampleQuestion() {
  const checkAnswer = () => {
    const correctAns = document.getElementById("opt3");
    const correctLabel = document.getElementById("correctLabel");
    if (correctAns.checked) {
      correctLabel.style.color = "green";
    }
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-black text-center mt-40 mb-10 px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Here are a few challenges to get your feet wet
        </h1>
      </section>

      <div className="flex flex-col items-center justify-center">
        <p className="mb-5 text-center text-lg max-w-xl">
          A sum of money at simple interest amounts to Rs. 815 in 3 years and to
          Rs. 854 in 4 years. The sum is:
        </p>

        <div className="flex flex-col gap-3 mb-5">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              id="opt1"
              name="radio-2"
              className="radio radio-sm"
            />
            Rs. 650
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              id="opt2"
              name="radio-2"
              className="radio radio-sm"
            />
            Rs. 690
          </label>

          <label id="correctLabel" className="flex items-center gap-2">
            <input
              onClick={checkAnswer}
              type="radio"
              id="opt3"
              name="radio-2"
              className="radio radio-sm"
            />
            Rs. 698
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              id="opt4"
              name="radio-2"
              className="radio radio-sm"
            />
            Rs. 700
          </label>
        </div>
      </div>
    </>
  );
}

export default SampleQuestion;
