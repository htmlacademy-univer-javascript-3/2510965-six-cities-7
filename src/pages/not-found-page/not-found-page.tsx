function NotFoundPage() {
    return (
        <div className="page page--gray page--login">
            <main className="page__main page__main--login">
                <div className="page__login-container container">
                    <section className="login">
                        <h1 className="login__title">404 Not Found</h1>
                            <a href="/" className="login__submit form__submit button">
                                Go to Main Page
                            </a>
                    </section>
                </div>
            </main>
        </div>
    )
};

export default NotFoundPage;