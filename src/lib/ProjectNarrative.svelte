<script>
  import { base } from "$app/paths";
  import Scrolly from "svelte-scrolly";
  import projects from "$lib/projects.json";

  let scrollyProgress = 0;
  let sorted_projects = [...projects].sort((a, b) => a.year - b.year);
  let activeProjectIdx = 0;

  $: progressPerProject = sorted_projects.length ? 100 / sorted_projects.length : 100;
  $: activeProjectIdx = sorted_projects.length
    ? Math.min(sorted_projects.length - 1, Math.floor(scrollyProgress / progressPerProject))
    : 0;
</script>

<div class="scrolly-wrapper">
  <Scrolly bind:progress={scrollyProgress}>
    {#each sorted_projects as project}
      <section class="step">
        <div class="step-content">
          <h3>{project.year}: {#if project.url}<a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>{:else}{project.title}{/if}</h3>
          <p>{project.story}</p>
          {#if project.url}
            <a class="link" href={project.url} target="_blank" rel="noopener noreferrer">link</a>
          {/if}
        </div>
      </section>
    {/each}

    <svelte:fragment slot="viz">
      {#if sorted_projects.length}
        {@const active = sorted_projects[activeProjectIdx]}
        <div class="project-detail">
          <h3>{active.year}</h3>
          {#if active.url}
            <a href={active.url} target="_blank" rel="noopener noreferrer">
              <img src="{base}{active.image}" alt={active.title} />
            </a>
            <p><a href={active.url} target="_blank" rel="noopener noreferrer">{active.title}</a></p>
          {:else}
            <img src="{base}{active.image}" alt={active.title} />
            <p>{active.title}</p>
          {/if}
        </div>
      {/if}
    </svelte:fragment>
  </Scrolly>
</div>

<style>
  .scrolly-wrapper {
    width: min(1000ch, 60vw);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .step {
    min-height: 80vh;
    padding: 2rem;
  }

  .step-content {
    border-left: 0.35rem solid var(--color-accent);
    padding: 1.5rem 2rem;
    background: color-mix(in oklch, var(--color-accent), canvas 95%);
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .step-content h3 {
    margin: 0 0 0.5rem;
  }

  .step-content p {
    margin: 0;
  }

  .step-content .link {
    display: inline-block;
    margin-top: 0.5em;
  }

  .project-detail {
    padding: 2rem;
    width: 100%;
  }

  .project-detail h3 {
    margin: 0 0 0.75rem;
  }

  .project-detail p {
    margin: 0.75rem 0 0;
    font-weight: 600;
  }

  .project-detail img {
    width: 100%;
    max-width: 560px;
    height: auto;
    display: block;
    border-radius: 0.5rem;
    box-shadow: 0 8px 30px oklch(0% 0 0 / 25%);
  }

  @media (max-width: 900px) {
    .scrolly-wrapper {
      width: 100%;
      left: 0;
      transform: none;
    }
  }
</style>
