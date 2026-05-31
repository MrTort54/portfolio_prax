export function CertificateViewer({ certificate }) {
  if (certificate.type === 'pdf') {
    return (
      <iframe
        className="certificate-modal__pdf"
        src={certificate.src}
        title={certificate.title}
      />
    )
  }

  return (
    <img
      className="certificate-modal__image"
      src={certificate.src}
      alt={certificate.alt ?? certificate.title}
    />
  )
}
