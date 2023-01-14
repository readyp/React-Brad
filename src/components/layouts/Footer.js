function Footer() {

    const footerYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-500 p-3 text-center mt-4">
            <p>copyright &copy; {footerYear}</p>
        </footer>
    )
}

export default Footer
