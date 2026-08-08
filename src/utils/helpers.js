export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function classNames(...parts) {
  return parts.filter(Boolean).join(" ");
}
