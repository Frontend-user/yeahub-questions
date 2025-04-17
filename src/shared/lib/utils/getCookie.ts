export const getCookie = (name?: string) => {
  if (!name) return "";

  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(`(?:^|; )${escapedName}=([^;]*)`);

  const matches = document.cookie.match(regex);
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
