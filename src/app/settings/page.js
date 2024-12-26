export default function Settings() {
  return (
    <section id="settings-tab" className="section-content">
      <h2>Word List &amp; Settings</h2>
      <div id="settings-display">
        <div id="checkbox-settings">
          <div id="wordlist-selection">
            <form id="wordlist-options">
              <h3>Word List</h3>
              {/* <p>Select the category you would like to learn.</p>
                          <input type="radio" id="category-vocabulary" name="learning-cateogry" value="Vocabulary">
                          <label for="category-vocabulary">Vocabulary</label> */}
              {/* 
                          <input type="radio" id="category-kanji-radicals" name="learning-cateogry" value="Kanji Radicals" data-url="kanji-radicals.json">
                          <label for="category-kanji-radicals">Kanji Radicals</label> */}
              <p>Select a list to study.</p>
              <label htmlFor="tk-list-1" className="label">
                <input
                  type="radio"
                  id="tk-list-1"
                  name="wordlist"
                  defaultValue="TrainerKelly's Custom List 1"
                  data-url="tklist1.json"
                />
                <span className="radio" />
                TrainerKelly's Custom List 1
              </label>
              <label htmlFor="genki" className="label">
                <input
                  type="radio"
                  id="genki"
                  name="wordlist"
                  defaultValue="Genki"
                  data-url="genki.json"
                />
                <span className="radio" />
                Genki Textbook
              </label>
              <div id="wordlist-message">
                <p className="message-line-warning">
                  Please select a word list!
                </p>
              </div>
            </form>
            <h3>Learning Focus</h3>
            <p>Select what you would like to focus on.</p>
            {/* Meaning & Reading, Just Readings, Just Meanings */}
            <form id="learning-focus-selection">
              <label htmlFor="learning-focus-both" className="label">
                <input
                  type="radio"
                  id="learning-focus-both"
                  name="learningfocus"
                  defaultValue="Readings and Meanings"
                  defaultChecked=""
                />
                <span className="radio" />
                Readings &amp; Meanings
              </label>
              <br />
              <label htmlFor="learning-focus-readings" className="label">
                <input
                  type="radio"
                  id="learning-focus-readings"
                  name="learningfocus"
                  defaultValue="Just Readings"
                />
                <span className="radio" />
                Just Readings
              </label>{" "}
              <br />
              <label htmlFor="learning-focus-meanings" className="label">
                <input
                  type="radio"
                  id="learning-focus-meanings"
                  name="learningfocus"
                  defaultValue="Just Meanings"
                />
                <span className="radio" />
                Just Meanings
              </label>{" "}
              <br />
            </form>
            <h3>Randomization</h3>
            <p>
              Randomize the words and the corresponding answers (if applicable).
            </p>
            <p>
              Does <span className="bold">not</span> jumble the words and the
              answers to come up at different times. The answers always
              correspond with the selected word.
            </p>
            {/* Toggle Randomization: selecting a word, answers*/}
            <form id="randomization-selection">
              <label
                htmlFor="randomization-words"
                id="randomization-words-label"
                className="label"
              >
                <input
                  type="checkbox"
                  id="randomization-words"
                  name="randomization"
                  defaultValue="Randomize Words"
                  defaultChecked=""
                />
                <span className="checkmark" />
                Randomize Words
              </label>{" "}
              <br />
              <label
                htmlFor="randomization-answers"
                id="randomization-answers-label"
                className="label show"
              >
                <input
                  type="checkbox"
                  id="randomization-answers"
                  name="randomization"
                  defaultValue="Randomize Answers"
                  className="show"
                  defaultChecked=""
                />
                <span className="checkmark" />
                Randomize Answers
              </label>{" "}
              <br />
            </form>
            <h3>Choose a Font</h3>
            <p>Display words in the font of your choice.</p>
            <p>
              If more than 1 font is selected, the font will randomly change
              with each word selected.
            </p>
            {/* Font Selection + Randomization */}
            <label htmlFor="fonts-selectall" className="label">
              <input
                type="checkbox"
                id="fonts-selectall"
                name="fonts"
                defaultValue="Select All Words"
              />
              <span className="checkmark" />
              Select All Fonts
            </label>{" "}
            <br /> <br />
            <form id="font-selection">
              <div className="font-grid">
                <label
                  htmlFor="fonts-noto-sans-jp"
                  className="noto-sans-jp font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-noto-sans-jp"
                    name="fonts"
                    defaultValue="Noto Sans Japanese"
                    data-font="noto-sans-jp"
                    className="checkbox-styling"
                    defaultChecked=""
                  />
                  <span className="checkmark" />
                  Noto Sans Japanese <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-noto-serif-jp"
                  className="noto-serif-jp font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-noto-serif-jp"
                    name="fonts"
                    defaultValue="Noto Serif Japanese"
                    data-font="noto-serif-jp"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Noto Serif Japanese <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-m-plus-rounded-1c"
                  className="m-plus-rounded-1c font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-m-plus-rounded-1c"
                    name="fonts"
                    defaultValue="M PLUS Rounded 1c"
                    data-font="m-plus-rounded-1c"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  M PLUS Rounded 1c <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-m-plus-1p"
                  className="m-plus-1p font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-m-plus-1p"
                    name="fonts"
                    defaultValue="M Plus 1p"
                    data-font="m-plus-1p"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  M PLUS 1p <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-yuki-mai"
                  className="yuki-mai font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-yuki-mai"
                    name="fonts"
                    defaultValue="Yuki Mai"
                    data-font="yuki-mai"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Yuki Mai <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-sawarabi-gothic"
                  className="sawarabi-gothic font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-sawarabi-gothic"
                    name="fonts"
                    defaultValue="Sawarabi Gothic"
                    data-font="sawarabi-gothic"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Sawarabi Gothic <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-kosugi-maru"
                  className="kosugi-maru font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-kosugi-maru"
                    name="fonts"
                    defaultValue="Kosugi Maru"
                    data-font="kosugi-maru"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Kosugi Maru <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-zen-antique"
                  className="zen-antique font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-zen-antique"
                    name="fonts"
                    defaultValue="Zen Antique"
                    data-font="zen-antique"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Zen Antique <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-zen-old-mincho"
                  className="zen-old-mincho font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-zen-old-mincho"
                    name="fonts"
                    defaultValue="Zen Old Mincho"
                    data-font="zen-old-mincho"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Zen Old Mincho <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-shippori-mincho-b1"
                  className="shippori-mincho-b1 font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-shippori-mincho-b1"
                    name="fonts"
                    defaultValue="Shippori Mincho B1"
                    data-font="shippori-mincho-b1"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Shippori Mincho B1 <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-zen-kurenaido"
                  className="zen-kurenaido font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-zen-kurenaido"
                    name="fonts"
                    defaultValue="Zen Kurenaido"
                    data-font="zen-kurenaido"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Zen Kurenaido <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-delta-gothic-one"
                  className="delta-gothic-one font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-delta-gothic-one"
                    name="fonts"
                    defaultValue="Delta Gothic One"
                    data-font="delta-gothic-one"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Delta Gothic One <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-rocknroll-one"
                  className="rocknroll-one font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-rocknroll-one"
                    name="fonts"
                    defaultValue="RocknRoll One"
                    data-font="rocknroll-one"
                    className="delta-gothic-one"
                  />
                  <span className="checkmark" />
                  RocknRoll One <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-dot-gothic-16"
                  className="dot-gothic-16 font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-dot-gothic-16"
                    name="fonts"
                    defaultValue="DotGothic16"
                    data-font="dot-gothic-16"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  DotGothic16 <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-yusei-magic"
                  className="yusei-magic font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-yusei-magic"
                    name="fonts"
                    defaultValue="Yusei Magic"
                    data-font="yusei-magic"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Yusei Magic <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-new-tegomin"
                  className="new-tegomin font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-new-tegomin"
                    name="fonts"
                    defaultValue="New Tegomin"
                    data-font="new-tegomin"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  New Tegomin <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-rampart-one"
                  className="rampart-one font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-rampart-one"
                    name="fonts"
                    defaultValue="Rampart One"
                    data-font="rampart-one"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Rampart One <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-reggae-one"
                  className="reggae-one font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-reggae-one"
                    name="fonts"
                    defaultValue="Reggae One"
                    data-font="reggae-one"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Reggae One <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-mochiy-pop-one"
                  className="mochiy-pop-one font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-mochiy-pop-one"
                    name="fonts"
                    defaultValue="Mochiy Pop One"
                    data-font="mochiy-pop-one"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Mochiy Pop One <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-kaisei-tokumin"
                  className="kaisei-tokumin font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-kaisei-tokumin"
                    name="fonts"
                    defaultValue="Kaisei Tokumin"
                    data-font="kaisei-tokumin"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Kaisei Tokumin <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-biz-udpmincho"
                  className="biz-udpmincho font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-biz-udpmincho"
                    name="fonts"
                    defaultValue="BIZ UDPMincho"
                    data-font="biz-udpmincho"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  BIZ UDPMincho <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-potta-one"
                  className="potta-one font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-potta-one"
                    name="fonts"
                    defaultValue="Potta One"
                    data-font="potta-one"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Potta One <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-kaisei-opti"
                  className="kaisei-opti font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-kaisei-opti"
                    name="fonts"
                    defaultValue="Kaisei Opti"
                    data-font="kaisei-opti"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Kaisei Opti <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-hachi-maru-pop"
                  className="hachi-maru-pop font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-hachi-maru-pop"
                    name="fonts"
                    defaultValue="Hachi Maru Pop"
                    data-font="hachi-maru-pop"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Hachi Maru Pop <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-yuji-syuku"
                  className="yuji-syuku font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-yuji-syuku"
                    name="fonts"
                    defaultValue="Yuji Syuku"
                    data-font="yuji-syuku"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Yuji Syuku <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-shippori-antique-b1"
                  className="shippori-antique-b1 font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-shippori-antique-b1"
                    name="fonts"
                    defaultValue="Shippori Antique B1"
                    data-font="shippori-antique-b1"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Shippori Antique B1 <br />
                  日本語フォント
                </label>
                <label
                  htmlFor="fonts-yuji-boku"
                  className="yuji-boku font-card label"
                >
                  <input
                    type="checkbox"
                    id="fonts-yuji-boku"
                    name="fonts"
                    defaultValue="Yuji Boku"
                    data-font="yuji-boku"
                    className="checkbox-styling"
                  />
                  <span className="checkmark" />
                  Yuji Boku <br />
                  日本語フォント
                </label>
              </div>
            </form>{" "}
            <br />
            <input
              type="reset"
              defaultValue="Clear All Settings"
              id="settings-reset"
              className="button"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
