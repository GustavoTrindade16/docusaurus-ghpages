import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Compramos carros usados',
    Svg: require('@site/static/img/jovem-homem-comprando-carro-liso_82574-5563.svg').default,
    description: (
      <>
        Transforme seu antigo companheiro de 
        estrada em dinheiro na hora! 
        Compramos seu carro usado com 
        as melhores ofertas do mercado. 
       Faça negócio conosco e 
        dê um adeus lucrativo ao seu veículo atual!
      </>
    ),
  },
  {
    title: 'Descubra a potência sem pesar no bolso!',
    Svg: require('@site/static/img/desenho-de-anime-de-carro-rapido_345327-359_1.svg').default,
    description: (
      <>
        Nossos melhores carros a preços irresistíveis estão prontos para conquistar as estradas. 
        Entre no volante do seu próximo veículo sem comprometer o orçamento. Performance incrível, estilo imbatível, 
        e tudo a um preço que vai te surpreender. Seu novo carro dos 
        sonhos está esperando por você, e o melhor? A um preço que cabe no seu bolso!
      </>
    ),
  },
  {
    title: 'Crie o carro dos seus sonhos do zero!',
    Svg: require('@site/static/img/sonhe-com-o-conceito-de-carro-da-pagina-de-destino-com-o-pai-olhando-para-o-veiculo-de-desenho-infan.svg').default,
    description: (
      <>
        Crie o carro dos seus sonhos do zero! Personalize cada detalhe e transforme sua visão em realidade. 
        Monte seu carro ao seu gosto, porque a perfeição está nos detalhes.
         Liberte sua criatividade e dirija algo verdadeiramente único.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
