function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full text-gray-800">
      <p className="text-center">Copyright &copy; {year}</p>{' '}
    </footer>
  );
}

export default Footer;
