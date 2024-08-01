import { useState } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  breaks: true
});

const renderMarkdown = new marked.Renderer();

const defaultMarkdown = `
# Heading 1

## Heading 2

[OpenAI](https://www.openai.com) - A link to OpenAI's website.

Inline code: \`console.log('Hello, world!')\`

\`\`\`javascript
// Code block with JavaScript
function greet() {
    console.log('Hello, world!');
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![OpenAI Logo](https://www.openai.com/favicon.ico)

**This is bold text**
`;
function App() {
  const [text, setText] = useState(defaultMarkdown);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="wrapper">
      <h2>A Markdown Previewer Made By Masud</h2>
      <div className="editor-box">
        <h6>Editor</h6>
        <textarea id="editor" value={text} onChange={handleTextChange}>
        </textarea>
      </div>
      <div className="preview-box">
        <h6>Preview</h6>
        <div id="preview" dangerouslySetInnerHTML={{
          __html: marked(text, { renderer: renderMarkdown })
        }}></div>
      </div>
    </div>
  );
}

export default App;
