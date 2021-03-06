import 'ragrid'
import 'CSS/tools/utilities.css'
import 'CSS/generic/typography.css'
import 'CSS/elements/body.css'
import 'CSS/elements/nav.css'
import 'CSS/elements/figure.css'
import 'CSS/elements/button.css'
import 'CSS/elements/section.css'
import 'CSS/elements/main.css'
import 'CSS/elements/slider.css'
import 'CSS/components/menu.css'
import 'CSS/components/avatar.css'
import 'CSS/components/icon.css'
import 'CSS/components/balance.css'
import 'CSS/components/actions.css'
import 'CSS/components/currency-list.css'
import 'CSS/trumps/ios.css'

import { $ } from 'blingblingjs'

$('#amount').on('input', ({target}) =>
  $('#coin').value = target.value)

// $('#coin').focus()