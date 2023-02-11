document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 100,
        loop: true
    }) 
    .type('Cadatre-se', {delay: 300})
    .move(-6)
    .type('s')
    .move(6)
    .delete(11)
    .type('Cadastrre-se', {delay: 300})
    .move(-4)
    .delete(1)
    .move(4)
    .delete(11)
    .type('Cadastrese', {delay: 300})
    .move(-2)
    .type('-', {delay: 500})
    .move(2)
    .delete(11)
    .go()
   
})