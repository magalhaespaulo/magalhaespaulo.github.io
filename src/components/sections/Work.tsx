'use client'

import { AnimateHeader } from '@/components/AnimateHeader'
import { type Case, type CaseWithColor, Scene } from '@/components/3d/Scene'
import { Color } from 'three'

export const Work = () => (
  <section id="work" className="relative min-h-screen overflow-hidden">
    <AnimateHeader translateX={['100%', '25%']}>Selected Work</AnimateHeader>

    <Scene cases={addColorsToCases(data)} />
  </section>
)

const addColorsToCases = (cases: Case[]): CaseWithColor[] => {
  const hexColors = ['#DC3838', '#FECC30', '#0E976B', '#00ACE4', '#7357F0', '#E261D2']
  const threeColors = hexColors.map((color) => new Color(color))

  return cases.map((item, index) => ({
    ...item,
    color: threeColors[index % threeColors.length],
    colorHex: hexColors[index % hexColors.length],
  }))
}

const data: Case[] = [
  {
    image: '/images/cases/resultados.webp',
    title: 'Resultados',
    content:
      'The Resultados is an easy way to track the election results. You can see all the candidates for the elections and see the details of the results of states offices.',
    technologies: ['TypeScript', 'Ionic', 'Angular', 'Sass (CSS)'],
  },
  {
    image: '/images/cases/coronavirus.webp',
    title: 'Coronavírus SUS',
    content:
      'The app is responsible for initial filtering on COVID 19 infection suspicion. Coronavirus SUS inform the users to go to the nearest hospital. With Exposure Notification technology, mostly known as Privacy-Preserving Contact Tracing and a complex structure developed by Apple Inc. and Google were part of the development.',
    technologies: ['TypeScript', 'Ionic', 'Angular', 'Sass (CSS)'],
  },
  {
    image: '/images/cases/etitulo.webp',
    title: 'e-Título',
    content:
      'The app provides a digital election card for all Brazilian voters. As a user, you can get your personal information in a fast and easy way. The app show the following pieces of information: electoral zone, cadastral situation, electoral discharge certificate, and electoral crimes',
    technologies: ['TypeScript', 'Ionic', 'Angular', 'Sass (CSS)'],
  },
  {
    image: '/images/cases/jardimbotanico.webp',
    title: 'Jardim Botânico do RJ',
    content:
      'A fantastic solution that brings you closer to the Botanical Garden. You can visit the garden in an interactive and fast way. The app will help you identify the 1500 plant types during the tour around 55 acres. You will  also see historical monuments and unique orchids and bromeliads',
    technologies: ['TypeScript', 'Ionic', 'Angular', 'Sass (CSS)'],
  },
  {
    image: '/images/cases/conectsus.webp',
    title: 'Conect SUS',
    content:
      "It is an official app for the Brazilian Ministry of Health. As a user, you can track your SUS patient's historical, such as exams, vaccines, and medications.  The app collects and shares information that helps to control emergencies, with emphasis on the Covid-19 vaccination process in Brazil.",
    technologies: ['TypeScript', 'Ionic', 'Angular', 'Sass (CSS)'],
  },
]
