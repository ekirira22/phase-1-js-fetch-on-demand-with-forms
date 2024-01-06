const init = () => {
    /******************** Event Listeners ********************/
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()
        retrieveMovies(e)
        e
    })


    /******************** Functions ********************/

    function retrieveMovies(e){
        const value = e.target.children[1].value
        fetch(`http://127.0.0.1:3000/movies/${value}`)
            .then(resolve => resolve.json())
                .then(data => displayResult(data))
    }

    function displayResult(movie){
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        
        title.textContent = movie.title
        summary.textContent = movie.summary
        
    }

   
}

document.addEventListener('DOMContentLoaded', init);