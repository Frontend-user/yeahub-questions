export function isImageExists(url?: string | null): Promise<boolean> {
  return new Promise((resolve) => {
    if (!url) return false;
    const img = new Image();
    img.onload = function () {
      resolve(true);
    };
    img.onerror = function () {
      resolve(false);
    };
    img.src = url;
  });
}

export const parseJwt = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join(""),
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};

export const getTokenExpiredSecsLeft = (token: string) => {
  if (!token) return -1;
  const decodedToken = parseJwt(token);
  const expTime = decodedToken.exp * 1000;
  const currentTime = Date.now();
  const timeLeftMs = expTime - currentTime;
  const timeLeftSec = Math.max(Math.floor(timeLeftMs / 1000), 0);
  return timeLeftSec;
};
