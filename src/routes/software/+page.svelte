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
      <li class="carousel-container">
        <h2>Assorted Design Projects</h2>
        <p>Click image for more info.</p>

        <div class="carousel">
          <img src={design001} alt="Logo for agile3" on:click="{openModal001}"><img src={design002} alt="Poster for a tiki party" on:click="{openModal002}"><img src={design003} alt="SolarPower Technology Intelligent Array" on:click="{openModal003}"><img src={design004} alt="SolarWinds SNMP Enabler" on:click="{openModal004}"><img src={design005} alt="Savvy Musician Website" on:click="{openModal005}">
        </div>
      </li>
    </ul>
  </section>
</section>

<Modals>
  <div
    slot="backdrop"
    class="modal-backdrop"
    on:click={closeModal}
  />
</Modals>

<script>
  import { Nav } from '../../components/nav';
  import thumbnail001 from './images/thumb-rules.png';
  import thumbnail002 from './images/thumb-bookban.info.png';

  import design001 from './images/design/logo-agile-3.png';
  import design002 from './images/design/poster-party-2020911.png';
  import design003 from './images/design/app-intelligent-array.png';
  import design004 from './images/design/app-snmp-enabler.png';
  import design005 from './images/design/website-savvy-musician.jpg';

  import { Modals, closeModal, openModal } from 'svelte-modals';
  import { Modal } from '../../components/modal';

  function openModal001() {
    openModal(Modal, {
      header: 'Exercise in Logo Design',
      description: 'You may have heard of Agile 2 but wait until you learn about agile3. This was a fun branding exercise for a fictional methodology.',
      image: design001
    });
  }

  function openModal002() {
    openModal(Modal, {
      header: 'Poster for a tiki-themed party',
      description: 'I love designing posters and you might have noticed a familiar color palette on this one.',
      image: design002
    });
  }

  function openModal003() {
    openModal(Modal, {
      header: 'Draker Labs Intelligent Array',
      description: 'This is an early iteration of a dashboard I built for monitoring solar array performance.',
      image: design003
    });
  }

  function openModal004() {
    openModal(Modal, {
      header: 'SolarWinds SNMP Enabler',
      description: 'While at SolarWinds I had the opporunity to design a Win32 app that would serve as a marketing tool for their other products.',
      image: design004
    });
  }

  function openModal005() {
    openModal(Modal, {
      header: 'The Savvy Musician Website',
      description: 'I designed and developed this promotional site for the epnomous book release.',
      image: design005
    });
  }
</script>

<style>
  @import './style.css';
</style>
