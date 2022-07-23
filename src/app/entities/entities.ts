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

export const defaultMarkup = `![HtmlEditor](https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/widgets/HtmlEditor.svg) Formatted Text Editor (HTML Editor)
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

Supported frameworks and libraries

<table><tbody><tr><td><p><strong>jQuery</strong></p></td><td><p style="text-align: right;">v2.1 - v2.2 and v3.x</p></td></tr><tr><td><p><strong>Angular</strong></p></td><td><p style="text-align: right;">v7.0.x - v10.0.x</p></td></tr><tr><td><p><strong>React</strong></p></td><td><p style="text-align: right;">v16.2+</p></td></tr><tr><td><p><strong>Vue</strong></p></td><td><p style="text-align: right;">v2.6.3+</p></td></tr></tbody></table>
`;
