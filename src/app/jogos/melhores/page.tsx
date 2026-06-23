import Grid from '@/components/grid';
import Card from '@/components/jogoCard';
import TituloHome from '@/components/tituloHome';
import { getMaisBemAvaliados } from '@/lib/API/API';

export default async function Melhores() {
  const res = await getMaisBemAvaliados();

  return (
    <section>
      <TituloHome text={'Melhores'} />
      <Grid>
        {res.map((jogo) => (
          <Card key={jogo.id} jogo={jogo} />
        ))}
      </Grid>
    </section>
  );
}
