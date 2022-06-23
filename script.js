let pronoun = ['the', 'our', 'i', 'you', 'he', 'it', 'we', 'they'];
let adj = ['great', 'big', 'hot', 'cold', 'warm', 'dry', 'ligth', 'clean']
let noun = ['jogger', 'racoon', 'family', 'party', 'sky', 'baby', 'lady', 'library', 'puppy', 'fly']

let domain = ( pronoun, adj, noun ) => {
    for (var p = 0; p < pronoun.length; p++) {
        for (var a = 0; a < adj.length; a++) {
            for (var n = 0; n < noun.length; n++) {
                console.log(pronoun[i] + adj[j] + noun[l] + '.cl');
            }
        }
    }

};
domain(pronoun, adj, noun);


// + '.com' + '.es' + '.org' + '.io' + '.us'

