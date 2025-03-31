export function isImageExists(url?: string | null): Promise<boolean> {
    return new Promise((resolve) => {
        if (!url) return false
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