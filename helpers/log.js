import fs from 'fs';
const logFile = fs.createWriteStream('./log.html', { flags: 'a' });

/**
 * Creates a container for every log
 *
 * @param {string} content
 * @param {string} color
 * @param {string} tag
 */
export default function log(content, color, tag) {
  if (content === 'start_log') {
    return logFile.write("<body style='background: #222;>");
  }

  if (content === 'end_log') {
    return logFile.write('</body>');
  }

  const colors = {
    red: '31',
    green: '32',
    yellow: '33',
    cyan: '36',
    white: '37',
  };

  const colorArgument = `\x1b[${colors[color]}m`;
  const reset = '\x1b[0m';

  const currentTag = tag ? tag : 'p';
  const link = tag === 'a' ? ` href='${content}'` : '';
  const toWrite = `<${currentTag}${link} style='color: ${color};'>${content}</${currentTag}>`;
  logFile.write(toWrite + '\n');

  if (color) {
    if (color === 'red') {
      return console.log(`# Error: ${colorArgument} \n\n`, content, reset);
    }
    return console.log(colorArgument, content, reset);
  } else {
    return console.log(content);
  }
}
