<script>
	import Modal from "./Modal.svelte";
	import { onMount } from "svelte/internal";
	let data = [];
	let responseAPI = "";
	console.log(responseAPI);
  
    async function callAPI () {
			let keyUser = document.getElementById("keyUser").value;
			let tokenUser = document.getElementById("tokenUser").value;
			let nameUser = document.getElementById("nameUser").value;
			const response = await fetch(`https://cloud.softgreen.com.br/stage/login_stage.jsp?key=${keyUser}&token=${tokenUser}&user=${nameUser}`);
			const json = await response.json();
			data = json;
			responseAPI = data[0].result;
	}
	
</script>

<main>
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	{#if responseAPI == "success" || responseAPI == "unsuccess"}
		<Modal valor={responseAPI}/>
	{:else}
		<div class="login">
			<h1>Login Form</h1>
			<input type="text" placeholder="user" id="nameUser">
			<input type="text" placeholder="token" id="tokenUser">
			<input type="text" placeholder="key" id="keyUser">
			<div class="checkbox">
				<input type="checkbox" name="terms" id="box"> 
				<div class="text">Agree with <a href="https://termify.io/terms-and-conditions-generator?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzq1O-DagaunhmRr32cUWmF6Js0Q8Hx1fn5E24yQ0UjFLkURhjPfKTYaAvHuEALw_wcB">terms & conditions</a></div>
			</div>
			<button on:click={callAPI}>Login</button>

		</div>
	{/if}
	
</main>

<style>
	main {
		background-image: url("https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/2020-06/79056eb7-3b14-4b2c-9ee6-3c02412dfc97_0.jpeg?h=9b3f26a4&itok=99dR0u79");
		background-repeat: no-repeat;
		background-size: cover;
		text-align: center;
		padding: 1em;
		margin: 0;
		min-height: 100%;
		max-width: 100%;
	}

	.login {
		background-color: rgb(165, 165, 165);
		box-shadow: 1rem 1rem 2rem rgba(12, 95, 40, 0.521);
		border-radius: 30px;
		margin: 10%;
		opacity: 0.9;
		padding: 2% 4%;
		width: 30em;
		margin-left: auto;
		margin-right: auto;
	}

	input {
		display: block;
		margin-left: auto;
		margin-right: auto;
		
	}

	button {
		width: 17em;
		background-color: rgb(12, 95, 40);
		color: white;
		cursor: pointer;
		border-radius: 30px;
	}

	h1 {
		color: rgb(12, 95, 40);
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 400;
	}

	.checkbox {
		display: flex;
		justify-content: center;
		width: fit-content;
		margin: auto;
	}

	.checkbox .text {
		font-size: 0.8em;
	}

	@media (max-width: 500px) {
		.login {
			width: 20em;
			position: absolute;
            top: 50%;
            transform: translateY(-50%); 
		}

	}
</style>