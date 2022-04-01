---
title: 'Markdown to HTML Demo'
date: '2022-04-02'
---

### Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1

## H2
### H3
#### H4
##### H5

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

These elements extend the basic syntax by adding additional features. These elements extend the basic syntax by adding additional features. It's `npm run dev` boys. Not all Markdown applications support these elements. Not all Markdown applications support these elements.

### Horizontal Rule

---

### Link

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements. If you want to learn see [Markdown Guide](https://www.markdownguide.org) to clear your concepts. These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements. These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

![alt text](https://assets.weforum.org/community/image/7TIt0OZ7hNUP1TNJrHHQOCriP9rSR4d9toQR7EB2gU8.jpg)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | `Title`       | Here's this   |
| Paragraph   | Text        | And more      |
| Header      | `Title`       | Here's this   |
| Paragraph   | Text        | And more      |

### Footnote

Here's a sentence with a footnote.  [^1]

[^1]: This is the footnote.

Here's a sentence 2 with a footnote. [^2]

[^2]: This is the footnote 2.

### Fenced Code Block

<filename>data/fetchedUser_data_from_api.json</filename>

```json
{
  "firstName": "Johnddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  "lastName": "Smith",
  "age": 25
}
```

JS code

```js
import { something } from 'that-thing';

// Not sure what this code does

let index = 123;
const secret = 'my secret' + "her secret";

function find_thatThing(index, secret) {
  var temp = something.find(index, secret);

  temp.map((item, i) => {
    if(item.active === true) {
      index+=item.currentIndex;
      console.log(`He did it :), for ${index}.`)
    } else {
      break;
    }
  });
}

/* function forWhat() {
  console.log("IDK");
} */

export default find_thatThing;

```


### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [x] Update the website
- [ ] Contact the media

### Emoji

😎️

### Subscript

H<sub>2</sub>O

### Superscript

X<sup>2</sup>