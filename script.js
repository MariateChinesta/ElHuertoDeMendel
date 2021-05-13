const navLink = document.querySelectorAll('.nav-link')
const container = document.querySelector('.container')
import { hello } from './script2.js';
console.log(hello())

const content = {
  inicio: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis aliquid accusamus corrupti iusto nulla
  est ipsa sapiente ipsam, veritatis repellendus error eligendi aut numquam, ipsum nihil provident explicabo
  voluptatem ad quae hic! Culpa velit eos alias sint delectus harum incidunt nesciunt iusto at dolore aliquam nobis
  distinctio vitae cupiditate numquam inventore iure non, fugit quae nisi perferendis! Magnam ipsam quas soluta quis
  neque id, sed veniam labore! Soluta, magnam! Eaque officia, dignissimos molestiae quia sed itaque aut ad veniam.
  Amet aliquam iusto vitae veniam in aperiam quidem. Sed corporis, recusandae quae velit, modi, nihil similique fuga
  est ad iusto dolorum nam! Nam voluptatibus dolor quas molestiae? Quibusdam, harum corporis voluptates inventore
  magnam quia voluptatibus expedita at optio porro quod earum veritatis dicta consequatur, quos ea accusamus, eum
  voluptatum tempora. A aliquam odit consequatur incidunt et asperiores nesciunt voluptatem doloremque illo sint
  ducimus maxime excepturi ad at porro maiores officiis dicta, quas expedita laudantium aliquid est! Eos voluptatem
  vel veniam accusamus voluptates debitis! Eius, beatae. Iusto saepe commodi suscipit officia quidem distinctio
  animi, error obcaecati delectus aspernatur aliquid totam modi, impedit quo, cumque ea facere ut nisi dolor
  temporibus minus voluptate consequatur. Placeat natus est dolorum non, neque error ratione fugit deleniti vitae ea
  rerum esse ullam adipisci amet. Corporis veritatis fuga sint earum ab sequi, suscipit repellendus voluptates nobis
  optio quo eaque dolores est sit architecto molestiae laboriosam consectetur. Assumenda, voluptatem consequuntur
  nesciunt repellendus, magnam in voluptate autem quod repudiandae aut sunt vitae. Corporis, esse nam delectus
  voluptate deserunt laudantium adipisci possimus cupiditate fugiat sint saepe in sit explicabo dolore iste debitis
  alias quod est tempore nemo voluptates! Maiores amet libero, beatae illo voluptate, nostrum at voluptates
  doloribus ut mollitia, iste magni expedita culpa? Suscipit quasi velit quos eligendi voluptatibus repudiandae. Hic
  et maiores totam? Harum illo distinctio perferendis ipsa tenetur. Nisi, consequatur! Alias veritatis, perferendis
  soluta adipisci enim quae saepe sapiente est rem, facere beatae ea error ipsa nobis tempore recusandae aliquam
  dolor. Voluptatibus ut aut ratione magni voluptates impedit quisquam minima! Commodi nihil quidem in culpa vel
  omnis placeat, tempora dolor veniam, sunt doloremque? Rerum odio neque ex ab autem itaque fuga tempore
  necessitatibus, quisquam reprehenderit voluptatibus, magni, magnam quas exercitationem minima a maxime natus sunt
  aliquid repellat labore nisi maiores? Vero quae facere expedita ab, recusandae, soluta fuga neque quibusdam
  molestiae beatae hic molestias quod, deserunt nam. Ullam debitis vero id. Error exercitationem praesentium
  deserunt minus sequi eligendi suscipit, consequatur iste repellendus consecte tur ex cupiditate asperiores
  molestiae nemo dicta veritatis magni laborum! Quis, ab totam. Et minus pariatur a, perspiciatis cum dignissimos.
  Ratione corrupti deserunt aliquid neque, ipsum nesciunt aut soluta laboriosam facere dolore fuga distinctio
  consequatur, perspiciatis ipsam explicabo, et exercitationem suscipit itaque provident! Dignissimos laboriosam
  sunt fugit ut, ab corrupti voluptatem magnam repellat nostrum, amet id, maxime labore cupiditate cum libero
  temporibus natus saepe. Rerum debitis omnis ratione recusandae repellat fuga dolores. Cumque, ipsa? Dolores,
  doloribus at tempora dolorem nulla minima eum hic. Ex illum nulla dolore exercitationem voluptatum quasi
  voluptatem eius. Ipsa, architecto.</p>`,
  enterate: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NBiA_bGYLPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NBiA_bGYLPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NBiA_bGYLPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NBiA_bGYLPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NBiA_bGYLPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NBiA_bGYLPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NBiA_bGYLPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,
  glosario: `
  <iframe src="https://drive.google.com/file/d/1lsckUKhPva3ra5NFlA5BsGmQkhrhZ7o0/preview" width="640" height="600"></iframe>
  <iframe src="https://drive.google.com/file/d/1lsckUKhPva3ra5NFlA5BsGmQkhrhZ7o0/preview" width="640" height="600"></iframe>
  <iframe src="https://drive.google.com/file/d/1lsckUKhPva3ra5NFlA5BsGmQkhrhZ7o0/preview" width="640" height="600"></iframe>

  `,
  misterios: `Misterios`,
  al_lio: `Al Lio`,
}

navLink.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()

    cleanActiveNavLinks()
    link.classList.add('active')

    document.title = `${link.innerHTML} | El Huerto de Mendel`
    setContent(link.id)
  })
})


function cleanActiveNavLinks() {
  navLink.forEach(link => {
    link.classList.remove('active')
  })
}

function setContent(id) {
  container.innerHTML = content[id]
}

setContent('inicio')