import fs from 'fs';
import util from 'util';

export default function log(content, color) {
  const colors = {
    red: '31',
    green: '32',
    yellow: '33',
    cyan: '36',
  };
  const colorArgument = `\x1b[${colors[color]}m`;
  const reset = '\x1b[0m';

  const log_file = fs.createWriteStream('./debug.log', { flags: 'w' });
  log_file.write(util.format(content) + '\n');

  if (color) {
    return console.log(colorArgument, content, reset);
  } else {
    return console.log(content);
  }
}
