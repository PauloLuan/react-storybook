import { addDecorator } from '@storybook/react' // <- or your view layer
import { withTests } from '@storybook/addon-jest'

import results from '../src/.jest-test-results.json'

addDecorator(
  withTests({
    results
  })
)
