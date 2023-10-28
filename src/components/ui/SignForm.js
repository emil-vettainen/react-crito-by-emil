import React from 'react'

const SignForm = () => {
  return (
    <section className="sign-up">
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form id="sign-up-form" className="sign-up-form">
                    <input type="email" id="email" name="email" required
                        placeholder="username@domain.com" />
                    <button aria-label="Subscribe to our newsletter" type="submit" id="submit" className="button">Subscribe<i
                            className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></button>
                </form>
            </div>
        </section>
  )
}

export default SignForm