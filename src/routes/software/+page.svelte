<svelte:head>
  <title>WinMedia | More about my software projects</title>
</svelte:head>

<section class="view software">
  <header>
    <h1><a href="/">Win<span>Media</span></a></h1>
    <Nav active="software" />
  </header>
  <section class="portfolio">
    <ul>
      <li>
        <div class="description">
          <h2>Résumé</h2>
          <p>
            I've done design and development for companies ranging from 20 to 20,000 employees,
            in sectors as diverse as insurance, solar technology, and marketing automation.
            In that time I've had the opportunity to architect multiple ambitious, browser-based
            applications from conception to profitability – including solar array performance metrics,
            monitoring, and intelligence as well as a sophisticated marketing automation tool.
            I'm also an accomplished leader with over 10 years of experience leading teams including
            hiring and mentoring engineers.
          </p>
          <p>
            <a href="/resume-2024-001.pdf" target="_blank" class="link-primary download">
              Continue Reading
            </a>
          </p>
        </div>
        <div class="image">
          <a href="http://www.jwindesign.com/winslowResume_web.pdf" target="_blank">
            <img src="/img/jwin_001.jpg" alt="Picture of me looking sharp :)" class="me">
          </a>
        </div>
      </li>
      <li>
        <div class="description">
          <h2>Case Study: Complex Rule Sets</h2>
          <p>
            One of the most critical components of LeadConduit was a featured aptly called “rules”.
            Rules could be used in multiple places and needed to be incredibly flexible to accommodate
            a vast array of user concerns.
          </p>
          <p>
            <a href="/software/case-study-complex-rule-sets" class="link-primary article">
              Continue Reading
            </a>
          </p>
        </div>
        <div class="image">
          <a href="/software/case-study-complex-rule-sets">
            <img src={thumbnail001} alt="Visual representation of complex rule sets" class="rules-thumbnail">
          </a>
        </div>
      </li>
      <li>
        <div class="description">
          <h2>BookBan.info</h2>
          <p>
            With all the recent book banning in the US I realized there wasn't an easily searchable
            index of all the various bans. So, I set out to create this to improve the transparency
            around our current censorious moment. It also gave me an opportunity to more familiarize
            myself with React and Next.js.
          </p>
          <p>
            <a href="https://bookban.info" target="_blank" class="link-primary external-site">
              View Site
            </a>
            <a href="https://github.com/justinwinslow/banned-books" target="_blank" class="link-primary software">
              Source Code
            </a>
          </p>
        </div>
        <div class="image">
          <a href="https://bookban.info" target="_blank">
            <img src={thumbnail002} alt="Screenshot of bookban.info">
          </a>
        </div>
      </li>
    </ul>
  </section>
</section>

<script>
  import { Nav } from '../../components/nav';
  import thumbnail001 from './images/thumb-rules.png';
  import thumbnail002 from './images/thumb-bookban.info.png';
</script>

<style>
  @import './style.css';
</style>
