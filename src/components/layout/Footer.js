function Footer() {

    const footerCurrentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-500 p-4 mt-8">
            <p className="text-center">Copyright &copy; {footerCurrentYear}</p>
        </footer>
    )
}

export default Footer
