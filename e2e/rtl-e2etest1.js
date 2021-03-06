/* globals describe it browser */
const expect = require('chai').expect;

describe('ULP App', () => {
    it('Should load with the right title', () => {
        browser.url('http://localhost:3000/');
        const actualTitle = browser.getTitle();

        expect(actualTitle).to.eql('ULP');
    });

    it('Should allow me to create a Todo', () => {
        const todoText = 'Get better at testing';
        browser.url('http://localhost:3000/');
        browser.element('.todo-input').setValue(todoText);
        browser.click('.todo-submit');

        const actual = browser.element('.todo-text').getText();
        expect(actual).to.equal(todoText);
    });

    it('Should allow me to delete a Todo', () => {
        const todoText = 'Some text';
        browser.url('http://localhost:3000/');
        browser.element('.todo-input').setValue(todoText);
        browser.click('.todo-submit');
        browser.click('.todo-delete');

        const actual = browser.element('.todo-text');
        expect(actual.state).to.equal('failure');
    });

    it('Should allow me to undelete a Todo', () => {
        const todoText = 'Some text';
        browser.url('http://localhost:3000/');
        browser.element('.todo-input').setValue(todoText);
        browser.click('.todo-submit');
        browser.click('.todo-delete');
        browser.click('.todo-undelete');

        const actual = browser.element('.todo-text').getText();
        expect(actual).to.equal(todoText);
    });

    it('should allow me to switch to the patients panel', () => {
        browser.url('http://localhost:3000/');
        browser.element('button=Patients').click();

        const pageH1 = browser.element('h2').getText();
        expect(pageH1).to.equal('ULP Patients');
    });
});
