export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} Chainflow</p>
    </footer>
  )
}
