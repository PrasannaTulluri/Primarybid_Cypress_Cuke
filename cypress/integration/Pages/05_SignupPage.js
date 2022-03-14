var HelpPage=require('./04_HelpPage');

class SignUpPage extends HelpPage {
	get signUpPageHeader() { return cy.get('.top-border-teal h2') }
	get firstName() { return cy.get('input[name="firstname"]') }
	get email() { return cy.get('input[type="email"]') }
	get password() { return cy.get('input[name="password"]') }
	get confirmPassword() { return cy.get('input[name="confirmPassword"]') }
	get error() { return cy.get('span.error') }

	enterSignUpDetails(email, password, confirmPassword) {
		this.email.type(email)
		this.password.type(password)
		this.confirmPassword.type(confirmPassword)
	}

	inputConfirmPassword(password) {
		this.confirmPassword.clear().type(password)
	}
}
export default SignUpPage;	