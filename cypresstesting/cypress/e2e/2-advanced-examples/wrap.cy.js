

it('check the wrap function',()=> {
    cy.wrap(1)
    .then((num)=> {
        expect(num).to.equal(1)
        return 2
        //also we can write => cy.wrap(2)
    })
    
    .then((num)=> {
        expect(num).to.equal(2);
    });
});
