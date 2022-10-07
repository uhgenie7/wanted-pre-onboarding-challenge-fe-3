export const BASE_URL = window.location.origin + import.meta.env.BASE_URL;

export const removeLastSlash = () => {
  return BASE_URL.replace(/\/$/g, '');
};
