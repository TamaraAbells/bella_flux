import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faCircleNotch as fasCircleNotch,
  faChevronLeft as fasChevronLeft,
  faChevronDown as fasChevronDown,
  faCheck as fasCheck,
  faTimes as fasTimes,
  faBars as fasBars,
  faMagnifyingGlass as farMagnifyingGlass,
  faArrowTrendUp as farArrowTrendUp,
  faArrowRight as farArrowRight,
  faCaretRight as farCaretRight,
  faClose as farClose,
} from '@fortawesome/free-solid-svg-icons'

import {
  faEnvelopeOpen as farEnvelopeOpen,
  faCheckCircle as farCheckCircle,
} from '@fortawesome/free-regular-svg-icons'

import {
  faFacebookF as FabFacebookF,
  faTwitter as FabTwitter,
  faInstagram as FabInstagram,
  faYoutube as FabYoutube,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  fasCircleNotch, fasChevronLeft,
  fasChevronDown, fasCheck,
  fasTimes, fasBars,
  farArrowTrendUp, farArrowRight,
  farCaretRight, farClose
)

library.add(
  farEnvelopeOpen, farCheckCircle,
  farMagnifyingGlass
)

library.add(
  FabFacebookF, FabTwitter,
  FabInstagram, FabYoutube
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
