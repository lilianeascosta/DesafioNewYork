var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/lilianeascosta/DesafioNewYork.git', // Update to point to your repository  
        user: {
            name: 'lilianeascosta', // update to use your name
            email: 'lilianecosta767@hotmail.com' // Update to use your email
        },
		dotfiles: true
    },
    () => {
        console.log('Deploy Complete!')
    }
)