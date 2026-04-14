<script>
    import { base } from "$app/paths";
    export let data = {};
</script>

<article>
    {#if data.url}
        <a href={data.url} target="_blank" rel="noopener noreferrer">
            <img src="{base}{data.image}" alt={data.title} />
        </a>
    {:else}
        <img src="{base}{data.image}" alt={data.title} />
    {/if}
    {#if data.url}
        <h3><a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a></h3>
    {:else}
        <h3>{data.title}</h3>
    {/if}
    {#if data.year}
        <p class="year">{data.year}</p>
    {/if}
    <div class="description">
        <p>{data.description}</p>
        {#if data.url}
            <a class="link" href={data.url} target="_blank" rel="noopener noreferrer">link</a>
        {/if}
    </div>
</article>

<style>
    article {
        display: grid;
        grid-template-rows: subgrid;
        grid-row: span 4;
    }
    article img {
        grid-row: 1;
        width: 100%;
        height: 220px;
        object-fit: cover;
        display: block;
    }
    article h3 {
        grid-row: 2;
        margin: 0;
    }
    article h3 a {
        color: inherit;
        text-decoration: none;
    }
    article h3 a:hover {
        text-decoration: underline;
    }
    article .year {
        grid-row: 3;
        margin: 0;
        font-weight: 600;
        opacity: 0.85;
    }
    .description {
        grid-row: 4;
    }
    .link {
        display: inline-block;
        margin-top: 0.5em;
    }
</style>
