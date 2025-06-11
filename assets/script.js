// Dato un array di oggetti rappresentante un team di un’azienda, 
// creare una pagina dedicata in cui mostrare una card per ciascun componente.

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png"
  }
];

// Dichiaro una variabile per collegare l'elemento html dove voglio inserire le card
const cardEl = document.getElementById('card-displayer');
console.log(cardEl)

const cardGenerator = cardEl.innerHTML;


// Invoco la funzione per mostrare le card
renderMembers(teamMembers, cardGenerator)


// Dichiaro una funzione per generare le card in pagina
function renderMembers (teamMembers, cardGenerator, ){
  cardGenerator = '';

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    
    const memberMarkup = memberDisplayer(member);
    console.log(memberMarkup);
    
    cardEl.insertAdjacentHTML('beforeend', memberMarkup);
  }
}


// Dichiaro una funzione per generare la card
function memberDisplayer (member){
  const {name, role, email, img} = member;
  console.log(name, role, email, img,);

  const memberCard = 
  `
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">    
      <div class="card mb-4" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col col-sm-4 col-md-4">
            <img src=${img} class="img-fluid rounded-start" alt="..."></img>
          </div>
                        
          <div class="col col-sm-8 col-md-8">
            <div class="card-body">
              <h5 class="card-text">${name}</h5>
              <p class="card-text">${role}</p>
              <p class="card-text"><small class="text-body-secondary">${email}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  return memberCard
}





// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina