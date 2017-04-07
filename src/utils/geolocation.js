export const geolocation = () => new Promise((resolve, reject) => {
  navigator.geolocation && navigator.geolocation.getCurrentPosition(resolve, reject);
});
