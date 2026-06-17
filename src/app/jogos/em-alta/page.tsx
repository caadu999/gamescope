import Card from "@/components/jogoCard"
import { getJogosEmAlta } from "@/lib/API/API"

export default async function emAlta() {

  const jogos = await getJogosEmAlta()
  return (
    <div>
      <ul>
        {jogos.map((jogo) => <Card jogo={jogo} key={jogo.id}/>)}
      </ul>
    </div>
  )
}