describe("login", () => {
  it("when credentials are correct should redirect to the home page", () => {
    cy.visit("/login");
    cy.findByPlaceholderText("Username").type("nopito");
    cy.findByPlaceholderText("Password").type("otipon");
    cy.findByRole("button", { name: "Log in" }).click();

    cy.findByText("Hello! This is the homepage").should("be.visible");
  });

  it("when credentials are wrong should display an error message", () => {
    cy.visit("/login");
    cy.findByPlaceholderText("Username").type("nopito");
    cy.findByPlaceholderText("Password").type("otipon1");
    cy.findByRole("button", { name: "Log in" }).click();

    cy.findByText("Wrong credentials").should("be.visible");
  });
});
