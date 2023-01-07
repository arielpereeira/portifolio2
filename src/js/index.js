import EmblaCarousel from 'embla-carousel'
import { setupTweenOpacity } from './tween-opacity'
import '../css/estilo.css'


const OPTIONS = { loop: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)
const { applyTweenOpacity, removeTweenOpacity } = setupTweenOpacity(emblaApi)

emblaApi
  .on('init', applyTweenOpacity)
  .on('scroll', applyTweenOpacity)
  .on('reInit', applyTweenOpacity)
  .on('destroy', removeTweenOpacity)
