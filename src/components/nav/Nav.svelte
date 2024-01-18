<nav class="primary">
  <ul>
    <li><a href="/media" class="media" class:active={active == 'media'}>Media</a></li>
    <li><a href="/software" class="software" class:active={active == 'software'}>Software</a></li>
    <li><a href="/" class="home">Home</a></li>
  </ul>
</nav>

<script>
  export let active;
</script>

<style>
  nav.primary {
    flex: 1;
  }

  nav.primary > ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  nav.primary > ul > li {
    margin: 0;
    padding: 0;
    display: inline-block;
    float: right;
    margin-left: 12px;
  }

  nav.primary > ul > li > a {
    font-size: 0;
    color: var(--color-text-dark);
  }

  nav.primary > ul > li > a:before {
    font-family: Icons;
    display: inline-block;
    vertical-align: middle;
    font-size: 24px;
    line-height: 36px;
  }

  nav.primary > ul > li > a:hover {
    color: #fff;
    transition: color 0.3s ease-in-out;
  }

  nav.primary > ul > li > a.active {
    color: #fff;
  }

  nav.primary > ul > li > a.home:before {
    content: '\e88a';
  }

  nav.primary > ul > li > a.software:before {
    content: '\e86f';
  }

  nav.primary > ul > li > a.media:before {
    content: '\e019';
  }
</style>
