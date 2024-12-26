export default function Learn() {
  return (
    <section id="word-selection-tab" className="section-content">
      <h2>Word Selection</h2>
      <p id="five-words-message" className="message-line-warning">
        Please select at least 5 words to start learning.
      </p>
      <p id="number-of-words-selected-message">
        Words Selected: <span id="number-of-selected-words">0</span>
      </p>
      <div id="word-selection-wrapper">
        <aside id="word-selection-controls" className="scroll">
          <h3>Filter by Type</h3>
          <form id="filter-selection">
            <label htmlFor="filter-all" className="label">
              <input
                type="radio"
                id="filter-all"
                name="filterbywordtype"
                defaultValue="filter all"
              />
              <span className="radio" />
              Filter All
            </label>{" "}
            <br />
            <label htmlFor="filter-nouns" className="label">
              <input
                type="radio"
                id="filter-nouns"
                name="filterbywordtype"
                defaultValue="noun"
              />
              <span className="radio" />
              Nouns
            </label>{" "}
            <br />
            <label htmlFor="filter-pronouns" className="label">
              <input
                type="radio"
                id="filter-pronouns"
                name="filterbywordtype"
                defaultValue="pronoun"
              />
              <span className="radio" />
              Pronouns
            </label>{" "}
            <br />
            <label htmlFor="filter-verbs" className="label">
              <input
                type="radio"
                id="filter-verbs"
                name="filterbywordtype"
                defaultValue="verb"
              />
              <span className="radio" />
              Verbs
            </label>{" "}
            <br />
            <label htmlFor="filter-ichidan-verbs" className="label">
              <input
                type="radio"
                id="filter-ichidan-verbs"
                name="filterbywordtype"
                defaultValue="ichidan verb"
              />
              <span className="radio" />
              Ichidan Verbs
            </label>{" "}
            <br />
            <label htmlFor="filter-godan-verbs" className="label">
              <input
                type="radio"
                id="filter-godan-verbs"
                name="filterbywordtype"
                defaultValue="godan verb"
              />
              <span className="radio" />
              Godan Verbs
            </label>{" "}
            <br />
            <label htmlFor="filter-suru-verbs" className="label">
              <input
                type="radio"
                id="filter-suru-verbs"
                name="filterbywordtype"
                defaultValue="suru verb"
              />
              <span className="radio" />
              する Verbs
            </label>{" "}
            <br />
            <label htmlFor="filter-transitive-verbs" className="label">
              <input
                type="radio"
                id="filter-transitive-verbs"
                name="filterbywordtype"
                defaultValue="transitive"
              />
              <span className="radio" />
              Transitive Verbs
            </label>{" "}
            <br />
            <label htmlFor="filter-intransitive-verbs" className="label">
              <input
                type="radio"
                id="filter-intransitive-verbs"
                name="filterbywordtype"
                defaultValue="intransitive"
              />
              <span className="radio" />
              Intransitive Verbs
            </label>{" "}
            <br />
            <label htmlFor="filter-auxiliary-verbs" className="label">
              <input
                type="radio"
                id="filter-auxiliary-verbs"
                name="filterbywordtype"
                defaultValue="auxiliary verb"
              />
              <span className="radio" />
              Auxiliary Verbs
            </label>{" "}
            <br />
            <label htmlFor="filter-adjectives" className="label">
              <input
                type="radio"
                id="filter-adjectives"
                name="filterbywordtype"
                defaultValue="adjective"
              />
              <span className="radio" />
              Adjectives
            </label>{" "}
            <br />
            <label htmlFor="filter-i-adjectives" className="label">
              <input
                type="radio"
                id="filter-i-adjectives"
                name="filterbywordtype"
                defaultValue="i-adjective"
              />
              <span className="radio" />
              い-adjectives
            </label>{" "}
            <br />
            <label htmlFor="filter-na-adjectives" className="label">
              <input
                type="radio"
                id="filter-na-adjectives"
                name="filterbywordtype"
                defaultValue="na-adjective"
              />
              <span className="radio" />
              な-adjectives
            </label>{" "}
            <br />
            <label htmlFor="filter-auxiliary-adjectives" className="label">
              <input
                type="radio"
                id="filter-auxiliary-adjectives"
                name="filterbywordtype"
                defaultValue="auxiliary adjective"
              />
              <span className="radio" />
              Auxiliary Adjectives
            </label>{" "}
            <br />
            <label htmlFor="filter-adverbs" className="label">
              <input
                type="radio"
                id="filter-adverbs"
                name="filterbywordtype"
                defaultValue="adverb"
              />
              <span className="radio" />
              Adverbs
            </label>{" "}
            <br />
            <label htmlFor="filter-conjunctions" className="label">
              <input
                type="radio"
                id="filter-conjunctions"
                name="filterbywordtype"
                defaultValue="conjunction"
              />
              <span className="radio" />
              Conjunctions
            </label>{" "}
            <br />
            <label htmlFor="filter-expressions" className="label">
              <input
                type="radio"
                id="filter-expressions"
                name="filterbywordtype"
                defaultValue="expression"
              />
              <span className="radio" />
              Expressions
            </label>{" "}
            <br />
            <label htmlFor="filter-interjections" className="label">
              <input
                type="radio"
                id="filter-interjections"
                name="filterbywordtype"
                defaultValue="interjection"
              />
              <span className="radio" />
              Interjection
            </label>{" "}
            <br />
            <label htmlFor="filter-copulas" className="label">
              <input
                type="radio"
                id="filter-copulas"
                name="filterbywordtype"
                defaultValue="copula"
              />
              <span className="radio" />
              Copulas
            </label>{" "}
            <br />
            <label htmlFor="filter-particles" className="label">
              <input
                type="radio"
                id="filter-particles"
                name="filterbywordtype"
                defaultValue="particle"
              />
              <span className="radio" />
              Particles
            </label>{" "}
            <br />
            <label htmlFor="filter-counters" className="label">
              <input
                type="radio"
                id="filter-counters"
                name="filterbywordtype"
                defaultValue="counter"
              />
              <span className="radio" />
              Counters
            </label>{" "}
            <br />
            <label htmlFor="filter-prefixes" className="label">
              <input
                type="radio"
                id="filter-prefixes"
                name="filterbywordtype"
                defaultValue="prefix"
              />
              <span className="radio" />
              Prefixes
            </label>{" "}
            <br />
            <label htmlFor="filter-suffixes" className="label">
              <input
                type="radio"
                id="filter-suffixes"
                name="filterbywordtype"
                defaultValue="suffix"
              />
              <span className="radio" />
              Suffixes
            </label>{" "}
            <br />
          </form>
          {/* <div id="filter-by-kana">
              <h3>Filter by かな</h3>
              <button id="filter-a-btn" class="kana-btn">あ</button> 
              <button id="filter-ka-btn" class="kana-btn">か</button> 
              <button id="filter-sa-btn" class="kana-btn">さ</button> 
              <button id="filter-ta-btn" class="kana-btn">た</button>
              <button id="filter-na-btn" class="kana-btn">な</button> 
              <button id="filter-ha-btn" class="kana-btn">は</button> 
              <button id="filter-ma-btn" class="kana-btn">ま</button> 
              <button id="filter-ya-btn" class="kana-btn">や</button> 
              <button id="filter-ra-btn" class="kana-btn">ら</button> 
              <button id="filter-wa-btn" class="kana-btn">わ</button> 
              <button id="filter-n-btn" class="kana-btn">ん</button>
          </div> */}
          <h3>Select by Type</h3>
          <div id="type-message" />
          <form id="type-selection">
            <label htmlFor="select-all" className="label">
              <input
                type="checkbox"
                id="select-all"
                name="selectbywordtype"
                defaultValue="Select All"
              />
              <span className="checkmark" />
              Select All
            </label>{" "}
            <br />
            <label htmlFor="select-nouns" className="label">
              <input
                type="checkbox"
                id="select-nouns"
                name="selectbywordtype"
                defaultValue="noun"
              />
              <span className="checkmark" />
              Nouns
            </label>{" "}
            <br />
            <label htmlFor="select-pronouns" className="label">
              <input
                type="checkbox"
                id="select-pronouns"
                name="selectbywordtype"
                defaultValue="pronoun"
              />
              <span className="checkmark" />
              Pronouns
            </label>{" "}
            <br />
            <label htmlFor="select-verbs" className="label">
              <input
                type="checkbox"
                id="select-verbs"
                name="selectbywordtype"
                defaultValue="verb"
              />
              <span className="checkmark" />
              Verbs
            </label>{" "}
            <br />
            <label htmlFor="select-ichidan-verbs" className="label">
              <input
                type="checkbox"
                id="select-ichidan-verbs"
                name="selectbywordtype"
                defaultValue="ichidan verb"
              />
              <span className="checkmark" />
              Ichidan Verbs
            </label>{" "}
            <br />
            <label htmlFor="select-godan-verbs" className="label">
              <input
                type="checkbox"
                id="select-godan-verbs"
                name="selectbywordtype"
                defaultValue="godan verb"
              />
              <span className="checkmark" />
              Godan Verbs
            </label>{" "}
            <br />
            <label htmlFor="select-suru-verbs" className="label">
              <input
                type="checkbox"
                id="select-suru-verbs"
                name="selectbywordtype"
                defaultValue="suru verb"
              />
              <span className="checkmark" />
              する Verbs
            </label>{" "}
            <br />
            <label htmlFor="select-transitive-verbs" className="label">
              <input
                type="checkbox"
                id="select-transitive-verbs"
                name="selectbywordtype"
                defaultValue="transitive"
              />
              <span className="checkmark" />
              Transitive Verbs
            </label>{" "}
            <br />
            <label htmlFor="select-intransitive-verbs" className="label">
              <input
                type="checkbox"
                id="select-intransitive-verbs"
                name="selectbywordtype"
                defaultValue="intransitive"
              />
              <span className="checkmark" />
              Intransitive Verbs
            </label>{" "}
            <br />
            <label htmlFor="select-auxiliary-verbs" className="label">
              <input
                type="checkbox"
                id="select-auxiliary-verbs"
                name="selectbywordtype"
                defaultValue="auxiliary verb"
              />
              <span className="checkmark" />
              Auxiliary Verbs
            </label>{" "}
            <br />
            <label htmlFor="select-adjectives" className="label">
              <input
                type="checkbox"
                id="select-adjectives"
                name="selectbywordtype"
                defaultValue="adjective"
              />
              <span className="checkmark" />
              Adjectives
            </label>{" "}
            <br />
            <label htmlFor="select-i-adjectives" className="label">
              <input
                type="checkbox"
                id="select-i-adjectives"
                name="selectbywordtype"
                defaultValue="i-adjective"
              />
              <span className="checkmark" />
              い-adjectives
            </label>{" "}
            <br />
            <label htmlFor="select-na-adjectives" className="label">
              <input
                type="checkbox"
                id="select-na-adjectives"
                name="selectbywordtype"
                defaultValue="na-adjective"
              />
              <span className="checkmark" />
              な-adjectives
            </label>{" "}
            <br />
            <label htmlFor="select-auxiliary-adjectives" className="label">
              <input
                type="checkbox"
                id="select-auxiliary-adjectives"
                name="selectbywordtype"
                defaultValue="auxiliary adjective"
              />
              <span className="checkmark" />
              Auxiliary Adjectives
            </label>{" "}
            <br />
            <label htmlFor="select-adverbs" className="label">
              <input
                type="checkbox"
                id="select-adverbs"
                name="selectbywordtype"
                defaultValue="adverb"
              />
              <span className="checkmark" />
              Adverbs
            </label>{" "}
            <br />
            <label htmlFor="select-conjunctions" className="label">
              <input
                type="checkbox"
                id="select-conjunctions"
                name="selectbywordtype"
                defaultValue="conjunction"
              />
              <span className="checkmark" />
              Conjunctions
            </label>{" "}
            <br />
            <label htmlFor="select-expressions" className="label">
              <input
                type="checkbox"
                id="select-expressions"
                name="selectbywordtype"
                defaultValue="expression"
              />
              <span className="checkmark" />
              Expressions
            </label>{" "}
            <br />
            <label htmlFor="select-interjections" className="label">
              <input
                type="checkbox"
                id="select-interjections"
                name="selectbywordtype"
                defaultValue="interjection"
              />
              <span className="checkmark" />
              Interjection
            </label>{" "}
            <br />
            <label htmlFor="select-copulas" className="label">
              <input
                type="checkbox"
                id="select-copulas"
                name="selectbywordtype"
                defaultValue="copula"
              />
              <span className="checkmark" />
              Copulas
            </label>{" "}
            <br />
            <label htmlFor="select-particles" className="label">
              <input
                type="checkbox"
                id="select-particles"
                name="selectbywordtype"
                defaultValue="particle"
              />
              <span className="checkmark" />
              Particles
            </label>{" "}
            <br />
            <label htmlFor="select-counters" className="label">
              <input
                type="checkbox"
                id="select-counters"
                name="selectbywordtype"
                defaultValue="counter"
              />
              <span className="checkmark" />
              Counters
            </label>{" "}
            <br />
            <label htmlFor="select-prefixes" className="label">
              <input
                type="checkbox"
                id="select-prefixes"
                name="selectbywordtype"
                defaultValue="prefix"
              />
              <span className="checkmark" />
              Prefixes
            </label>{" "}
            <br />
            <label htmlFor="select-suffixes" className="label">
              <input
                type="checkbox"
                id="select-suffixes"
                name="selectbywordtype"
                defaultValue="suffix"
              />
              <span className="checkmark" />
              Suffixes
            </label>{" "}
            <br />
          </form>
          <br />
          <input
            type="reset"
            defaultValue="Clear All"
            id="wordselection-reset"
            className="button"
          />
        </aside>
        <div id="word-selection-grid" className="scroll">
          <form id="word-selection">
            <p className="message-line-warning">
              There are no words to select! Please select a word list.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
