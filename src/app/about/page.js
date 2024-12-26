export default function About() {
  return (
    <section id="about-tab" className="section-content">
      <h2>About</h2>
      <p>I had paused actively learning Japanese in July 2012.</p>
      <p>
        I found myself suddenly getting back to it mid-January 2022 after I
        could <em>not</em> get enough of a manga I read. I decided not to wait
        for the next release in English. Instead, I read it in Japanese.
      </p>
      <p>
        Reading one manga in Japanese lead to another and soon enough, I was
        making a custom word list of all the words I wasn't familiar with (which
        was a lot!). (Not just from manga either – applications I used and even
        a video game helped contribute to the list.)
      </p>
      <p>
        I knew I wanted to study it the same sort of way I did with learning
        hiragana and katakana – the typing game of{" "}
        <a href="https://realkana.com/" target="_blank">
          RealKana
        </a>
        .
      </p>
      <p>Problem was...a vocabulary version just didn't exist.</p>
      <p>Especially not one that let me use my own word list.</p>
      <p>So I built it.</p>

      <h3>How to Use</h3>
      <p>
        Designed typing gaming-style. Type in the answer and see if you're
        correct. It's very easy to get started:
      </p>
      <ol>
        <li>
          Go to "Word List &amp; Settings" and select your word list, set your
          settings, select desired font(s);
        </li>
        <li>Go to "Word Selection" and select at least 5 words;</li>
        <li>Go to "Learn" to start learning!</li>
      </ol>

      <h4>Reading V.S. Meaning</h4>
      <p>
        You can choose whether you want to learn the reading of the word in
        Japanese or the meaning of the word in English or BOTH (it defaults to
        both).
      </p>

      <p>
        You will see a label displayed to indicate if you are meant to type the
        meaning or the reading.
      </p>
      <ul className="label-list">
        <li>
          <span className="english-label test-type">ENG</span> – indicates
          English meaning (when doing both)
        </li>
        <li>
          <span className="nihongo-label test-type">日本語</span> – indicates
          Japanese reading (when doing both)
        </li>
        <li>
          <span className="english-label test-type">
            意味だけ • Meanings ONLY
          </span>{" "}
          – indicates meaning in English ONLY
        </li>
        <li>
          <span className="nihongo-label test-type">
            読みだけ • Readings ONLY
          </span>{" "}
          – indicates reading in Japanese ONLY
        </li>
      </ul>

      <p>
        While you can only type in English letters for the English meanings, you
        can type in either romaji or kana for the readings!
      </p>

      <p className="red-text">
        At this time, there a glitch with using kana to answer. The test will
        check your answer before you're actually done typing – but don't worry.
        Keep going! If you are correct, it will eventually let you move on. If
        it doesn't let you move on, try typing in romaji.
      </p>

      <h3>Supplement, Not Replacement</h3>
      <p>
        This app isn't meant to replace your other learning methods – it's to
        act as a supplement or a compliment to them!
      </p>
      <p>
        Some words inside of the list(s) may be considered rude or are
        non-standard words. Make sure to do some additional research before you
        use them!
      </p>
      <p>Use with other resources for a full learning experience.</p>

      <h3>Updates</h3>
      <p>
        <span className="bold">1.1.1</span> – full lists loaded, uploaded this
        to website, bug fixes, general improvements.
      </p>
      <ul>
        <li>
          <span className="italic">Bug Fixed:</span> readings of words
          validating on length, not answer
        </li>
        <li>
          <span className="italic">Bug Fixed:</span> full list for Yomiwa takes
          6+ minutes to load – now it loads in a matter of seconds (Genki
          probably would have had the same problem, but I fixed it before the
          list was done.)
        </li>
        <li>
          <span className="italic">Bug Fixed:</span> filter system broken
        </li>
      </ul>

      <p>
        かな validation is still an issue. I have concluded that it is currently
        a lack of skill &amp; knowledge. I will fix it in time.
      </p>

      <p>
        <span className="bold">1.0.0</span> – initial app uploaded with test
        files to GitHub.
      </p>

      <aside>
        <h3>Noticed Issues?</h3>
        <p>
          This is probably the first "complex" (is it even all that complex?)
          project I built. There's bound to be glitches I never noticed.
        </p>
        <p>
          It's also completely possible I got a meaning or reading wrong, had a
          spelling mistake, or something else.
        </p>
        <p>
          <a href="mailto:hello@kellymulry.com">Email me</a> with issues (or
          just to say "hello"! I accept that too!)
        </p>

        <h3>Support Me</h3>
        <p>
          If you found this app useful and have a bit of money to spare, feel
          free to leave a tip.
        </p>
        <ul>
          <li>
            <a href="https://ko-fi.com/trainerkelly" target="_blank">
              Ko-Fi
            </a>
          </li>
          <li>
            <a href="https://www.buymeacoffee.com/trainerkelly" target="_blank">
              Buy Me a Coffee
            </a>
          </li>
          <li>
            <a
              href="https://www.paypal.com/paypalme/trainerkelly"
              target="_blank"
            >
              PayPal Me
            </a>
          </li>
        </ul>

        <p>
          Feel free to also check out{" "}
          <a href="https://github.com/trainerkelly" target="_blank">
            My GitHub Profile
          </a>{" "}
          and my{" "}
          <a href="http://www.kellymulry.com" target="_blank">
            Portfolio Site.
          </a>
        </p>
      </aside>

      <p className="small">
        <span className="bold">App Version:</span> 1.1.1
      </p>
    </section>
  );
}
