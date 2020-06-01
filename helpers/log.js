export default function log(content, color) {
  const colors = {
    red: '31',
    green: '32',
    yellow: '33',
    cyan: '36',
  };
  const colorArgument = `\x1b[${colors[color]}m`;
  const reset = '\x1b[0m';

  if (color) {
    return console.log(colorArgument, content, reset);
  }
  return console.log(content);
}
