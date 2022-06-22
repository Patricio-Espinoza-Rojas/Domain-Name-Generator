function generate() {

    let pronoun = ['The','our','',''];
    let rand_pronoun = Math.floor(Math.random() * pronoun.length);
    let adj = ['great','big','',''];
    let rand_adj = Math.floor(Math.random() * adj.length);
    let noun = ['jogger', 'racoon', ''];
    let rand_noun = Math.floor(Math.random() * noun.length);
    // let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    // let rand_when = Math.floor(Math.random() * when.length);

    document.getElementById('result').innerHTML = "<h1>your domains is:</h1><div class='alert alert-success'><h2>" + pronoun[rand_pronoun] + " " + adj[rand_adj] + " " +noun[rand_noun] + "</h2></div>";
}
