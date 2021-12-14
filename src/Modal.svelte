<script>
    import App from "./App.svelte"
    export let valor;
    let back = false;

    function changeValue () {
        back = !back;
    }
</script>

<main>
    {#if back}
        <App />
    {:else}
        <div class="mod">
            <button on:click={changeValue} class="close">x</button>
            <h1>{valor}</h1>
        </div>
    {/if}
</main>

<style>
    .mod {
		background-color: rgb(165, 165, 165);
        border-radius: 20px;
        color: rgba(12, 95, 40);
        box-shadow: 1rem 1rem 2rem rgba(12, 95, 40, 0.521);
		margin: 10%;
		padding: 2% 4%;
		width: 30em;
		margin-left: auto;
		margin-right: auto;
	}

    .close {
        cursor: pointer;
        float: right;
        background: transparent;
        border: none;
        color: rgba(12, 95, 40);
    }

    @media (max-width: 500px) {
		.mod {
			width: 20em;
            position: absolute;
            top: 50%;
            transform: translateY(-50%); 
		}
		
	}
</style>