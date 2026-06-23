import Card from '@/components/jogoCard';
import { getJogosEmAlta } from '@/lib/API/API';
import TituloHome from '@/components/tituloHome';
import Grid from '@/components/grid';

export default async function emAlta() {
  const jogos = await getJogosEmAlta();
  return (
    <section>
      <TituloHome text={'Em alta'} />
      <Grid>
        {jogos.map((jogo) => (
          <Card jogo={jogo} key={jogo.id} />
        ))}
      </Grid>
    </section>
  );
}
