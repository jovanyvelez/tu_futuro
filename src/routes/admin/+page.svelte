<script>
  import { marked } from 'marked'
  let markdown = $state('')
</script>

<h1>Artículos de las Medias tecnicas</h1>


<textarea bind:value={markdown} placeholder="Ingresa tu markdown aqui" ></textarea>


<div class="preview prose dark:prose-invert">{@html marked(markdown)}</div>