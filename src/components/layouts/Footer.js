function Footer() {

    const footerYear = new Date().getFullYear()

    return (
        <footer className="footer bg-gray-700 text-primary-content footer-center p-4">
            Copyright &copy; {footerYear}
        </footer>
    )
}

export default Footer
