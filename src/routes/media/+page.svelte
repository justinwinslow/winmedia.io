<svelte:head>
  <title>WinMedia | More about my various media endeavors</title>
</svelte:head>

<section class="view media">
  <header>
    <h1><a href="/">Win<span>Media</span></a></h1>
    <Nav active="media" />
  </header>
  <section class="portfolio">
    <ul>
      <li class="carousel-container">
        <h2>Live in the Studio</h2>
        <p>This is a series of videos of local Austin groups produced, filmed, and recorded by myself and some friends.</p>
        <div class="carousel">
          <iframe width="480" height="270" src="https://www.youtube.com/embed/BnUriRNQfRg?si=w0bOhwG38NFmiKYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="480" height="270" src="https://www.youtube.com/embed/LCv9fguWy1Y?si=VmtGdYfvDPSXCpSv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="480" height="270" src="https://www.youtube.com/embed/ceREKAKV344?si=obpJ9RjLhQvsjnaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="480" height="270" src="https://www.youtube.com/embed/9et8ueoYgLI?si=k07unLjinTqgxMYF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </li>
    </ul>
  </section>
</section>

<script>
  import { Nav } from '../../components/nav';
</script>

<style>
  @import './style.css';
</style>
