export const saveCookie = (key: string, value: string) => {
  const formattedKey = encodeURIComponent(key);
  const formattedValue = encodeURIComponent(value);
  const newCookie = `${formattedKey}=${formattedValue}`;
  // const newCookie = `${formattedKey}=Bearer ${formattedValue}`;
  document.cookie = newCookie;
};
