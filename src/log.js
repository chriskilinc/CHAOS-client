export const log = () => {

  const information = (message) => {
    console.log(`%c${message}`, 'color: #f6f6f6; font-weight: 600');
  }

  const warning = (message) => {
    console.log(`%c${message}`, 'color: #ffb347; font-weight: 600');
  }

  const error = (message) => {
    console.log(`%c${message}`, 'color: #CF6679; font-weight: 600');
  }

  return {
    information,
    warning,
    error
  }
}