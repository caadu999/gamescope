import Card from '@/components/jogoCard';
import Grid from '@/components/grid';
import TituloHome from '@/components/tituloHome';
import { getLancamentos } from '@/lib/API/API';

export const dynamic = 'force-dynamic';

export default async function Lancamentos() {
  const res = await getLancamentos();

  return (
    <section>
      <TituloHome text={'Lançamentos'} />
      <Grid>
        {res.map((jogo) => (
          <Card key={jogo.id} jogo={jogo} />
        ))}
      </Grid>
    </section>
  );
}
