export function publicFile(folder, fileName) {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`

  return `${base}${folder}/${fileName.split('/').map(encodeURIComponent).join('/')}`
}
