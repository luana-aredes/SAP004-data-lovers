export default () => {
  const template = document.createElement("div")
  template.innerHTML = `
  <div id="tips-card">
    <div class="card-container">
      <div class="card">
        <div class="front-tips">
          <div class="card-title">
            <p class="card-title-content">Como começar com um Pikachu em Pokémon GO?</p>
          </div>
          <img class="tips-image" src="../images/pikachu.png" />
        </div>
        <div class="back-tips">
          <p class="text-card">
            Logo após você criar sua conta, será obrigado a escolher entre Bulbassauro, Charmander e Squirtle. É a boa
            e velha decisão entre o tipo planta, fogo e água que acompanha a série ao longo dos últimos 20 anos. Para
            capturar o PIKACHU como seu primeiro Pokémon
            basta que você ignore os outros 3 (Squirtle, Bulbasaur e Charmander) por alguns minutos e dê algumas
            “voltas por ai”. Eles irão continuar aparecendo no mapa, mas você deve continuar os ignorando. Após alguns
            minutos o Pikachu
            também aparecerá no mapa e poderá ser capturado. Fácil não?
          </p>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="front-tips">
          <div class="card-title">
            <p class="card-title-content">Como não errar o lançamento das Pokébolas</p>
          </div>
          <img src="../images/pokebola.png" class="pokeball" alt="" />
        </div>
        <div class="back-tips">
          <p class="text-card">
            Para maximar o acerto basta manter o dedo pressionado sobre a Pokébola na tela do smartphone e analisar o
            anel colorido (verde, amarelo ou vermelho) que fica ao redor do Pokémon. Quanto menor ela ficar, mais
            fácil será capturá-lo e este é o momento exato
            em que você deve arremessar a Pokébola. Obviamente nada é 100% garantido, mas com total certeza essa dica
            vai fazer você economizar muitas Pokébolas. E lembre-se! Muitas vezes a pressa é inimiga da perfeição,
            então tenha paciência
            e espere o momento certo para garantir a captura do seu Pokémon.
          </p>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="front-tips">
          <div class="card-title">
            <p class="card-title-content">Utilize a sua casa para chocar ovos</p>
          </div>
          <img src="../images/egg.png" class="pokeball" alt="" />
        </div>
        <div class="back-tips">
          <p class="text-card">
            Uma das mecânicas de Pokémon GO é a de caminhar para chocar ovos. Porém, não é preciso sair de casa para
            que a distância seja registrada, pois o aplicativo considera o balanço do telefone e não a quantidade de
            passos. Por isso, os jogadores que quiserem
            chocar ovos com maior rapidez, podem balançar seus dispositivos ou andar normalmente pela casa. É
            importante lembrar de habilitar o item "Sincroaventura" para que o game reconheça a distância mesmo quando
            ele estiver fechado.
            Os ovos colocados em incubadoras durante o período de isolamento irão exigir que você ande metade da
            distância original.
          </p>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="front-tips">
          <div class="card-title">
            <p class="card-title-content">Batalhe com seus amigos</p>
          </div>
          <img src="../images/Ash.png" class="tips-image" alt="">
        </div>
        <div class="back-tips">
          <p class="text-card">
            Com a nova atualização, é possível batalhar com muito mais facilidade com amigos, outros jogadores e até
            mesmo treinar com os líderes das três equipes (treinadores precisam atingir o nível 10 para poderem
            desbloquear o modo). Batalhar com seus amigos
            em Pokémon GO sempre foi uma tarefa difícil. Antes, era preciso ter quase o nível máximo de amizade com
            algum treinador. Porém, após a atualização, basta apenas ter o primeiro nível de amizade com seus amigos
            ("Bela Amizade").Para
            batalhar com algum amigo ou amiga de sua lista, basta abrir o perfil e selecionar o item “Batalhar”.
            Selecione a Liga que você quer duelar, em seguida, clique em “Vamos Batalhar!” para iniciar a luta.
          </p>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="front-tips">
          <div class="card-title">
            <p class="card-title-content">Evoluções do Eevee em Pokémon Go</p>
          </div>
          <img src="../images/eevee.png" class="tips-image" alt="">
        </div>
        <div class="back-tips">
          <p class="text-card">
            No jogo para celular, há uma maneira de decidir qual espécie o Pokémon Eevee se transformará. O segredo
            está em atribuir um nome ao Pokémon antes de tocar no botão para evoluir. Cada forma precisa de um nome
            específico. Mas, atenção: o procedimento de
            alterar o nome funciona apenas uma vez para cada evolução do Eevee,tenha certeza que está evoluindo o
            Pokémon correto para forma desejada. Após renomear, ainda não inicie a evolução do Eevee. Pode ocorrer
            algum problema de
            salvamento do jogo, portanto o recomendado é fechar e abrir o Pokémon Go, conferir se o nome está correto
            e em seguida evoluir o Pokémon.
          </p>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="front-tips">
          <div class="card-title">
            <p class="card-title-content">Como escolher as evoluções do Eevee em Pokémon Go</p>
          </div>
          <img src="../images/glaceon.png" class="tips-image" alt="">
        </div>
        <div class="back-tips">
          <p class="text-card">
            Para as evoluções abaixo, renomeie o Eevee com os seguintes nomes: <br><br> - Flareon: Pyro;<br> -
            Jolteon: Sparky;
            <br> - Vaporeon: Rainer;<br> - Espeon: Sakura;<br> - Umbreon: Tamao;<br> - Leafeon: Linnea;
            <br> - Glaceon: Rea.
            <br><br> Agora é só aproveitar esses Pokemons!
          </p>
        </div>
      </div>
    </div>
  </div>
  `
  return template
}
