let pronoun = ['the', 'our', 'i', 'you', 'he', 'it', 'we', 'they'];
let adj = ['great', 'big', 'hot', 'cold', 'warm', 'dry', 'ligth', 'clean'];
let noun = ['jogger', 'racoon', 'family', 'party', 'sky', 'baby', 'lady', 'library', 'puppy', 'fly'];
let suffix = [".com", ".co", ".es", ".cl"];

let domain =(pronoun, adj, noun) => {
    for (var p = 0; p < pronoun.length; p++) {
        for (var a = 0; a < adj.length; a++) {
            for (var n = 0; n < noun.length; n++)
            for (x = 0; x < suffix.length; x++) {
                console.log(pronoun[p] + adj[a] + noun[n] + suffix[x]);
            }
        }
    }

};
domain(pronoun, adj, noun);


// + '.com' + '.es' + '.org' + '.io' + '.us'

