function Footer() {
    const footerCurrentYear = new Date().getFullYear()
    return (
        <footer className="bg-slate-500 p-4 flex mt-8">
            <span className="mx-auto">Copyright &copy; {footerCurrentYear}</span>
        </footer>
    )
}

export default Footer
