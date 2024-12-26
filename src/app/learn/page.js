export default function Learn() {
  return (
    <section id="learn-tab" className="section-content">
      <h2>Learn</h2>
      <p>Type the answer into the textbox below.</p>
      <p>
        Look at the label to know if you need to type the Japanese reading (kana
        or romaji) or English meaning. If the word is already in kana, answer it
        with the same kana, otherwise use romaji.
      </p>
      <p>Answers automatically validate. (Otherwise, press enter!)</p>
      <p className="message-line-warning long-message-line">
        There are currently a few glitches when using かな (kana) that are
        currently in the process of being fixed: 1.) when typing in kana,
        answers validate before you're done typing and come out wrong
        –&nbsp;keep typing anyway; 2.) sometimes the word stops validating
        altogether in kana when doing the readings. In this case, just switch
        over to romaji to keep moving forward.
      </p>
      <p id="select-five-message" className="message-line-warning" />
      <div id="typing-quiz">
        <label htmlFor="extra-info" className="label">
          <input
            type="checkbox"
            id="extra-info"
            name="extra-info"
            defaultValue="Extra Info"
          />
          <span className="checkmark" />
          Extra Info
        </label>
        <div className="quiz-card">
          <div id="typing-test-area">
            {/* Test Type = indicates if you need to type the romaji OR the English meaning */}
            <p id="test-type" className="" />
            {/* Vocab Word = displays vocabulary word */}
            <p id="vocab-word" />
            <form className="">
              {/* Vocab Word Answer Incorrect = displays correct answer if answered incorrectly */}
              <p id="answer-feedback" />
              {/* Answer Input */}
              <label htmlFor="answer" className="clipping">
                Answer:
              </label>
              <input
                type="text"
                id="answer"
                name="answer"
                placeholder="Type Answer Here..."
                autoComplete="off"
              />
              <br />
              <button id="check" className="button clipping">
                Check
              </button>
            </form>
            <p id="answer-hover" className="font-light" />
            <div id="information" />
          </div>
        </div>
      </div>
      {/* Information = some really brief info that would be helpful to someone at a glance, like it being a noun, verb with a certain ending, etc.*/}
      {/* Context = provides context for words in hiragana & katakana so the correct English meanings can be inferred */}
      <div id="context" />
    </section>
  );
}
