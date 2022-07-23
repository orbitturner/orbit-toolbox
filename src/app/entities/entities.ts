export enum EncodeTypes {
    encode = 'encode',
    rawEncode = 'rawEncode',
    encodeWithURIsafe = 'encodeWithURIsafe',
    rawEncodeUTF16 = 'rawEncodeUTF16',
}
export enum DecodeTypes {
    decode = 'decode',
    rawDecode = 'rawDecode',
    decodeWithURIsafe = 'decodeURIsafe',
    rawDecodeUTF16 = 'rawDecodeUTF16',
}
export interface TabConfig {
    name: string;
    value: string[];
  }

export const defaultMarkup = `
![HtmlEditor](https://github.com/orbitturner/challenger/blob/master/images/OrbitTurner_Gaming_GitHubBadge.png?raw=true) Formatted Text Editor (HTML Editor)
---------------------------------------------------------------------------------------------------------------------------------------

Orbit Markdown Generator is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.

Supported features:

*   Inline formats:
    *   **Bold**, _italic_, strikethrough text formatting
    *   Font, size, color changes (HTML only)
*   Block formats:
    *   Headers
    *   Text alignment
    *   Lists (ordered and unordered)
    *   Code blocks
    *   Quotes
*   Custom formats
*   HTML and Markdown support
*   Mail-merge placeholders (for example, %username%)
*   Adaptive toolbar for working images, links, and color formats
*   Image upload: drag-and-drop images onto the form, select files from the file system, or specify a URL.
*   Copy-paste rich content (unsupported formats are removed)
*   Tables support

<img width="auto"
 src="https://raw.githubusercontent.com/orbitturner/orbitturner/output/github-contribution-grid-snake.svg"
/>

<p align="center">
<img width="auto"
 src="https://metrics.lecoq.io/orbitturner?template=classic&achievements=1&achievements.threshold=C&achievements.secrets=true&achievements.display=detailed&achievements.limit=0&config.timezone=UTC"
/>
</p>

🚀 Contribute to the App !
`;
