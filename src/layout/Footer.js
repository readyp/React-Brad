function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer p-4 bg-gray-500 text-white mt-4'>
            <h2 className='text-center mx-auto'>
                Copyright &copy; {currentYear}
            </h2>
        </footer>
    );
}

export default Footer;
