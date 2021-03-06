import { formatRecordToString, styleToHtmlStyle } from 'nightingale-formatter';

export function style(styles, string) {
  if (!styles || !styles.length || !string) {
    return string;
  }

  return `<span style="${styles.map(function (styleName) {
    return styleToHtmlStyle[styleName].open;
  }).join('; ')}">${string}</span>`;
}

/**
 * @param {Object} record
 * @returns {string}
 */
export default function format(record) {
  return formatRecordToString(record, style);
}
//# sourceMappingURL=index.js.map