<script>

  import { marked } from 'marked'
  

  let markdown = $state('')
</script>

<h1>Markdown Editor</h1>


<textarea bind:value={markdown} placeholder="Enter markdown here" ></textarea>

<!-- Convert the markdown to HTML and display it -->
<div class="preview prose dark:prose-invert">{@html marked(markdown)}</div>

<article class="prose lg:prose-xl">
    <h1>Garlic bread with cheese: What the science tells us</h1>
    <p>
      For years parents have espoused the health benefits of eating garlic bread with cheese to their
      children, with the food earning such an iconic status in our culture that kids will often dress
      up as warm, cheesy loaf for Halloween.
    </p>
    <p>
      But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
      springing up around the country.
    </p>
    <!-- ... -->
  </article>

<!-- Make it look (slightly) nicer ;) -->
<style>
	textarea, .preview {
		box-sizing: border-box;
		display: block;
		width: 100%;
	}
	
	textarea {
		font-family: monospace, Roboto;
		height: 25%;
		border: none;
		margin: 0;
		padding: 1rem;
	}
	
	.preview {
		height: 75%;
		padding: 2rem;
		border-top: solid 2px #888;
	}
	
	h1 {
		background: #e1e1e1;
		margin: 0px;
		padding: 0.8rem;
		font-size: 1.2rem;
	}
	
	:global(body) {
		padding: 0;
	}
</style>