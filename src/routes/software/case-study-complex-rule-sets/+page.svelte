<svelte:head>
  <title>WinMedia | Case Study: Complex Rule Sets</title>
</svelte:head>

<section class="view software">
  <header>
    <h1><a href="/">Win<span>Media</span></a></h1>
    <Nav active="software" />
  </header>
  <section class="case-study">
    <a href="/software" class="link-back">Back to Software</a>
    <h2>Case Study: Complex Rule Sets</h2>
    <p>
      When designing a new feature I look for prior art to inform my approach. In 2013, the options for
      sophisticated rule-builders (at least insofar that I could find) were limited. One of the solutions
      closest to what we were trying to achieve was the Smart Playlist builder in iTunes.
    </p>
    <p>
      <img src={image001} alt="Rules in iTunes app from 2013">
    </p>
    <p>
      This proved to be the right direction but not a comprehensive solution.
    </p>
    <h3>The Use-Case</h3>
    <p>
      LeadConduit, in its essence, is like an http proxy. Basically, data is sent in and
      converted into our internal format and then sent on to one or more destinations after
      being converted to the 3rd-party's expected format. Along the way, there are various
      points where the user might want to reject the data, selectively format certain parts of
      the data, or have logic about where to send it and when. That's where rules come in.
    </p>
    <p>
      A rule-builder is much more complicated than I would have guessed when starting the project.
      It's easy to say, "I want the car to be blue AND I want the car to have a V6" but what about
      "I want the car to be blue OR I want the car to be red". Further, you could have a case where you
      want the car to be blue or red AND have a V6. To meet as many cases as possible you need top
      level rules, compound rules, and rules that can be nested under another rule.
      You can see how this can be a bit of mind bender.
    </p>
    <p>
      The solution was to model the data as abstractly as possible:
    </p>
    <Highlight language={js} {code} />
    <p>
      From there I was able to build rule set and rule UI components that could compile recursively
      based on the data model.
    </p>
    <p>
      The first implementation of rule sets came in the form of filter steps. A step was one of N number
      of serialized descriptions of how to handle a given data submission. In this case, you could set arbitrary
      rules to short circuit the rest of the handling and exit the processing.
    </p>
    <p>
      <img
        src={image002}
        alt="Single rule describing a situation where if this is not equal to that, take action"
      >
    </p>
    <h3>Great! But, what of our more complicated use-cases?</h3>
    <p>
      Remember that we wanted this feature to be able to handle basically anything a user could conceive of and
      be flexible enough to use anywhere. If we look back at our data model, there are 2 other configurations
      for rules beyond just the basic top level. We have "nested" rules (wherein we can add rules dependent on
      a specific parent rule) and rule "groups" that resolve at the level in which they're defined but are able
      to be bundled together with an "and" or "or" operator.
    </p>
    <p>
      <img src={image003} alt="Examples of compound rules">
    </p>
    <p>
      Now we were able to accomplish a number of sophisticated tasks entirely within the UI &mdash; including
      building fairly robust integrations with 3rd party services.
    </p>
    <p>
      <img
        src={image004}
        alt="Examples of mappings and rules being used to integrate with 3rd party software"
      >
    </p>
    <h3>Conclusion</h3>
    <p>
      There's more to say about how the earliest implementations within given contexts (like the filter step or mappings)
      succeeded and failed but that's for another time. The fundamental user experience of how the rule builder worked
      has remained the same for close to 10 years &ndash; having survived design changes and code refactors &ndash; and
      has been one of the most critical points of success for LeadConduit and its ecosystem of tools.
    </p>
  </section>
</section>

<script>
  import { Nav } from '../../../components/nav';
  import { Highlight } from 'svelte-highlight';
  import js from 'svelte-highlight/languages/javascript';
  import code from './rule-json';
  import 'svelte-highlight/styles/obsidian.css';

  import image001 from './images/itunes-rules-001.png';
  import image002 from './images/filter-step-001.png';
  import image003 from './images/filter-step-002.png';;
  import image004 from './images/mappings-001.png';

</script>

<style>
  @import './style.css';

</style>
