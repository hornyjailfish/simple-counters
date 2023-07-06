<script>
  let counter = 0;
  function click() {
    counter++;
  }
</script>
<h1>Welcome to SvelteKit</h1>
<button on:click={click}>Click me daddy! {counter>0 ? counter:""}</button>
<p>{counter>0 ? counter:""}</p>
